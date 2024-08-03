import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: 'Arial', sans-serif;
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem 1.5rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #eaeaea;
  }

  h2 {
    font-size: 1.25rem;
    color: #222;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  #botContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    font-size: 0.875rem;
    color: #555;
    margin-bottom: 0.25rem;
  }

  input[type='text'] {
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background: #f9f9f9;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
    align-self: center;
  }

  button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  .signin {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;
