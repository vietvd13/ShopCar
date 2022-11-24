<template>
  <div class="home-shop-car">
    <div class="home-shop-car__content">
      <div class="content-filter">
        <FilterListCar 
          @filter="onClickApplyFilter"        
        />
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
  methods: {
    onClickApplyFilter() {
      this.$router.push({ name: 'ListCar' });
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.home-shop-car {
  overflow: hidden;

  &__content {
    .content-filter,
    .content-hotsale {
      margin-bottom: 10px;
    }
  }
}
</style>