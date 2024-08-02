import { AuthService } from './auth-service';
import './my-app';

document.addEventListener('DOMContentLoaded', () => {
  AuthService.handleAuthResponse();
});
