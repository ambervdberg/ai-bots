import { css } from 'lit';

export const styles = css`
  :host {
    padding: 16px;
    text-align: center;
  }

  /* Google Sign-In button — dark theme variant */
  .button {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    background-color: var(--color-surface-2, #22201a);
    background-image: none;
    border: 1px solid var(--color-border-accent, #4a3f28);
    border-radius: 4px;
    box-sizing: border-box;
    color: var(--color-text, #e8d5a3);
    cursor: pointer;
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: 13px;
    font-weight: 400;
    height: 40px;
    letter-spacing: 0.05em;
    outline: none;
    overflow: hidden;
    padding: 0 16px;
    position: relative;
    text-align: center;
    transition:
      background-color 0.218s ease,
      border-color 0.218s ease;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    max-width: 400px;
    min-width: min-content;
  }

  .button .button-icon {
    height: 18px;
    margin-right: 10px;
    min-width: 18px;
    width: 18px;
  }

  .button .button-content-wrapper {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .button .button-contents {
    flex-grow: 1;
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  .button .button-state {
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
    opacity: 0.4;
  }

  .button:not(:disabled):hover {
    background-color: var(--color-surface, #1a1815);
    border-color: var(--color-gold-dim, #8a6e45);
  }

  .button:not(:disabled):active .button-state,
  .button:not(:disabled):focus .button-state {
    background-color: var(--color-gold, #c8a96e);
    opacity: 8%;
  }
`;
