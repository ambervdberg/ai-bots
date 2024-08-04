import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ChatCompletion, ChatCompletionUserMessageParam } from 'openai/resources/chat/completions';

import { Auth } from '../../authentication/auth-mixin';

/**
 * Abstract class representing an AI bot.
 */
export abstract class Bot extends Auth(LitElement) {
  /**
   * The response from the bot.
   */
  @property({ type: String }) response: string = '';

  private typingInterval?: number;

  /**
   * The API URL for the bot.
   */
  protected apiUrl = (import.meta as any).env.VITE_API_URL;

  /**
   * The user's question.
   */
  protected userQuestion: ChatCompletionUserMessageParam = {
    role: 'user',
    content: ''
  };

  /**
   * Starts the bot.
   */
  abstract start(): Promise<void>;

  /**
   * Displays the response from the bot.
   * @param completion The completion object containing the response.
   */
  protected displayResponse(completion: ChatCompletion): void {
    this.response = completion.choices[0].message.content!;
    this.requestUpdate();
  }

  /**
   * Displays a response string from the bot.
   * @param response The response string to display.
   */
  protected displayResponseString(response: string): void {
    this.response = response;
    this.requestUpdate();
  }

  /**
   * Displays a response stream from the bot.
   * @param response The response stream to display.
   */
  protected displayResponseStream(response: string): void {
    this.response += response;
    this.requestUpdate();
  }

  /**
   * Sets the typing message for the bot.
   * @param message The typing message to display.
   */
  protected setTypingMessage(message: string) {
    this.stopTypingMessage();
    let dotCount = 1;
    const maxDots = 4;

    const updateTypingMessage = () => {
      const dots = '.'.repeat(dotCount);
      const invisibleDots = `<span class="invisible">${dots}</span>`; // to keep the message centered
      this.displayResponseString(`${invisibleDots}<i>${message}${dots}</i>`);
      dotCount = (dotCount % maxDots) + 1;
    };

    this.typingInterval = window.setInterval(updateTypingMessage, 500);
  }

  /**
   * Stops the typing message for the bot.
   */
  protected stopTypingMessage(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.typingInterval = undefined;
    }
  }

  /**
   * Processes a response stream from the bot.
   * @param result The response stream to process.
   */
  protected async processStream(result: Response): Promise<void> {
    try {
      const readableStream = result.body as ReadableStream<Uint8Array>;
      const reader = readableStream.getReader();
      const decoder = new TextDecoder();

      const readStream = async () => {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const text = decoder.decode(value, { stream: true });

          if (text) {
            this.displayResponseStream(text);
          }
        }
        reader.releaseLock();
      };

      this.stopTypingMessage();
      this.displayResponseString('');

      await readStream();
    } catch (error) {
      console.error('Error reading the stream:', error);
      this.stopTypingMessage();
      this.displayResponseString(
        'An error occurred while processing the stream. Please try again.'
      );
    }
  }
}
