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
  }

  /**
   * Log out the user.
   * @param url - The URL to redirect the user to after logging out.
   */
  static logout(url?: string): void {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CODE);

    if (url) window.location.href = url;
  }

  /**
   * Get the code to communicate with the API.
   * @returns {string | null} The code if it exists, null otherwise.
   */
  static getCode(): string | null {
    return localStorage.getItem(CODE);
  }
}
