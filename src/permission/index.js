import store from '@/store';
import router, { resetRouter } from '../routers';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { setPageName } from '../utils/setPageName';
import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';

function isExitToken() {
  const TOKEN = Cookies.get(CONSTANTS.COOKIES.TOKEN);

  if (TOKEN) {
    return true;
  }

  return false;
}

const whiteList = ['/login', '/shop-car', '/shop-car/home', '/shop-car/list', '/shop-car/detail'];

router.beforeEach((to, from, next) => {
  NProgress.start();

  setPageName();

  if (isExitToken()) {
    console.log(to);

    if (to.name === 'Login') {
      next({ name: 'Dashboard' });
    } else {
      next();
    }
  } else {
    resetRouter();

    if (whiteList.indexOf(to.matched[0] ? to.matched[0].path : '') !== -1) {
      next();
    } else{
      store.dispatch('auth/setToken', '')
      .then(() => {
        store.dispatch('auth/setRefreshToken', '')
          .then(() => {
            next({ name: 'HomeShopCar' });
          })
      })
    }
  }

  NProgress.done();
})