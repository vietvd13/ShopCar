<template>
  <div class="detail-car">
    <div class="detail-car__header">
      <TitleContent>
        {{ $t('SHOP_CAR.DETAIL_CAR.TITLE') }}
      </TitleContent>
    </div>

    <div class="detail-car__content">
      <div class="content-preview-image">
        <PreviewImage
          :name="isCar.car_name"
          :price="isCar.price_display" 
          :images="isCar.images" 
        />
      </div>

      <div class="content-car-basic">
        <b-row>
          <b-col cols="12" xs="12" sm="12" md="12" lg="12">
            <CarInfor
              :price="isCar.price_display"
              :licensePlate="isCar.license_plate"
              :year="isCar.year_manufacture"
              :distanceDriven="isCar.distance_driven"
              :fuelType="isCar.fuel_type"
              :gearbox="isCar.gearbox"
              :cylynder="isCar.cylinder_capacity"
              :color="isCar.color"
              :carType="isCar.car_type"
              :seizure="isCar.seizure"
              :mortgage="isCar.mortgage"
              :presentationNumber="isCar.presentation_number"
              :storageLocation="isCar.storage_location"
              :contact="isCar.phone_contact"
              :saller="isCar.seller_name"
              :employeeId="isCar.employee_number"
              :affiliatedCompany="isCar.affiliated_company"
              :businessAddress="isCar.business_address"
              :parkingLocation="isCar.parking_location"
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
import PreviewImage from './components/PreviewImage.vue';
import CarInfor from './components/CarInfor.vue';
import CarOptions from './components/CarOptions.vue';
import ListImage from './components/ListImage.vue';

import { getDetailCar } from '@/api/modules/Home';

export default {
  name: 'DetailCar',
  components: {
    TitleContent,
    PreviewImage,
    CarInfor,
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