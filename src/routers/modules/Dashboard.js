import LayoutDashboard from "@/layouts/Dashboard";

const Dashboard = {
  path: "/dashboard",
  name: "Dashboard",
  component: LayoutDashboard,
  redirect: {
    name: "CarManagement",
  },
  children: [
    {
      path: "car-management",
      name: "CarManagement",
      meta: {
        title: "ROUTER.CAR_MANAGEMENT",
        icon: "fas fa-car",
      },
      component: () =>
        import(
          /* webpackChunkName: "CarManagement" */ "@/views/Dashboard/CarManagement.vue"
        ),
    },
    {
      path: "customer-support",
      name: "CustomerSupport",
      meta: {
        title: "ROUTER.CUSTOMER_SUPPORT",
        icon: "fas fa-user-headset",
      },
      component: () =>
        import(
          /* webpackChunkName: "CustomerSupport" */ "@/views/Dashboard/CustomerSupport.vue"
        ),
    },
    {
      path: "happy-moment",
      name: "HappyMoment",
      meta: {
        title: "ROUTER.HAPPY_MOMENT",
        icon: "fas fa-laugh-squint",
      },
      component: () =>
        import(
          /* webpackChunkName: "HappyMoment" */ "@/views/Dashboard/HappyMoment.vue"
        ),
    },
    {
      path: "collaborators",
      name: "Collaborators",
      meta: {
        title: "ROUTER.COLLABORATORS_MANAGEMENT",
        icon: "fas fa-clipboard-user",
      },
      component: () =>
        import(
          /* webpackChunkName: "Collaborators" */ "@/views/Dashboard/Collaborators.vue"
        ),
    },
    {
      path: "banner",
      name: "Banner",
      meta: {
        title: "ROUTER.BANNER_MANAGEMENT",
        icon: "fas fa-scanner-image",
      },
      component: () =>
        import(
          /* webpackChunkName: "BannerManagement" */ "@/views/Dashboard/BannerManagement.vue"
        ),
    },
    {
      path: "policy",
      name: "PolicyManagement",
      meta: {
        title: "ROUTER.POLICY_MANAGEMENT",
        icon: "fas fa-police-box",
      },
      component: () =>
        import(
          /* webpackChunkName: "PolicyManagement" */ "@/views/Dashboard/PolicyManagement.vue"
        ),
    },
    {
      path: "insurance",
      name: "InsuranceManagement",
      meta: {
        title: "ROUTER.INSURANCE_MANAGEMENT",
        icon: "fas fa-car-tilt",
      },
      component: () =>
        import(
          /* webpackChunkName: "PolicyManagement" */ "@/views/Dashboard/InsuranceManagement.vue"
        ),
    },
    {
      path: "profile",
      name: "ProfilePage",
      meta: {
        title: "ROUTER.PROFILE",
      },
      hidden: true,
      component: () =>
        import(
          /* webpackChunkName: "Profile" */ "@/views/Dashboard/Profile.vue"
        ),
    },
    {
      path: "category",
      name: "CategoryManagement",
      meta: {
        title: "ROUTER.CATEGORY_MANAGEMENT",
        icon: "fas fa-garage-car",
      },
      component: () =>
        import(
          /* webpackChunkName: "Category" */ "@/views/Dashboard/CategoryManagement.vue"
        ),
    },
  ],
};

export default Dashboard;
