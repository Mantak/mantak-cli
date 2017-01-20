import Layout from './layout/layout';
import Home from './pages/home';
import Profile from './pages/profile';
import Editor from './pages/editor';

const _routes = [
  { path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'profile', component: Profile },
      { path: 'editor', component: Editor },
    ],
  },
];

export default _routes;
