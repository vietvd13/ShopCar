<template>
  <div class="home-shop-car">
    <div class="home-shop-car__search">
      <SearchHome />
    </div>

    <div class="home-shop-car__content">
      <b-row align-h="center">
        <b-col cols="11">
          <div class="content-carousel">
            <CarouselHome />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          
        </b-col>

        <b-col cols="8">
          <div class="content-categories">
            <CategoriesHome />
          </div>
          <div class="content-branchs">
            <BranchsHome />
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

        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SearchHome from './components/Search.vue';
import CarouselHome from './components/Carousel.vue';
import CategoriesHome from './components/Categories.vue';
import BranchsHome from './components/Branchs.vue';
import TopNewCarHome from './components/TopNewCar.vue';
import HotSaleHome from './components/HotSale.vue';
import CustomerFeedbackHome from './components/CustomerFeedback.vue';

export default {
  name: 'HomeShopCar',
  components: {
    SearchHome,
    CarouselHome,
    CategoriesHome,
    BranchsHome,
    TopNewCarHome,
    HotSaleHome,
    CustomerFeedbackHome
  },
  data() {
    return {
      listNewCar: [
        [
          {
            id: 1,
            image: 'https://image.dautomall.com/image_product/A043964/16210220220107_179583331_414589651.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '1,180'
          },
          {
            id: 2,
            image: 'https://image.dautomall.com/image_product/A059697/15552520221005_348389866_285113035.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '2,680'
          },
          {
            id: 3,
            image: 'https://image.dautomall.com/image_product/A052514/16584320220519_131980925_429430261.jpg',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '1,520'
          },
          {
            id: 4,
            image: 'https://image.dautomall.com/image_product/A058450/13383420220906_204617685_593201025.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '3,680'
          },
        ],
        [
          {
            id: 5,
            image: 'https://image.dautomall.com/image_product/A043429/13141920211220_349660250_890665980.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '4,540'
          },
          {
            id: 6,
            image: 'https://image.dautomall.com/image_product/A040660/10340320211104_792382700_821813551.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '1,510'
          },
          {
            id: 7,
            image: 'https://image.dautomall.com/image_product/A047607/13404320220228_767054343_762363693.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '3,680'
          },
          {
            id: 8,
            image: 'https://image.dautomall.com/image_product/A052514/16584320220519_131980925_429430261.jpg',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '2,680'
          },
        ],
      ],
      listHotSale: [
        [
          {
            id: 1,
            image: 'https://image.dautomall.com/image_product/A043964/16210220220107_179583331_414589651.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '1,180'
          },
          {
            id: 2,
            image: 'https://image.dautomall.com/image_product/A059697/15552520221005_348389866_285113035.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '2,680'
          },
          {
            id: 3,
            image: 'https://image.dautomall.com/image_product/A052514/16584320220519_131980925_429430261.jpg',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '1,520'
          },
          {
            id: 4,
            image: 'https://image.dautomall.com/image_product/A058450/13383420220906_204617685_593201025.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '3,680'
          },
        ],
        [
          {
            id: 5,
            image: 'https://image.dautomall.com/image_product/A043429/13141920211220_349660250_890665980.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '4,540'
          },
          {
            id: 6,
            image: 'https://image.dautomall.com/image_product/A040660/10340320211104_792382700_821813551.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '1,510'
          },
          {
            id: 7,
            image: 'https://image.dautomall.com/image_product/A047607/13404320220228_767054343_762363693.JPG',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '3,680'
          },
          {
            id: 8,
            image: 'https://image.dautomall.com/image_product/A052514/16584320220519_131980925_429430261.jpg',
            name: '재규어 New XF (11년~15년)',
            date_sale: '2022/10/31',
            price: '2,680'
          },
        ],
      ],
      listFeedback: [
        {
          id: 1,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666876244349760.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 2,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666876439830844.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 3,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666876439883246.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 4,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666875979695122.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 5,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666876837690639.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 6,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666876440191752.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 7,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666876339098266.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
        {
          id: 8,
          image: 'http://www.xehoihanviet.com/assets/admin/images/se/tmp/1666875979483915.jpg',
          feedback: 'Xe đẹp quá má ơi!!',    
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.home-shop-car {
  overflow: hidden;

  &__search,
  &__content {
    margin-bottom: 10px;

    .content-categories,
    .content-branchs,
    .content-top-new-car,
    .content-hotsale,
    .content-customer-feedback {
      margin-bottom: 10px;
    }
  }
}
</style>