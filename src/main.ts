import { AuthService } from './authentication/auth.service';
import './components/ai-bot-app/ai-bot-app';

document.addEventListener('DOMContentLoaded', () => {
  AuthService.handleAuthResponse();
});
