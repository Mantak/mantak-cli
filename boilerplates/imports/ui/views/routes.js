import Layout from './layout/layout';
import Landing from './pages/landing';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not_found.js';

const _routes = [
  { path: 'landing',
    component: Landing,
  },
  { path: 'login',
    component: Login,
  },
  { path: '/',
    component: Layout,
    indexRoute: {component: Home},
    childRoutes: [
      {path: 'about', component: About},
      {path: '*', component: NotFound}
    ],
  },
];

export default _routes;
