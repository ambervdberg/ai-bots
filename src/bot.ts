import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ChatCompletion, ChatCompletionUserMessageParam } from 'openai/resources/chat/completions';

export abstract class Bot extends LitElement {

  @property({ type: String }) response: string = '';

  private typingInterval?: number;

  protected apiUrl = 'http://localhost:3001/api/';

  protected aiModel = 'gpt-4o';

  protected userQuestion: ChatCompletionUserMessageParam = {
    role: 'user',
    content: ''
  };

  constructor(public name: string) {
    super();
  }

  abstract start(userInput?: string): Promise<void>;

  protected displayResponse(completion: ChatCompletion): void {
    this.response = completion.choices[0].message.content!;
    this.requestUpdate();
  }

  protected displayResponseString(response: string): void {
    this.response = response;
    this.requestUpdate();
  }

  protected displayResponseStream(response: string): void {
    this.response += response;
    this.requestUpdate();
  }

  protected setTypingMessage(message: string) {
    this.stopTypingMessage();
    let dotCount = 1;
    const maxDots = 5;

    const updateTypingMessage = () => {
      const dots = '.'.repeat(dotCount);
      this.displayResponseString(`<span class="invisible">${dots}</span><i>${message}${dots}</i>`);
      dotCount = (dotCount % maxDots) + 1;
    };

    this.typingInterval = window.setInterval(updateTypingMessage, 500);
  }

  protected stopTypingMessage() {
    clearInterval(this.typingInterval);
  }

  protected async processStream(result: Response): Promise<void> {
    const readableStream = result.body as ReadableStream<Uint8Array>;
    const reader = readableStream.getReader();
    const decoder = new TextDecoder();

    const readStream = async () => {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const text = decoder.decode(value, { stream: true });

          if (text) {
            this.displayResponseStream(text);
            this.requestUpdate();
          }
        }
      } catch (error) {
        console.error('Error reading the stream:', error);
      } finally {
        reader.releaseLock();
      }
    };

    this.stopTypingMessage();
    this.displayResponseString('');

    await readStream();
  }
}
