import { RouterLocation } from '@vaadin/router';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { router } from '../../router';

import '../bots/notion/notion-bot';
import '../bots/poet/poet-bot';
import { styles } from './my-menu.styles';

@customElement('my-menu')
export class MyMenu extends LitElement {
  static styles = styles;

  @property({ type: Object }) location: RouterLocation;

  constructor() {
    super();
    this.location = router.location;
  }

  render() {
    return html`
      <div>
        <h1>OpenAI API Bots</h1>
        <div>
          <a href="./">Home</a>
          <a href="./poem">Poem Bot</a>
          <a href="./notion">Notion Bot</a>
        </div>
      </div>
    `;
  }
}
