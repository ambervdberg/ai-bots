import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './login-button.styles';

@customElement('login-button')
export class LoginButton extends LitElement {
  static styles = styles;

  @property({ type: String }) name = 'Sign in';

  @property({ type: Boolean }) ms = false;

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <button class="button" ?disabled=${this.disabled}>
        <div class="button-state"></div>
        <div class="button-content-wrapper">
          <div class="button-icon">
            <slot></slot>
          </div>
          <span class="button-contents">${this.name}</span>
          <span style="display: none;">${this.name}</span>
        </div>
      </button>
    `;
  }
}
