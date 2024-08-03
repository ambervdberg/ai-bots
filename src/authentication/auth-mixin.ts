/* playground-fold */
import { LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';

import { AuthService } from './auth.service';

type Constructor<T> = new (...args: any[]) => T;

export declare class AuthInterface {
  isAuthenticated: boolean;
}

export const Auth = <T extends Constructor<LitElement>>(superClass: T) => {
  class AuthElement extends superClass {
    @property({ type: Boolean }) isAuthenticated = false;

    constructor(...args: any[]) {
      super(...args);
    }

    connectedCallback(): void {
      super.connectedCallback();

      setTimeout(() => {
        this.checkAuth();
      }, 0); // workaround

      window.addEventListener('storage', this.checkAuth);
    }

    checkAuth = () => {
      AuthService.isAuthenticated().then(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        this.requestUpdate();
      });
    };
  }

  return AuthElement as Constructor<AuthInterface> & T;
};
