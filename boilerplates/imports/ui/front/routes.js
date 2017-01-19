import Login from '../commons/pages/login';
import NotFound from '../commons/pages/not_found';
import VerifyEmail from '../commons/pages/verify_email';
import ResetPassword from '../commons/pages/reset_password';

import Layout from './layout/layout';
import Landing from './pages/landing';
import Home from './pages/home';
import Profile from './pages/profile';

const _routes = [
  { path: 'landing', component: Landing, },
  { path: 'login', component: Login, },
  { path: '/verify-email/:token', component: VerifyEmail, },
  { path: '/reset-password/:token', component: ResetPassword, },
  { path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'profile', component: Profile },
      { path: '/reset/:token', component: ResetPassword, },
      { path: '*', component: NotFound }
    ],
  },
];

export default _routes;
