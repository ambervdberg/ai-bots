import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    margin: auto;
    max-width: 1100px;
    animation: appFadeIn 0.9s ease both;
  }

  @keyframes appFadeIn {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1,
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  /* ── Header / Masthead ─────────────────────────────── */

  header {
    padding: 3rem 1.5rem 2rem;
    text-align: center;
  }

  header h1 {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 5vw, 3.75rem);
    font-weight: 300;
    font-style: italic;
    letter-spacing: 0.04em;
    color: var(--color-gold-light);
    line-height: 1.2;
  }

  /* Decorative ruled lines flanking the title */
  header h1::before,
  header h1::after {
    content: '';
    display: block;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--color-border-accent) 15%,
      var(--color-gold-dim) 50%,
      var(--color-border-accent) 85%,
      transparent 100%
    );
    opacity: 0.75;
  }

  header h1::before {
    margin-bottom: 0.7rem;
  }

  header h1::after {
    margin-top: 0.7rem;
  }

  /* ── Navigation ────────────────────────────────────── */

  header nav {
    margin-top: 1.1rem;
  }

  header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header nav ul li {
    display: flex;
    align-items: center;
  }

  /* Dot separator between nav items */
  header nav ul li + li::before {
    content: '·';
    font-family: var(--font-mono);
    color: var(--color-border-accent);
    margin: 0 1.4rem;
    font-size: 0.7rem;
    line-height: 1;
  }

  header nav ul li a {
    font-family: var(--font-mono);
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.65rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    transition: color 0.25s ease;
    position: relative;
    padding-bottom: 2px;
  }

  /* Underline grow-on-hover */
  header nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-gold);
    transition: width 0.25s ease;
  }

  header nav ul li a:hover,
  header nav ul li a.active {
    color: var(--color-gold);
  }

  header nav ul li a:hover::after,
  header nav ul li a.active::after {
    width: 100%;
  }

  /* ── Main content surface ──────────────────────────── */

  main {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    padding: 2.5rem 3rem 3rem;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 2rem;
    position: relative;
  }

  /* Subtle gold top accent line */
  main::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--color-gold-dim), transparent);
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    main {
      margin-top: 0;
      padding: 1.5rem 1.25rem 2rem;
    }

    header {
      padding: 2rem 1rem 1.5rem;
    }
  }
`;
