<template>
  <div class="home-shop-car">
    <div class="home-shop-car__content">
      <div class="content-filter">
        <FilterListCar
          :total-car="totalCar"
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
  data() {
    return {
      totalCar: 0
    }
  },
  created () {
    this.$bus.on('HOT_SALE_TOTAL_CAR', (totalCar) => {
      this.totalCar = totalCar;
    })
  },
  destroyed () {
    this.$bus.off('HOT_SALE_TOTAL_CAR');
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
  &__content {
    .content-filter,
    .content-hotsale {
      margin-bottom: 10px;
    }
  }
}
</style>