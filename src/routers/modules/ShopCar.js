import LayoutShopCar from '@/layouts/ShopCar';

const ShopCar = {
  path: '/shop-car',
  name: 'ShopCar',
  component: LayoutShopCar,
  redirect: {
    name: 'HomeShopCar'
  },
  children: [
    {
      path: 'home',
      name: 'HomeShopCar',
      component: () => import(/* webpackChunkName: "HomeShopCar" */ '@/views/ShopCar/Home.vue'),
    },
    {
      path: 'list',
      name: 'ListCar',
      component: () => import (/* webpackChunkName: "ListCar" */ '@/views/ShopCar/ListCar.vue'),
    },
    {
      path: 'detail/:id',
      name: 'DetailCar',
      component: () => import(/* webpackChunkName: "DetailCar" */ '@/views/ShopCar/DetailCar.vue'),
    },
    {
      path: 'car-buying-policy',
      name: 'CarBuyingPolicy',
      component: () => import(/* webpackChunkName: "CarBuyingPolict" */ '@/views/ShopCar/CarBuyingPolicy.vue')
    },
    {
      path: 'insurance',
      name: 'Insurance',
      component: () => import(/* webpackChunkName: "Insurance" */ '@/views/ShopCar/Insurance.vue')
    },
    {
      path: 'contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "Contact" */ '@/views/ShopCar/Contact.vue')
    },
    {
      path: 'all-collaborators',
      name: 'AllCollaborators',
      component: () => import(/* webpackChunkName: "AllCollaborators" */ '@/views/ShopCar/AllCollaborators')
    }
  ]
};

export default ShopCar;