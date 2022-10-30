import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ShopCar from './modules/ShopCar';

export const constantRoutes = [
  {
    path: '/',
    redirect: {
      name: 'HomeShopCar'
    }
  },
  ShopCar
];

export const asyncRoutes = [

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
