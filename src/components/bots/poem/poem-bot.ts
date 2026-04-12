import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../../bot-container/bot-container';
import { Bot } from '../bot';
import { styles } from './poem-bot.styles';

/** Represents a Poet Bot that generates IT related poems.*/
@customElement('poem-bot')
export class PoemBot extends Bot {
  /** The name of the Bot. */
  @property({ type: String }) name = 'Poem bot';

  static styles = styles;

  constructor() {
    super();
    this.response = '';
  }

  /** Starts the Poet Bot and generates a poem. */
  async start(): Promise<void> {
    try {
      this.setTypingMessage('Poet is writing', 'writing');

      const result = await fetch(`${this.apiUrl}/poem`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      // Handle success response
      if (result.status !== 200) {
        this.stopTypingMessage();
        this.displayResponseString('An error occurred. Please try again.');
        return;
      }

      await this.processStream(result);

      // Handle error
    } catch (error) {
      console.error('Error in start method:', error);
      this.stopTypingMessage();
      this.displayResponseString('An error occurred. Please try again.');
    }
  }

  /**Renders the poem bot UI and the generated poem response */
  render() {
    return html`
      <bot-container
        .name=${this.name}
        .response=${this.response}
        .isTyping=${this.isTyping}
        .typingMessage=${this.typingMessage}
        .typingVariant=${this.typingVariant}
        .typingDotCount=${this.typingDotCount}
      >
        <button @click="${this.start}">Generate Poem</button>
      </bot-container>
      ${this.response
        ? html`<p class="style-note">
            * Poem layout and style are chosen by the AI — each one looks a little different.
          </p>`
        : ''}
    `;
  }
}
