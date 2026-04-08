import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    max-width: 780px;
    margin: auto;
    text-align: center;
  }

  /* Bot name as large italic display heading */
  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5vw, 3.5rem);
    font-weight: 300;
    font-style: italic;
    color: var(--color-gold-light);
    letter-spacing: 0.03em;
    margin-bottom: 2rem;
    line-height: 1.15;
  }

  .botContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;
