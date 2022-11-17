<template>
  <b-navbar toggleable="lg" fixed="top">
    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link v-for="route in routes" :key="route.name" :to="route.path">
          {{ $t(route.meta.title) }}
        </router-link>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="navbar-user">
      <b-nav-item-dropdown :text="fullname" right>
        <b-dropdown-item 
          @click="onClickProfile()"
        >
          {{ $t('SHOP_CAR.HOME.PROFILE.TITLE') }}
        </b-dropdown-item>
        <b-dropdown-item 
          @click="handleLogout"
        >
          {{ $t('SHOP_CAR.HOME.LOGOUT.TITLE') }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    
  </b-navbar>
</template>

<script>
import CONSTANTS from '@/constants';
import { asyncRoutes } from '@/routers';
import Toast from '@/toast';

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
      this.routes = (DASHBORAD.children).filter((route) => route.hidden !== true);
    } else {
      this.routes.length = 0;
    }
  },
  computed: {
    fullname() {
      return this.$store.getters.profile.name || ''; 
    }
  },
  methods: {
    onClickProfile() {
      if (this.$router.currentRoute.name !== 'ProfilePage') {
        this.$router.push({ name: 'ProfilePage' });
      }
    },
    handleLogout() {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.push({ name: 'HomeShopCar' });
        })
        .catch(() => {
          Toast.warning(this.$t('TOAST_MESSAGE.LOGOUT_ERROR'))
        })
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
    font-weight: 600;
    text-transform: capitalize;
  }

  .router-link-active {
    font-weight: 600;
    opacity: 1;
    color: $sub-main;
  }

}

.navbar-user {
  ::v-deep .dropdown-toggle::after {
    color: $white;
  }

  ::v-deep span {
    color: $white;
    margin-right: 10px;
    text-transform: capitalize;
  }

}
</style>