const apiUrl = (import.meta as any).env.VITE_API_URL;

const CODE = 'code';
const AUTH_TOKEN = 'auth_token';
const ACCESS_TOKEN = 'access_token';

/**
 * Service to handle authentication.
 */
export class AuthService {
  private static forbidden = false;

  /**
   * Whether the last authorization attempt was rejected with a 403 Forbidden response.
   */
  static isForbidden(): boolean {
    return this.forbidden;
  }

  /**
   * Check if the user is authenticated.
   * @returns {Promise<boolean>} True if the user is authenticated, false otherwise.
   */
  static async isAuthenticated(): Promise<boolean> {
    const authenticated = localStorage.getItem(AUTH_TOKEN);

    if (!authenticated) {
      localStorage.removeItem(CODE);
      this.forbidden = false;
      return false;
    }

    const authorized = localStorage.getItem(CODE);
    if (authorized) {
      this.forbidden = false;
      return true;
    }

    // The user is authenticated but not checked for authorization yet.
    try {
      const result = await fetch(`${apiUrl}/auth-google`, {
        headers: { Authorization: `Bearer ${authenticated}` }
      });

      if (result.status === 403) {
        this.forbidden = true;
        localStorage.removeItem(AUTH_TOKEN);
        return false; // The user is not authorized to use this feature.
      }

      if (result.status !== 200) {
        this.forbidden = false;
        return false;
      }

      const code = await result.text();
      localStorage.setItem(CODE, code);
      this.forbidden = false;
      return true; // The user is authorized.
    } catch (error) {
      console.error('Authentication error:', error);
      this.forbidden = false;
      return false;
    }
  }

  /**
   * Handle the authentication response.
   * If the response contains an access token, store it in local storage.
   */
  static handleAuthResponse(): void {
    const params = new URLSearchParams(globalThis.location.hash.substring(1));

    const accessToken = params.get(ACCESS_TOKEN);

    if (!accessToken) return;

    localStorage.setItem(AUTH_TOKEN, accessToken);

    AuthService.isAuthenticated();

    AuthService.handleGoogleRedirect();
  }

  /**
   * Handle the Google redirect.
   * We cannot use the hash in the URL, so we replace the hash with the search param in the redirectURI to google.
   * Here we revert that change and redirect to the original URL.
   */
  private static handleGoogleRedirect(): void {
    const search = globalThis.location.search;

    if (search) {
      globalThis.location.href =
        location.origin + location.pathname + '#' + search.replace('?', '');
    }
  }

  /**
   * Log out the user.
   */
  static logout(): void {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CODE);
    this.forbidden = false;

    // Make sure it triggers the event listener in the Auth mixin.
    globalThis.dispatchEvent(new Event('storage'));
  }

  /**
   * Get the code to communicate with the API.
   * @returns {string | null} The code if it exists, null otherwise.
   */
  static getCode(): string | null {
    return localStorage.getItem(CODE);
  }
}
