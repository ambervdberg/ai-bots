import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit-html/directives/when.js';
import { styles } from './bot-container.styles';
import './response/response';
import '../loaders/typing-loader/typing-loader';

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

  @property({ type: String })
  typingVariant: 'thinking' | 'writing' = 'writing';

  render() {
    return html`
      <h1 id="botName">${this.name}</h1>
      <div id="botContainer">
        <slot></slot>
        ${when(
          this.isTyping,
          () =>
            html`<div id="botResponse">
              <typing-loader
                .message=${this.typingMessage}
                .variant=${this.typingVariant}
              ></typing-loader>
            </div>`,
          () => html`<response-container .response=${this.response}></response-container>`
        )}
      </div>
    `;
  }
}
