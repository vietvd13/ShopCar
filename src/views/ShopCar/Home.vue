<template>
  <div class="home-shop-car">
    <div class="home-shop-car__content">
      <b-container>
        <div class="content-carousel">
          <BannerHome />
          <SearchHome />
        </div>

        <div class="content-filter">
          <FilterListCar />
        </div>

        <div class="content-hotsale">
          <HotSaleHome :items="listHotSale" />
        </div>
        
        <div class="content-customer-feedback">
          <CustomerFeedbackHome :items="listFeedback" />
        </div>

        <div class="content-staff">
          <ListCollaborators :items="listCollaborators" />
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { 
  getListCollaborators,
  getListHappyMoment
} from '@/api/modules/Home';
import SearchHome from './components/Search.vue';
import BannerHome from './components/Banner.vue';
import FilterListCar from './components/FilterListCar.vue'
import HotSaleHome from './components/HotSale.vue';
import CustomerFeedbackHome from './components/CustomerFeedback.vue';
import ListCollaborators from './components/ListCollaborators.vue'

export default {
  name: 'HomeShopCar',
  components: {
    SearchHome,
    BannerHome,
    FilterListCar,
    HotSaleHome,
    CustomerFeedbackHome,
    ListCollaborators
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
      listFeedback: [],
      listCollaborators: [],
    }
  },
  created () {
    this.handleInit();
  },
  methods: {
    async handleInit() {
      this.handleGetAllCollaborators();
      this.handleGetListHappyMoment();
    },
    async handleGetAllCollaborators() {
      try {
        const BODY = {
          limit: 8,
          page: 1,
        };

        const { status_code, data } = await getListCollaborators(BODY);

        if (status_code === 200) {
          this.listCollaborators = data;
        } else {
          this.listCollaborators = [];
        }
      } catch (err) {
        this.listCollaborators = [];
        console.log(err);
      }
    },
    async handleGetListHappyMoment() {
      try {
        const { status_code, data } = await getListHappyMoment();

        if (status_code === 200) {
          this.listFeedback = data;
        } else {
          this.listFeedback = [];
        }
      } catch (err) {
        this.listFeedback = [];
        console.log(err);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.home-shop-car {
  overflow: hidden;
  background-color: $seashell;

  &__content {
    margin-bottom: 10px;

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