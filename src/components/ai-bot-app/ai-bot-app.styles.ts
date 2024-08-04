import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    margin: auto;
    max-width: 1400px;
  }

  header {
    background: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }

  h1,
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  header h1 {
    margin-bottom: 10px;
  }

  header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  header nav ul li {
    margin: 0 15px;
  }

  header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  main {
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem 2rem 2rem;
    text-align: left;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    main {
      margin-top: 0;
    }
  }

  footer {
    text-align: center;
    padding: 20px 0;
    background: #333;
    color: #fff;
  }
`;
