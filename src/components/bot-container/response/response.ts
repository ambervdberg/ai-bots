import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { when } from 'lit-html/directives/when.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './response.styles';

/**
 * Container for the bot response.
 */
@customElement('response-container')
export class ResponseContainer extends LitElement {
  static styles = styles;

  @property({ type: String })
  response = '';

  render() {
    return html`
      ${when(
        this.response.length > 0,
        () => html`<div id="botResponse">${unsafeHTML(this.response)}</div>`
      )}
    `;
  }
}
