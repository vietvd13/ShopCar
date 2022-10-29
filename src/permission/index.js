import router from '../routers';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { setPageName } from '../utils/setPageName';

router.beforeEach((to, from, next) => {
  NProgress.start();

  setPageName();

  next();

  NProgress.done();
})