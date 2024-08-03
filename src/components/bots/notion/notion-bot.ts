import { html } from 'lit';
import { when } from 'lit-html/directives/when.js';
import { customElement, property, state } from 'lit/decorators.js';

import { AuthService } from '../../../authentication/auth.service';
import '../../bot-container/bot-container';
import '../../signin-google';
import '../../signout-button';
import { Bot } from '../bot';
import { styles } from './notion-bot.styles';

@customElement('notion-bot')
export class NotionBot extends Bot {
  static styles = styles;

  @property({ type: String })
  name = 'Notion bot';

  @state()
  question: string = '';

  @state()
  workspaceName: string = '';

  constructor() {
    super();
    this.response = '';
  }

  async start(): Promise<void> {
    this.userQuestion.content = this.question;

    if (!this.question) {
      this.displayResponseString('Please enter a question.');
      return;
    }

    this.setTypingMessage('Asking Notion bot');

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

  private renderWorkspace() {
    return html` <div id="workspace-input-container" ?hidden=${!this.isAuthenticated}>
      <label for="workspaceName">Workspace Name (Optional):</label>
      <input
        type="text"
        id="workspaceName"
        .value=${this.workspaceName}
        placeholder="MyWorkSpace"
        @input=${(e: Event) => (this.workspaceName = (e.target as HTMLInputElement).value)}
      />
    </div>`;
  }

  private renderQuestion() {
    return html` <div id="question-input-container">
      <label for="question-input">Your question:</label>
      <input
        type="text"
        id="question-input"
        .value=${this.question}
        placeholder="What's on my todo list?"
        @input=${(e: Event) => (this.question = (e.target as HTMLInputElement).value)}
      />
    </div>`;
  }

  private renderQuestionButton() {
    return html`<button ?disabled=${!this.question} @click="${this.start}">Ask Notion Bot</button>`;
  }

  render() {
    return html`
      <bot-container .name=${this.name} .response=${this.response}>
        <div class="signin">
          <signin-google ?hidden=${this.isAuthenticated}></signin-google>
          <signout-button ?hidden=${!this.isAuthenticated}></signout-button>
        </div>

        ${when(
          this.isAuthenticated,
          () => html`
            ${this.renderWorkspace()} ${this.renderQuestion()} ${this.renderQuestionButton()}
          `
        )}
      </bot-container>
    `;
  }
}
