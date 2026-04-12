import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './login-button.styles';

/**Renders the reusable sign-in button with optional custom label and disabled state */
@customElement('login-button')
export class LoginButton extends LitElement {
  /** Component styles. */
  static styles = styles;

  /** Button label shown to the user. */
  @property({ type: String }) name = 'Sign in';

  /** Indicates whether the Microsoft sign-in variant is enabled. */
  @property({ type: Boolean }) ms = false;

  /** Disables the button interaction. */
  @property({ type: Boolean }) disabled = false;

  /**Renders the login button template */
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
