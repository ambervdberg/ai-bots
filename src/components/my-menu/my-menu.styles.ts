import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: 'Roboto', sans-serif;
    padding: 16px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2980b9;
  }

  poet-bot {
    margin-top: 20px;
  }
`;
