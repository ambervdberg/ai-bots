import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('login-button')
export class LoginButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    .button {
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      -webkit-appearance: none;
      background-color: WHITE;
      background-image: none;
      border: 1px solid #747775;
      -webkit-border-radius: 20px;
      border-radius: 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #1f1f1f;
      cursor: pointer;
      font-family: 'Roboto', arial, sans-serif;
      font-size: 14px;
      height: 40px;
      letter-spacing: 0.25px;
      outline: none;
      overflow: hidden;
      padding: 0 12px;
      position: relative;
      text-align: center;
      -webkit-transition:
        background-color 0.218s,
        border-color 0.218s,
        box-shadow 0.218s;
      transition:
        background-color 0.218s,
        border-color 0.218s,
        box-shadow 0.218s;
      vertical-align: middle;
      white-space: nowrap;
      width: auto;
      max-width: 400px;
      min-width: min-content;
    }

    .button .button-icon {
      height: 20px;
      margin-right: 12px;
      min-width: 20px;
      width: 20px;
    }

    .button .button-content-wrapper {
      -webkit-align-items: center;
      align-items: center;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
      height: 100%;
      justify-content: space-between;
      position: relative;
      width: 100%;
    }

    .button .button-contents {
      -webkit-flex-grow: 1;
      flex-grow: 1;
      font-family: 'Roboto', arial, sans-serif;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
    }

    .button .button-state {
      -webkit-transition: opacity 0.218s;
      transition: opacity 0.218s;
      bottom: 0;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    .button:disabled {
      cursor: default;
      background-color: #ffffff61;
      border-color: #1f1f1f1f;
    }

    .button:disabled .button-contents {
      opacity: 38%;
    }

    .button:disabled .button-icon {
      opacity: 38%;
    }

    .button:not(:disabled):active .button-state,
    .button:not(:disabled):focus .button-state {
      background-color: #303030;
      opacity: 12%;
    }

    .button:not(:disabled):hover {
      -webkit-box-shadow:
        0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
      box-shadow:
        0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
    }

    .button:not(:disabled):hover .button-state {
      background-color: #303030;
      opacity: 8%;
    }
  `;

  @property({ type: String }) title = 'Sign in';

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
          <span class="button-contents">${this.title}</span>
          <span style="display: none;">${this.title}</span>
        </div>
      </button>
    `;
  }
}
