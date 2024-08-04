import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../bots/notion/notion-bot';
import '../bots/poem/poem-bot';
import { styles } from './my-menu.styles';

const ROUTES = {
  HOME: '',
  POEM: '#poem',
  NOTION: '#notion'
};

@customElement('ai-bot-app')
export class AIBotApp extends LitElement {
  static styles = styles;

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('hashchange', this.handleHashChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange = (): void => {
    this.requestUpdate();
  };

  render() {
    return html`
      <div>
        <h1>OpenAI API Bots</h1>
        <div>
          <a href="./">Home</a>
          <a href="${ROUTES.POEM}">Poem Bot</a>
          <a href="${ROUTES.NOTION}">Notion Bot</a>

          ${location.hash === ROUTES.POEM ? html`<poem-bot></poem-bot>` : ''}
          ${location.hash === ROUTES.NOTION ? html`<notion-bot></notion-bot>` : ''}
        </div>
      </div>
    `;
  }
}
