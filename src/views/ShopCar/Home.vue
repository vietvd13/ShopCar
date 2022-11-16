<template>
  <div class="home-shop-car">
    <div class="home-shop-car__content">
      <div class="content-carousel">
        <SearchHome />
      </div>

      <div class="content-filter">
        <FilterListCar />
      </div>

      <div class="content-hotsale">
        <HotSaleHome :items="listHotSale" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchHome from './components/Search.vue';
import FilterListCar from './components/FilterListCar.vue'
import HotSaleHome from './components/HotSale.vue';

export default {
  name: 'HomeShopCar',
  components: {
    SearchHome,
    FilterListCar,
    HotSaleHome,
  },
  data() {
    return {
      listHotSale: [
        {
          _id: '1',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '1,180'
        },
        {
          _id: '2',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '2,680'
        },
        {
          _id: '3',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '1,520'
        },
        {
          _id: '4',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '3,680'
        },
        {
          _id: '5',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '4,540'
        },
        {
          _id: '6',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '1,510'
        },
        {
          _id: '7',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '3,680'
        },
        {
          _id: '8',
          primary_image: '/assets/images/noimage.png',
          car_name: '재규어 New XF (11년~15년)',
          year_manufacture: '2022',
          price: '2,680'
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.home-shop-car {
  overflow: hidden;

  &__content {
    .content-filter {
      margin-top: 10px;
    }

    .content-filter,
    .content-hotsale,
    .content-customer-feedback {
      margin-bottom: 10px;
    }
  }
}
</style>