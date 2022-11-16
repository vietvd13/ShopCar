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
        <b-dropdown-item href="#">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { asyncRoutes } from '@/routers';

export default {
  name: 'NavbarDashboard',
  data() {
    return {
      asyncRoutes,
      routes: [],
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