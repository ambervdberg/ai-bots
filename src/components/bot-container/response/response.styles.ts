import { css } from 'lit';

export const styles = css`
  /* Response renders as italic Cormorant — like a poem in a journal */
  #botResponse {
    margin-top: 2.5rem;
    padding: 1.25rem 2rem 1.25rem 2.5rem;
    border-left: 2px solid var(--color-gold-dim);
    color: var(--color-text);
    white-space: pre-wrap;
    font-family: var(--font-display);
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1.9;
    text-align: left;
    animation: responseReveal 0.5s ease both;
  }

  @keyframes responseReveal {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Used during typing animation — keep layout stable */
  .invisible {
    opacity: 0;
  }
`;
