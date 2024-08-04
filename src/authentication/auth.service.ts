const apiUrl = (import.meta as any).env.VITE_API_URL;

const CODE = 'code';
const AUTH_TOKEN = 'auth_token';
const ACCESS_TOKEN = 'access_token';

/**
 * Service to handle authentication.
 */
export class AuthService {
  /**
   * Check if the user is authenticated.
   * @returns {Promise<boolean>} True if the user is authenticated, false otherwise.
   */
  static async isAuthenticated(): Promise<boolean> {
    const authenticated = localStorage.getItem(AUTH_TOKEN);

    if (!authenticated) {
      localStorage.removeItem(CODE);
      return false;
    }

    const authorized = localStorage.getItem(CODE);
    if (authorized) return true;

    // The user is authenticated but not checked for authorization yet.
    try {
      const result = await fetch(`${apiUrl}/auth-google?access_token=${authenticated}`);

      if (result.status !== 200) return false; // The user is not authorized.

      const code = await result.text();
      localStorage.setItem(CODE, code);
      return true; // The user is authorized.
    } catch (error) {
      console.error('Authentication error:', error);
      return false;
    }
  }

  /**
   * Handle the authentication response.
   * If the response contains an access token, store it in local storage.
   */
  static handleAuthResponse(): void {
    const params = new URLSearchParams(window.location.hash.substring(1));

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
    const search = window.location.search;

    if (search) {
      window.location.href = location.origin + location.pathname + '#' + search.replace('?', '');
    }
  }

  /**
   * Log out the user.
   */
  static logout(): void {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CODE);

    // Make sure it triggers the event listener in the Auth mixin.
    window.dispatchEvent(new Event('storage'));
  }

  /**
   * Get the code to communicate with the API.
   * @returns {string | null} The code if it exists, null otherwise.
   */
  static getCode(): string | null {
    return localStorage.getItem(CODE);
  }
}
