<template>
  <b-navbar toggleable="lg" sticky>
    <b-navbar-brand @click.prevent.stop="$emit('toggle')">
      <i id="toggle-menu" class="fas fa-bars" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default>
        <i class="fas fa-angle-down" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
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
    </b-collapse>    
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
  background-color: $white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  a {
    padding: 10px;
    text-decoration: none;
    color: $scorpion;
    font-weight: 600;
    text-transform: capitalize;
  }

  .router-link-active {
    font-weight: 600;
    opacity: 1;
    color: $international-orange;
  }
}

.navbar-user {
  ::v-deep .dropdown-toggle::after {
    color: $scorpion;
  }

  ::v-deep span {
    color: $scorpion;
    margin-right: 10px;
    text-transform: capitalize;
  }

}
</style>