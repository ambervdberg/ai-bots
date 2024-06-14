import { css, html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import { ChatCompletionSystemMessageParam } from 'openai/resources';
import { Bot } from './bot';

@customElement('poet-bot')
export class PoetBot extends Bot {
  @property({ type: String }) name = 'Poet bot';

  static styles = css`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
      padding: 16px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    #botContainer {
      margin-top: 16px;
    }

    #botName {
      font-size: 1.2em;
      font-weight: bold;
      color: #333;
    }

    #botQuestion {
      font-size: 1em;
      margin-top: 8px;
      color: #555;
    }

    #botResponse {
      font-size: 1em;
      margin-top: 16px;
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
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

    .invisible{
      opacity: 0;
    }
  `;

  constructor() {
    super('Poet bot');
    this.response = '';
  }

  async start(): Promise<void> {
    try {
      this.userQuestion.content = await this.createPrompt();

      this.setTypingMessage('Poet is typing');

      const systemMessage = {
        role: 'system',
        content: `You are a master poet. Your answers should be concise, and less than 50 words.
              Format the output in html without head or body. 
              Make it look nice and easy to read. 
              The subject of the poem will be provided by the user. 
              It must always be related to information technology.
              Make the poem light-hearted and fun.`
      } as ChatCompletionSystemMessageParam;

      const result = await fetch(`${this.apiUrl}chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [systemMessage, this.userQuestion],
          stream: true,
        })
      });

      if (result.status !== 200) {
        this.stopTypingMessage();
        this.displayResponseString('An error occurred. Please try again.');
        return;
      }

      await this.processStream(result);
    } catch (error) {
      console.error(error);
      this.stopTypingMessage();
      this.displayResponseString('An error occurred. Please try again.');
    }
  }

  async createPrompt(): Promise<string> {
    this.setTypingMessage('Generating subject');
    return (await fetch(`${this.apiUrl}poemsubject`)).text();
  }

  render() {
    return html`
      <h2 id="botName">${this.name}</h2>
      <button @click="${() => this.start()}">Generate Poem</button>
      <div id="botContainer">
        <p id="botQuestion">${this.userQuestion.content || 'Subject will be generated..'}</p>
        <div id="botResponse">${unsafeHTML(this.response)}</div>
      </div>
    `;
  }
}
