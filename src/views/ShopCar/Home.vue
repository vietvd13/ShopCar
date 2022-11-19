<template>
  <div class="home-shop-car">
    <div class="home-shop-car__content">
      <div class="content-filter">
        <FilterListCar />
      </div>

      <div class="content-hotsale">
        <HotSaleHome />
      </div>
    </div>
  </div>
</template>

<script>
import FilterListCar from './components/FilterListCar.vue';
import HotSaleHome from './components/HotSale.vue';

export default {
  name: 'HomeShopCar',
  components: {
    FilterListCar,
    HotSaleHome,
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.home-shop-car {
  overflow: hidden;

  &__content {
    .content-filter,
    .content-hotsale,
    .content-customer-feedback {
      margin-bottom: 10px;
    }
  }
}
</style>