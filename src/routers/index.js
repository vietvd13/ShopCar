import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from './modules/Login';
import ShopCar from './modules/ShopCar';
import Dashboard from './modules/Dashboard';

export const constantRoutes = [
  {
    path: '/',
    redirect: {
      name: 'HomeShopCar'
    }
  },
  Login,
  ShopCar
];

export const asyncRoutes = [
  Dashboard
];

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher;
}

export default router;
