import Login from '../commons/login';
import NotFound from '../commons/not_found.js';

import Layout from './layout/layout';
import Landing from './pages/landing';
import Home from './pages/home';
import Profile from './pages/profile';

const _routes = [
  { path: 'landing',
    component: Landing,
  },
  { path: 'login',
    component: Login,
  },
  { path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'profile', component: Profile },
      { path: '*', component: NotFound }
    ],
  },
];

export default _routes;
