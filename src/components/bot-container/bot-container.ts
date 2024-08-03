import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './bot-container.styles';
import './response/response';

@customElement('bot-container')
export class BotContainer extends LitElement {
  static styles = styles;

  @property({ type: String })
  name: string = '';

  @property({ type: String })
  response: string = '';

  render() {
    return html`
      <h2 id="botName">${this.name}</h2>
      <div id="botContainer">
        <slot></slot>
        <response-container .response=${this.response}></response-container>
      </div>
    `;
  }
}
