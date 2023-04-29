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
      alias: '',
      name: 'HomeShopCar',
      component: () => import('@/views/ShopCar/Home.vue'),
    },
    {
      path: 'list',
      name: 'ListCar',
      component: () => import ('@/views/ShopCar/ListCar.vue'),
    },
    {
      path: 'detail/:id',
      name: 'DetailCar',
      component: () => import('@/views/ShopCar/DetailCar.vue'),
    },
    {
      path: 'car-buying-policy',
      name: 'CarBuyingPolicy',
      component: () => import('@/views/ShopCar/CarBuyingPolicy.vue')
    },
    {
      path: 'insurance',
      name: 'Insurance',
      component: () => import('@/views/ShopCar/Insurance.vue')
    },
    {
      path: 'contact',
      name: 'Contact',
      component: () => import('@/views/ShopCar/Contact.vue')
    },
    {
      path: 'all-collaborators',
      name: 'AllCollaborators',
      component: () => import('@/views/ShopCar/AllCollaborators')
    },
    {
      path: 'all-happy-moment',
      name: 'AllHappyMoment',
      component: () => import('@/views/ShopCar/AllHappyMoment')
    },
    {
      path: 'detail-happy-moment/:id',
      name: 'DetailHappyMoment',
      component: () => import('@/views/ShopCar/DetailHappyMoment')
    }
  ]
};

export default ShopCar;