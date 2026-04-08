import { css } from 'lit';

export const styles = css`
  :host {
    max-width: 820px;
    display: block;
    margin: auto;
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 300;
    font-style: italic;
    color: var(--color-gold-light);
    text-align: center;
    margin-bottom: 2.5rem;
    letter-spacing: 0.03em;
  }

  /* Section headings in small monospace caps */
  h2 {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin: 2.5rem 0 0.9rem;
  }

  h3 {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin: 1.75rem 0 0.65rem;
  }

  section {
    padding-bottom: 2rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  section:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }

  p {
    font-family: var(--font-display);
    font-size: 1.05rem;
    color: var(--color-text-muted);
    line-height: 1.85;
    margin-bottom: 0.85rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
  }

  li {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted);
    margin-bottom: 0.5rem;
    padding-left: 1.1rem;
    position: relative;
    line-height: 1.6;
  }

  /* Arrow bullet */
  li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--color-gold-dim);
  }

  a {
    color: var(--color-gold);
    text-decoration: none;
    border-bottom: 1px solid var(--color-border-accent);
    transition:
      border-color 0.2s ease,
      color 0.2s ease;
    padding-bottom: 1px;
  }

  a:hover {
    color: var(--color-gold-light);
    border-bottom-color: var(--color-gold);
  }

  strong {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    font-weight: 400;
  }
`;
