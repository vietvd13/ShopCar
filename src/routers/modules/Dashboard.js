import LayoutDashboard from '@/layouts/Dashboard';

const Dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LayoutDashboard,
  redirect: {
    name: 'Collaborators'
  },
  children: [
    {
      path: 'car-management',
      name: 'CarManagement',
      meta: {
        title: 'ROUTER.CAR_MANAGEMENT'
      },
      component: () => import(/* webpackChunkName: "CarManagement" */ '@/views/Dashboard/CarManagement.vue')
    },
    {
      path: 'customer-support',
      name: 'CustomerSupport',
      meta: {
        title: 'ROUTER.CUSTOMER_SUPPORT'
      },
      component: () => import(/* webpackChunkName: "CustomerSupport" */ '@/views/Dashboard/CustomerSupport.vue')
    },
    {
      path: 'happy-moment',
      name: 'HappyMoment',
      meta: {
        title: 'ROUTER.HAPPY_MOMENT',
      },
      component: () => import(/* webpackChunkName: "HappyMoment" */ '@/views/Dashboard/HappyMoment.vue')
    },
    {
      path: 'collaborators',
      name: 'Collaborators',
      meta: {
        title: 'ROUTER.COLLABORATORS_MANAGEMENT'
      },
      component: () => import(/* webpackChunkName: "Collaborators" */ '@/views/Dashboard/Collaborators.vue')
    },
    {
      path: 'profile',
      name: 'ProfilePage',
      meta: {
        title: 'ROUTER.PROFILE'
      },
      hidden: true, 
      component: () => import(/* webpackChunkName: "Profile" */ '@/views/Dashboard/Profile.vue')
    }
  ]
}

export default Dashboard;