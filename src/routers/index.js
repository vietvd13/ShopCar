import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const constantRoutes = [

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
