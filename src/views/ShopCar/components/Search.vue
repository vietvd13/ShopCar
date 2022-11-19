<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand
      href="#"
      @click="goToRoute('HomeShopCar')"
    >
      <i class="fas fa-home-lg-alt" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default>
        <i class="custom-icon-toggle fas fa-bars" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link
          v-for="route in listRoute"
          :key="route.value"
          :to="route.path"
        >
          {{ $t(route.text) }}
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-form-input 
          size="sm"
          class="mr-sm-2 mb-sm-2 mb-lg-0" 
          :placeholder="$t('SHOP_CAR.HOME.SEARCH')"
        />

        <b-button 
          size="sm" 
          class="my-2 my-sm-0 btn-default btn-app" 
        >
          {{ $t('SHOP_CAR.HOME.SEARCH') }}
        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'SearchHome',
  data() {
    return {
      listRoute: [
        {
          value: 'VEHICLE_LIST',
          text: 'SHOP_CAR.HOME.CATEGORIES.VEHICLE_LIST',
          path: '/shop-car/list',
        },
        {
          value: 'CAR_BUYING_POLICY',
          text: 'SHOP_CAR.HOME.CATEGORIES.CAR_BUYING_POLICY',
          path: '/shop-car/car-buying-policy',
        },
        {
          value: 'INSURANCE',
          text: 'SHOP_CAR.HOME.CATEGORIES.INSURANCE',
          path: '/shop-car/insurance',
        },
        {
          value: 'CONTACT',
          text: 'SHOP_CAR.HOME.CATEGORIES.CONTACT',
          path: '/shop-car/contact',
        },
      ],
      keyword: ''
    }
  },
  methods: {
    goToRoute(name) {
      if (name) {
        const CURRENT_NAME = this.$route.name;

        if (CURRENT_NAME !== name) {
          this.$router.push({ name });
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.navbar {
  background-color: $main;
  padding: 0.5rem;

  .navbar-brand {
    margin-right: 0;

    &:hover {
      color: $white;
    }

    &:focus {
      color: $white;
    }
  }

  .custom-icon-toggle {
    color: $sub-main;
    font-size: 25px;
  }

  a {
    padding: 10px;
    text-decoration: none;
    color: $white;
    text-transform: capitalize;
    font-weight: bold;
  }

  .router-link-active {
    font-weight: bold;
    opacity: 1;
    color: $sub-main;
  }
}
</style>