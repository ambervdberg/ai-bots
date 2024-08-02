import { css, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import { router } from '../router';
import { Bot } from './bot';

/**
 * Represents a Poet Bot that generates IT related poems.
 */
@customElement('poet-bot')
export class PoetBot extends Bot {
  /**
   * The name of the Bot.
   */
  @property({ type: String }) name = 'Poet bot';

  /**
   * The CSS styles for the Poet Bot component.
   */
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', sans-serif;
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem 1.5rem;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      border: 1px solid #eaeaea;
    }

    h2 {
      font-size: 1.25rem;
      color: #222;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    #botContainer {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    #botQuestion {
      font-size: 0.875rem;
      color: #555;
      margin-top: 2rem;
      text-align: center;
    }

    #botResponse {
      margin-top: 1rem;
      padding: 1rem;
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      color: #333;
      white-space: pre-wrap;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        transform 0.2s ease;
      align-self: center;
    }

    button:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    .invisible {
      opacity: 0;
    }
  `;

  constructor() {
    super('Poet bot');
    this.response = '';
  }

  firstUpdated() {
    this.location = router.location;
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
      <h2 id="botName">${this.name}</h2>
      <div id="botContainer">
        <button @click="${this.start}">Generate Poem</button>
        <p id="botQuestion">${this.userQuestion.content || 'Subject will be generated...'}</p>
        <div ?hidden=${this.response.length === 0} id="botResponse">
          ${unsafeHTML(this.response)}
        </div>
      </div>
    `;
  }
}
