import { css } from 'lit';

export const styles = css`
  /* Auth button row */
  .signin {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  /* Input labels */
  label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: 0.35rem;
  }

  /* Minimalist underline inputs — no box border */
  input[type='text'] {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.05em;
    padding: 0.6rem 0;
    border: none;
    border-bottom: 1px solid var(--color-border-accent);
    width: 100%;
    background: transparent;
    color: var(--color-text);
    margin-bottom: 1.5rem;
    transition: border-color 0.25s ease;
    outline: none;
  }

  input[type='text']:focus {
    border-bottom-color: var(--color-gold);
  }

  input[type='text']::placeholder {
    color: var(--color-text-muted);
    font-style: italic;
  }

  /* Same outlined button style as poem-bot */
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
    margin-top: 0.5rem;
    align-self: center;
  }

  button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-gold);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  button:hover:not(:disabled) {
    color: var(--color-bg);
    border-color: var(--color-gold);
  }

  button:hover:not(:disabled)::before {
    transform: translateX(0);
  }

  button:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;
