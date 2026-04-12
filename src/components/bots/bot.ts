import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ChatCompletion, ChatCompletionUserMessageParam } from 'openai/resources/chat/completions';

import { Auth } from '../../authentication/auth-mixin';

/**
 * Abstract class representing an AI bot.
 */
export abstract class Bot extends Auth(LitElement) {
  /** The response from the bot.*/
  @property({ type: String }) response: string = '';

  /** Indicates whether the bot is currently generating output. */
  @state() protected isTyping = false;

  /** Message displayed while the bot is generating output. */
  @state() protected typingMessage = '';

  /** Active loader variant for the bot typing state. */
  @state() protected typingVariant: 'thinking' | 'writing' = 'writing';

  /** Animated dot count used by the typing indicator. */
  @state() protected typingDotCount = 1;

  /** Interval handle for the typing indicator animation. */
  private botTypingTimer?: NodeJS.Timeout;

  /** The API URL for the bot. */
  protected apiUrl = (import.meta as any).env.VITE_API_URL;

  /** The user's question. */
  protected userQuestion: ChatCompletionUserMessageParam = {
    role: 'user',
    content: ''
  };

  /** Starts the bot. */
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
   * @param variant The loader variant: `'thinking'` (sparkles) or `'writing'` (quill).
   */
  protected setTypingMessage(message: string, variant: 'thinking' | 'writing' = 'writing') {
    this.stopTypingMessage();
    this.typingMessage = message;
    this.typingVariant = variant;
    this.typingDotCount = 1;
    this.isTyping = true;

    this.botTypingTimer = globalThis.setInterval(() => {
      this.typingDotCount = (this.typingDotCount % 4) + 1;
    }, 500);
  }

  /** Stops the typing message for the bot. */
  protected stopTypingMessage(): void {
    if (this.botTypingTimer) {
      clearInterval(this.botTypingTimer);
      this.botTypingTimer = undefined;
    }
    this.isTyping = false;
  }

  /**
   * Processes a response stream from the bot.
   * @param result The response stream to process.
   */
  protected async processStream(result: Response): Promise<void> {
    try {
      if (!result.body) {
        this.displayResponseString('Received an empty response. Please try again.');
        return;
      }

      // Stream the response incrementally so the UI updates as tokens arrive.
      const reader = result.body.getReader();
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
