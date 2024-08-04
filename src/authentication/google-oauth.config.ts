export const googleOAuthConfig = {
  clientId: (import.meta as any).env.VITE_GOOGLE_OAUTH_CLIENT_ID,
  scopes: 'openid email'
};
