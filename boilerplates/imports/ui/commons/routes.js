import Login from './pages/login';
import VerifyEmail from './pages/verify_email';
import ResetPassword from './pages/reset_password';
import NotFound from './pages/not_found';

import Landing from './pages/landing';

const _routes = [
  { path: 'landing', component: Landing, },
  { path: 'login', component: Login, },
  { path: '/verify-email/:token', component: VerifyEmail, },
  { path: '/reset-password/:token', component: ResetPassword, },
  { path: '*', component: NotFound },
];

export default _routes;
