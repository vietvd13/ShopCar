import LayoutShopCar from '../../layouts/ShopCar';

const ShopCar = {
  path: '/shop-car',
  name: 'ShopCar',
  component: LayoutShopCar,
  children: [
    {
      path: 'home',
      name: 'HomeShopCar',
      component: () => import(/* webpackChunkName: "HomeShopCar" */ '../../views/ShopCar/Home.vue'),
    },
    {
      path: 'list',
      name: 'ListCar',
      component: () => import (/* webpackChunkName: "ListCar" */ '../../views/ShopCar/ListCar.vue'),
    },
    {
      path: 'detail/:id',
      name: 'DetailCar',
      component: () => import(/* webpackChunkName: "DetailCar" */ '../../views/ShopCar/DetailCar.vue'),
    }
  ]
};

export default ShopCar;