import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../../bot-container/bot-container';
import { Bot } from '../bot';
import { styles } from './poem-bot.styles';

/**
 * Represents a Poet Bot that generates IT related poems.
 */
@customElement('poem-bot')
export class PoemBot extends Bot {
  /**
   * The name of the Bot.
   */
  @property({ type: String }) name = 'Poem bot';

  /**
   * The CSS styles for the Poet Bot component.
   */
  static styles = styles;

  constructor() {
    super();
    this.response = '';
  }

  /**
   * Starts the Poet Bot and generates a poem based on AI generated user input.
   */
  async start(): Promise<void> {
    try {
      this.userQuestion.content = await this.createPrompt();

      this.setTypingMessage('Poet is typing');

      const result = await fetch(`${this.apiUrl}/poem`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: this.userQuestion.content })
      });

      if (result.status !== 200) {
        this.stopTypingMessage();
        this.displayResponseString('An error occurred. Please try again.');
        return;
      }

      await this.processStream(result);
    } catch (error) {
      console.error('Error in start method:', error);
      this.stopTypingMessage();
      this.displayResponseString('An error occurred. Please try again.');
    }
  }

  /**
   * Retrieves an AI generated user prompt.
   * @returns the generated prompt.
   */
  async createPrompt(): Promise<string> {
    this.setTypingMessage('Generating subject');
    const response = await fetch(`${this.apiUrl}/subject`);
    return response.text();
  }

  render() {
    return html`
      <bot-container .name=${this.name} .response=${this.response}>
        <button @click="${this.start}">Generate Poem</button>
        <p id="botQuestion">${this.userQuestion.content || 'Subject will be generated...'}</p>
      </bot-container>
    `;
  }
}
