// login-component.ts
import { RouterLocation } from '@vaadin/router';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { router } from '../router';

@customElement('home-component')
export class HomeComponent extends LitElement {
  @property({ type: Object }) location: RouterLocation;

  constructor() {
    super();
    this.location = router.location;
  }

  render() {
    return html`<slot></slot>`;
  }
}
