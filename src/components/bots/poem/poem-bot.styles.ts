import { css } from 'lit';

export const styles = css`
  /* Generated subject */
  #botQuestion {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.03em;
    color: var(--color-gold-light);
    margin-top: 1.75rem;
    text-align: center;
  }

  /* Outlined button with gold fill-from-left on hover */
  button {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold);
    background: transparent;
    border: 1px solid var(--color-border-accent);
    padding: 0.8rem 2.25rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
    margin-top: 0.25rem;
  }

  /* Gold fill slides in from left */
  button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-gold);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  button:hover {
    color: var(--color-bg);
    border-color: var(--color-gold);
  }

  button:hover::before {
    transform: translateX(0);
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  button:disabled::before {
    display: none;
  }

  .style-note {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 1.25rem;
    font-style: normal;
    opacity: 0.75;
  }
`;
