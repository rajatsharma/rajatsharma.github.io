import App from './app';
import CV from './cv';

export default [
  {
    path: '/',
    exact: true,
    component: App,
    static: true,
  },
  {
    path: '/contact',
    exact: true,
    component: CV,
  },
];
