import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './typing-loader.styles';

/**
 * Animated loading indicator with poetry-themed variants.
 *
 * - `thinking` — pulsing ✦ sparkles, used while inspiration is being gathered
 * - `writing`  — rocking quill with ink-flow line, used while the poet composes
 */
@customElement('typing-loader')
export class TypingLoader extends LitElement {
  static readonly styles = styles;

  /** Status message displayed below the animation. */
  @property({ type: String }) message = '';

  /** Visual variant: `'thinking'` (sparkles) or `'writing'` (quill). */
  @property({ type: String }) variant: 'thinking' | 'writing' = 'writing';

  /**Renders the loader variant and its status message */
  render() {
    return html`
      ${this.variant === 'thinking' ? this.renderThinking() : this.renderWriting()}
      <p class="message">${this.message}</p>
    `;
  }

  /**Renders the sparkle animation used for the thinking state */
  private renderThinking() {
    return html`
      <div class="thinking-sparks" aria-hidden="true">
        <span class="spark">✦</span>
        <span class="spark">✦</span>
        <span class="spark">✦</span>
      </div>
    `;
  }

  /**Renders the quill animation used for the writing state */
  private renderWriting() {
    return html`
      <div class="writing-wrap" aria-hidden="true">
        <!-- Quill feather SVG -->
        <svg
          class="quill-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Feather vane curving from tip to base -->
          <path d="M20 4 C16 2, 8 6, 4 20" />
          <path d="M20 4 C18 8, 12 12, 4 20" />
          <!-- Central quill shaft -->
          <line x1="20" y1="4" x2="4" y2="20" />
          <!-- Nib split at the writing tip -->
          <path d="M4 20 l-1 2 m1 -2 l1.5 1.5" />
        </svg>
        <div class="ink-line"></div>
      </div>
    `;
  }
}
