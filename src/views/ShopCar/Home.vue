<template>
  <div class="home-shop-car">
    <div class="home-shop-car__content">
      <b-row align-h="center">
        <b-col cols="2">
          <FilterHome />
        </b-col>

        <b-col cols="8">
          <div class="content-carousel">
            <BannerHome />
            <SearchHome />
          </div>

          <div class="content-categories">
            <CategoriesHome />
          </div>

          <div class="content-top-new-car">
            <TopNewCarHome :items="listNewCar" />
          </div>

          <div class="content-hotsale">
            <HotSaleHome :items="listHotSale" />
          </div>
          
          <div class="content-customer-feedback">
            <CustomerFeedbackHome :items="listFeedback" />
          </div>
        </b-col>
        
        <b-col cols="2">
          <Collaborators />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SearchHome from './components/Search.vue';
import BannerHome from './components/Banner.vue';
import FilterHome from './components/FilterHome.vue';
import Collaborators from './components/Collaborators.vue';
import CategoriesHome from './components/Categories.vue';
import TopNewCarHome from './components/TopNewCar.vue';
import HotSaleHome from './components/HotSale.vue';
import CustomerFeedbackHome from './components/CustomerFeedback.vue';

export default {
  name: 'HomeShopCar',
  components: {
    SearchHome,
    BannerHome,
    FilterHome,
    Collaborators,
    CategoriesHome,
    TopNewCarHome,
    HotSaleHome,
    CustomerFeedbackHome
  },
  data() {
    return {
      listNewCar: [
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
      listFeedback: [
        {
          _id: '1',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '2',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '3',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '4',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '5',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '6',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '7',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          _id: '8',
          image: '/assets/images/noimage.png',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.home-shop-car {
  overflow: h_idden;

  &__content {
    margin-bottom: 10px;

    .content-categories,
    .content-top-new-car,
    .content-hotsale,
    .content-customer-feedback {
      margin-bottom: 10px;
    }
  }
}
</style>