/* playground-fold */
import { LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';

import { AuthService } from './auth.service';

type Constructor<T> = new (...args: any[]) => T;

export declare class AuthInterface {
  isAuthenticated: boolean;
  isForbidden: boolean;
}

export const Auth = <T extends Constructor<LitElement>>(superClass: T) => {
  class AuthElement extends superClass {
    @property({ type: Boolean }) isAuthenticated = false;
    @property({ type: Boolean }) isForbidden = false;

    constructor(...args: any[]) {
      super(...args);
    }

    connectedCallback(): void {
      super.connectedCallback();

      super.updateComplete.then(() => {
        this.checkAuth();
        return true;
      });

      globalThis.addEventListener('storage', this.checkAuth);
    }

    disconnectedCallback(): void {
      // Remove the storage listener so it doesn't accumulate across route changes.
      super.disconnectedCallback();
      globalThis.removeEventListener('storage', this.checkAuth);
    }

    checkAuth = () => {
      AuthService.isAuthenticated().then(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        this.isForbidden = AuthService.isForbidden();
        this.requestUpdate();
      });
    };
  }

  return AuthElement as Constructor<AuthInterface> & T;
};
