import { RouterLocation } from '@vaadin/router';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { router } from './router';

import './bots/notion-bot';
import './bots/poet-bot';

@customElement('my-app')
export class MyApp extends LitElement {
  @property({ type: Object }) location: RouterLocation;

  constructor() {
    super();
    this.location = router.location;
  }

  static styles = css`
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

  render() {
    return html`
      <div>
        <h1>OpenAI API Bots</h1>
        <div>
          <a href="/">Home</a>
          <a href="/poem">Poem Bot</a>
          <a href="/notion">Notion Bot</a>
        </div>
      </div>
    `;
  }
}
