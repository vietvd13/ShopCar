<template>
  <b-navbar toggleable="lg" sticky>
    <b-container>
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
            class="item-route"
          >
            {{ $t(route.text) }}
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarShop',
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
  background-color: $white;
  padding: 0.5rem;

  z-index: 99999;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .navbar-brand {
    margin-right: 0;
    color: $international-orange;

    &:hover {
      color: $international-orange;
    }

    &:focus {
      color: $international-orange;
    }
  }

  .custom-icon-toggle {
    color: $scorpion;
    font-size: 25px;
  }

  a {
    padding: 10px;
    text-decoration: none;
    color: $scorpion;
    text-transform: capitalize;
    font-weight: 600;
  }

  .item-route {
    text-align: center;
    min-width: 100px;
    transition: 0.2s all ease-in-out 0s;
    font-size: 15px;

    &:hover {
      transform: scale(1.1);
      color: $mine-shaft;
    }
  }

  .router-link-active {
    font-weight: bold;
    opacity: 1;
    color: $international-orange;
  }
}
</style>