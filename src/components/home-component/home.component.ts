import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './home.component.styles';

@customElement('home-component')
export class HomeComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <h1>About</h1>
      <p>
        This project contains AI Bots. I have created this project to be able to experiment with AI
        integration.
      </p>

      <section>
        <h2>Bots</h2>
        <p>
          The following bots are implemented. You can navigate between the bots using the menu
          above.
        </p>
      </section>

      <section>
        <h3>Poem Bot</h3>
        <p>The Poem Bot generates software-related poems using the OpenAI API.</p>
        <div>
          <strong>API Endpoints:</strong>
          <ul>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/subject.ts"
                target="_blank"
              >
                Create a poem subject
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/poem.ts"
                target="_blank"
              >
                Create a poem
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Notion.so Bot</h3>
        <p>
          The Notion Bot answers questions using content from your Notion workspaces. It combines
          the OpenAI API and the Notion API to fetch and generate answers.
        </p>
        <p>
          <strong>Note:</strong> This functionality is not available in the live demo, since I don't
          want to expose my Notion.so data to you 😉. You can implement your own integration by
          following the instructions
          <a href="https://github.com/ambervdberg/azure-function-bots/tree/main" target="_blank"
            >here</a
          >.
        </p>
        <div>
          <strong>API Endpoints:</strong>
          <ul>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/notion.ts"
                target="_blank"
              >
                Answer questions with Notion content
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/auth-google.ts"
                target="_blank"
              >
                Check user authorization
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>The Code</h2>
        <ul>
          <li>
            Client:
            <a href="https://github.com/ambervdberg/ai-bots" target="_blank"
              >https://github.com/ambervdberg/ai-bots</a
            >
          </li>
          <li>
            Backend:
            <a href="https://github.com/ambervdberg/azure-function-bots" target="_blank"
              >https://github.com/ambervdberg/azure-function-bots</a
            >
          </li>
        </ul>
      </section>
    `;
  }
}
