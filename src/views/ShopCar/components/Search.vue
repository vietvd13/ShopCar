<template>
  <!-- <div class="home-search">
    <b-row align-h="center">
      <b-col cols="6" xs="6" sm="6" md="6" lg="4" xl="4">
        <b-form-input 
          v-model="keyword"
          :placeholder="$t('SHOP_CAR.HOME.SEARCH')" 
          trim
          class="input-search"
        />
      </b-col>
    </b-row>
  </div> -->
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse" />

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
@import '../../../scss/variables';

.navbar {
  background-color: $main;

  a {
    padding: 10px;
    text-decoration: none;
    color: $white;
  }

  .router-link-active {
    font-weight: bold;
    opacity: 1;
    color: $sub-main;
  }
}
</style>