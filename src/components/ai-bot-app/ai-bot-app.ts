import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../bots/notion/notion-bot';
import '../bots/poem/poem-bot';
import '../home-component/home.component';
import { styles } from './ai-bot-app.styles';

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
      <header>
        <h1>AI Bots</h1>
        <nav>
          <ul>
            <li><a href="./" class=${location.hash === ROUTES.HOME ? 'active' : ''}>About</a></li>
            <li>
              <a href="${ROUTES.POEM}" class=${location.hash === ROUTES.POEM ? 'active' : ''}
                >Poem Bot</a
              >
            </li>
            <li>
              <a href="${ROUTES.NOTION}" class=${location.hash === ROUTES.NOTION ? 'active' : ''}
                >Notion Bot</a
              >
            </li>
          </ul>
        </nav>
      </header>
      <main>
        ${location.hash === ROUTES.HOME ? html`<home-component></home-component>` : ''}
        ${location.hash === ROUTES.POEM ? html`<poem-bot></poem-bot>` : ''}
        ${location.hash === ROUTES.NOTION ? html`<notion-bot></notion-bot>` : ''}
      </main>
    `;
  }
}
