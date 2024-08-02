import { css, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import { AuthService } from '../auth-service';
import '../signin-google';
import '../signout-button';
import { Bot } from './bot';

@customElement('notion-bot')
export class NotionBot extends Bot {
  /**
   * The CSS styles for the Notion Bot component.
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

    label {
      font-size: 0.875rem;
      color: #555;
      margin-bottom: 0.25rem;
    }

    input[type='text'] {
      font-size: 0.875rem;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 100%;
      box-sizing: border-box;
      background: #f9f9f9;
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

    #botResponse {
      margin-top: 1rem;
      padding: 1rem;
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      color: #333;
      white-space: pre-wrap;
      text-align: center;
    }

    .invisible {
      opacity: 0;
    }

    .signin {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5rem;
    }
  `;

  @property({ type: String })
  name = 'Notion bot';

  @state()
  question: string = '';

  @state()
  workspaceName: string = '';

  constructor() {
    super('Notion bot');
    this.response = '';
  }

  async start(): Promise<void> {
    this.userQuestion.content = this.question;

    if (!this.question) {
      this.displayResponseString('Please enter a question.');
      return;
    }

    this.setTypingMessage('Asking Notion bot...');

    await fetch(`${this.apiUrl}/notion?code=${AuthService.getCode()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: this.question,
        workspace: this.workspaceName
      })
    })
      .then(async result => {
        if (result.status !== 200) {
          this.stopTypingMessage();
          this.displayResponseString('An error occurred. Please try again.');
          return;
        }
        await this.processStream(result);
      })
      .catch(err => {
        console.error('Error fetching response:', err);
        this.stopTypingMessage();
        this.displayResponseString('An error occurred. Please try again later.');
      });
  }

  render() {
    return html`
      <div id="botContainer">
        <h2 id="botName">${this.name}</h2>
        <div class="signin">
          <signin-google ?hidden=${this.isAuthenticated}></signin-google>
          <signout-button ?hidden=${!this.isAuthenticated}></signout-button>
        </div>

        <div id="workspace-input-container" ?hidden=${!this.isAuthenticated}>
          <label for="workspaceName">Workspace Name (Optional):</label>
          <input
            type="text"
            id="workspaceName"
            .value=${this.workspaceName}
            placeholder="MyWorkSpace"
            @input=${(e: Event) => (this.workspaceName = (e.target as HTMLInputElement).value)}
          />
        </div>

        <!-- TODO: Create component for output -->
        <div id="question-input-container" ?hidden=${!this.isAuthenticated}>
          <label for="question-input">Your question:</label>
          <input
            type="text"
            id="question-input"
            .value=${this.question}
            placeholder="What's on my todo list?"
            @input=${(e: Event) => (this.question = (e.target as HTMLInputElement).value)}
          />
        </div>
        <button ?hidden="${!this.isAuthenticated}" @click="${this.start}">Ask Notion Bot</button>
        <div ?hidden="${!this.isAuthenticated || this.response.length === 0}" id="botResponse">
          ${unsafeHTML(this.response)}
        </div>
      </div>
    `;
  }
}
