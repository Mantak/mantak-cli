import Layout from './layout/layout';
import Home from './pages/home';
import About from './pages/about';

const _routes = [
  { path: '/admin',
    component: Layout,
    indexRoute:  {component: Home},
    childRoutes: [
      { path: 'about', component: About },
    ],
  },
];

export default _routes;
