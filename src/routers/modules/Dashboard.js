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
      path: 'collaborators',
      name: 'Collaborators',
      meta: {
        title: 'ROUTER.COLLABORATORS_MANAGEMENT'
      },
      component: () => import(/* webpackChunkName: "Collaborators" */ '@/views/Dashboard/Collaborators.vue')
    },
  ]
}

export default Dashboard;