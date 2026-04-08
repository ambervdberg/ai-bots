import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit-html/directives/when.js';
import { styles } from './bot-container.styles';
import './response/response';

@customElement('bot-container')
export class BotContainer extends LitElement {
  static styles = styles;

  @property({ type: String })
  name: string = '';

  @property({ type: String })
  response: string = '';

  @property({ type: Boolean })
  isTyping = false;

  @property({ type: String })
  typingMessage = '';

  @property({ type: Number })
  typingDotCount = 1;

  render() {
    const dots = '.'.repeat(this.typingDotCount);

    return html`
      <h1 id="botName">${this.name}</h1>
      <div id="botContainer">
        <slot></slot>
        ${when(
          this.isTyping,
          () => html`<div id="botResponse"><i>${this.typingMessage}${dots}</i></div>`,
          () => html`<response-container .response=${this.response}></response-container>`
        )}
      </div>
    `;
  }
}
