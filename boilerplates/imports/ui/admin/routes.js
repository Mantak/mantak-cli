import Layout from './layout/layout';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings';

const _routes = [
  { path: '/admin',
    component: Layout,
    indexRoute:  { component: Dashboard },
    childRoutes: [
      { path: 'settings', component: Settings },
    ],
  },
];

export default _routes;
