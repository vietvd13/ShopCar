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
    }
  ]
};

export default ShopCar;