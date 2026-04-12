import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  /* ── Shared message text ── */
  .message {
    font-family: var(--font-display);
    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.08em;
    color: var(--color-gold-dim);
    margin: 0;
    text-align: center;
  }

  .thinking-sparks {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .spark {
    font-size: 1.1rem;
    color: var(--color-gold);
    animation: sparkle-pulse 1.8s ease-in-out infinite;
    display: inline-block;
    line-height: 1;
    filter: drop-shadow(0 0 4px var(--color-gold));
  }

  .spark:nth-child(1) {
    animation-delay: 0s;
    font-size: 0.9rem;
  }
  .spark:nth-child(2) {
    animation-delay: 0.4s;
    font-size: 1.3rem;
  }
  .spark:nth-child(3) {
    animation-delay: 0.8s;
    font-size: 0.85rem;
  }

  @keyframes sparkle-pulse {
    0%,
    100% {
      opacity: 0.15;
      transform: scale(0.7) rotate(0deg);
      filter: drop-shadow(0 0 2px var(--color-gold-dim));
    }
    50% {
      opacity: 1;
      transform: scale(1.25) rotate(20deg);
      filter: drop-shadow(0 0 8px var(--color-gold));
    }
  }

  .writing-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-top: 1.5rem;
  }

  /* The SVG quill rocks as if writing */
  .quill-icon {
    width: 44px;
    height: 44px;
    transform-origin: 80% 80%;
    animation: quill-write 1.4s ease-in-out infinite;
    color: var(--color-gold);
    filter: drop-shadow(0 0 4px var(--color-gold-dim));
  }

  @keyframes quill-write {
    0% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(6deg);
    }
    55% {
      transform: rotate(-4deg);
    }
    75% {
      transform: rotate(4deg);
    }
    100% {
      transform: rotate(-8deg);
    }
  }

  /* Ink line that fills left-to-right in a loop */
  .ink-line {
    width: 56px;
    height: 1px;
    background: linear-gradient(to right, transparent 0%, var(--color-gold) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: ink-flow 1.4s ease-in-out infinite;
    opacity: 0.7;
  }

  @keyframes ink-flow {
    0% {
      background-position: 200% center;
      opacity: 0.3;
    }
    50% {
      background-position: 50% center;
      opacity: 1;
    }
    100% {
      background-position: -100% center;
      opacity: 0.3;
    }
  }
`;
