import Loadable from 'react-loadable';

import Loading from '../../components/common/loadingcomponent';
const Home = Loadable({ loader: () => import('./home/homepage'), loading: Loading });
const Err = Loadable({loader : () => import('./error/errorpage'), loading: Loading});

export const routes = [{
    path: '/',
    exact: true,
    component: Home
  }, {
    component: Err
  }
];
