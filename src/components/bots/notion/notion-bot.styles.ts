import { css } from 'lit';

export const styles = css`
  input[type='text'] {
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background: #f9f9f9;
    margin: 1rem 0;
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
    margin-top: 1rem;
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
