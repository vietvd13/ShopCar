<template>
  <b-navbar toggleable="lg" fixed="top">
    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link v-for="route in routes.children" :key="route.name" :to="route.path">
          {{ $t(route.meta.title) }}
        </router-link>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="navbar-user">
      <b-nav-item-dropdown text="Lê Đình Thắng" right>
        <b-dropdown-item href="/dashboard/profile">Trang cá nhân</b-dropdown-item>
        <b-dropdown-item href="#" @click="handleLogout">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import CONSTANTS from '@/constants';
import { asyncRoutes } from '@/routers';
import Cookies from 'js-cookie';
export default {
  name: 'NavbarDashboard',
  data() {
    return {
      asyncRoutes,
      routes: [],
      CONSTANTS
    }
  },
  created() {
    const DASHBORAD = this.asyncRoutes.find((route) => route.name === 'Dashboard');

    if (DASHBORAD) {
      this.routes = DASHBORAD;
    } else {
      this.routes.length = 0;
    }
  },
  methods: {
    handleLogout() {
      Cookies.remove(CONSTANTS.COOKIES.REFRESH_TOKEN);
      Cookies.remove(CONSTANTS.COOKIES.TOKEN);
      this.$router.push({ name: 'HomeShopCar' });
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.navbar {
  background-color: $main;

  a {
    padding: 10px;
    text-decoration: none;
    color: $white;
    opacity: 0.8;
  }

  .router-link-active {
    font-weight: bold;
    opacity: 1;
  }

}

.navbar-user {
  ::v-deep .dropdown-toggle::after {
    color: $white;
  }

  ::v-deep span {
    color: $white;
  }

}
</style>