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

  #botQuestion {
    font-size: 0.875rem;
    color: #555;
    margin-top: 2rem;
    text-align: center;
  }

  #botResponse {
    margin-top: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #333;
    white-space: pre-wrap;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .invisible {
    opacity: 0;
  }
`;
