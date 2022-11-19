<template>
  <div class="detail-car">
    <div class="detail-car__header">
      <TitleContent>
        {{ $t('SHOP_CAR.DETAIL_CAR.TITLE') }}
      </TitleContent>
    </div>

    <div class="detail-car__content">
      <div class="content-basic-infor">
        <BasicInforCar 
          :name="isCar.car_name"
          :price="isCar.price_display" 
        />
      </div>

      <div class="content-preview-image">
        <PreviewImage :images="isCar.images" />
      </div>

      <div class="content-car-basic">
        <b-row>
          <b-col cols="12" xs="12" sm="12" md="12" lg="12">
            <CarInfor 
              :year="isCar.year_manufacture"
              :fuelType="isCar.fuel_type"
              :color="isCar.color"
              :licensePlate="isCar.license_plate"
              :foreclosureMortgage="isCar.mortgage"
              :gearbox="isCar.gearbox"
              :distanceDriven="isCar.distance_driven"
              :presentationNumber="isCar.presentation_number"
            />
          </b-col>

          <b-col cols="12" xs="12" sm="12" md="12" lg="12">
            <SallerInfor 
              :fullname="isCar.seller_name"
              :phone="isCar.phone_contact"
              :employee-id="isCar.employee_number"
            />
          </b-col>
        </b-row>
      </div>

      <div class="content-car-options">
        <CarOptions />
      </div>

      <div class="content-car-images">
        <ListImage 
          :items="isCar.images"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleContent from './components/TitleContent.vue';
import BasicInforCar from './components/BasicInforCar.vue';
import PreviewImage from './components/PreviewImage.vue';
import CarInfor from './components/CarInfor.vue';
import SallerInfor from './components/SallerInfor.vue';
import CarOptions from './components/CarOptions.vue';
import ListImage from './components/ListImage.vue';

import { getDetailCar } from '@/api/modules/Home';

export default {
  name: 'DetailCar',
  components: {
    TitleContent,
    BasicInforCar,
    PreviewImage,
    CarInfor,
    SallerInfor,
    CarOptions,
    ListImage
  },
  data() {
    return {
      isCar: {

      }
    }
  },
  created () {
    this.handleGetCar();
  },
  methods: {
    async handleGetCar() {
      try {
        const ID = this.$route.params.id;
        const BODY = {
          car_id: ID
        }

        const { status_code, data } = await getDetailCar(BODY);

        if (status_code === 200) {
          console.log(data);
          this.isCar = data;
        }
      } catch (err) {
        console.log('[ERROR CALL DETAIL CAR]: ', err);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.detail-car {
  overflow: hidden;

  &__header,
  &__content {
    margin-bottom: 10px;
  }

  &__content {
    .content-basic-infor,
    .content-preview-image,
    .content-car-options,
    .content-car-images {
      margin-bottom: 10px;
    }
  }
}
</style>