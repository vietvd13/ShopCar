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
      component: () => import(/* webpackChunkName: "Collaborators" */ '@/views/Dashboard/Collaborators.vue')
    }
  ]
}

export default Dashboard;