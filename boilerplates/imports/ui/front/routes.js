import Layout from './layout/layout';
import Home from './pages/home';
import Profile from './pages/profile';

const _routes = [
  { path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'profile', component: Profile },
    ],
  },
];

export default _routes;
