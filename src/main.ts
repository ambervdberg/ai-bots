import { AuthService } from './authentication/auth.service';
import './components/my-menu/my-menu';

document.addEventListener('DOMContentLoaded', () => {
  AuthService.handleAuthResponse();
});

console.log(location.pathname);
