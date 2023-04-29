import LayoutDashboard from '@/layouts/Dashboard';

const Dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LayoutDashboard,
  redirect: {
    name: 'CarManagement'
  },
  children: [
    {
      path: 'car-management',
      name: 'CarManagement',
      meta: {
        title: 'ROUTER.CAR_MANAGEMENT',
        icon: 'fas fa-car'
      },
      component: () => import('@/views/Dashboard/CarManagement.vue')
    },
    {
      path: 'customer-support',
      name: 'CustomerSupport',
      meta: {
        title: 'ROUTER.CUSTOMER_SUPPORT',
        icon: 'fas fa-user-headset'
      },
      component: () => import('@/views/Dashboard/CustomerSupport.vue')
    },
    {
      path: 'happy-moment',
      name: 'HappyMoment',
      meta: {
        title: 'ROUTER.HAPPY_MOMENT',
        icon: 'fas fa-laugh-squint'
      },
      component: () => import('@/views/Dashboard/HappyMoment.vue')
    },
    {
      path: 'collaborators',
      name: 'Collaborators',
      meta: {
        title: 'ROUTER.COLLABORATORS_MANAGEMENT',
        icon: 'fas fa-clipboard-user'
      },
      component: () => import('@/views/Dashboard/Collaborators.vue')
    },
    {
      path: 'banner',
      name: 'Banner',
      meta: {
        title: 'ROUTER.BANNER_MANAGEMENT',
        icon: 'fas fa-scanner-image'
      },
      component: () => import('@/views/Dashboard/BannerManagement.vue')
    },
    {
      path: 'policy',
      name: 'PolicyManagement',
      meta: {
        title: 'ROUTER.POLICY_MANAGEMENT',
        icon: 'fas fa-police-box'
      },
      component: () => import('@/views/Dashboard/PolicyManagement.vue')
    },
    {
      path: 'insurance',
      name: 'InsuranceManagement',
      meta: {
        title: 'ROUTER.INSURANCE_MANAGEMENT',
        icon: 'fas fa-car-tilt'
      },
      component: () => import('@/views/Dashboard/InsuranceManagement.vue')
    },
    {
      path: 'profile',
      name: 'ProfilePage',
      meta: {
        title: 'ROUTER.PROFILE'
      },
      hidden: true, 
      component: () => import('@/views/Dashboard/Profile.vue')
    }
  ]
}

export default Dashboard;