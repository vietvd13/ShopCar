<template>
  <div class="detail-car">
    <div class="detail-car__header">
      <TitleContent>
        {{ $t("SHOP_CAR.DETAIL_CAR.TITLE") }}
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
      </div>

      <div class="content-car-options">
        <CarOptions
          :exterior="isCar.exterior"
          :guts="isCar.guts"
          :safety="isCar.safety"
          :convenience="isCar.convenience"
        />
      </div>

      <div class="content-car-images">
        <ListImage :items="isCar.images" />
      </div>

      <div class="content-car-performance" id="tab-car-performance">
        <MenuDetailCar :tab-active="'tab-car-performance'" />
        <b-card>
          <div class="img-car-performance">
            <b-img-lazy
              :src="`${domainImage}${isCar.performance_check}`"
              :blank-src="require('@/assets/images/noimage.webp')"
              fluid
              :alt="isCar.car_name"
            />
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import TitleContent from "./components/TitleContent.vue";
import PreviewImage from "./components/PreviewImage.vue";
import CarInfor from "./components/CarInfor.vue";
import CarOptions from "./components/CarOptions.vue";
import ListImage from "./components/ListImage.vue";
import MenuDetailCar from "@/components/MenuDetailCar.vue";

import { getDetailCar } from "@/api/modules/Home";

export default {
  name: "DetailCar",
  components: {
    TitleContent,
    PreviewImage,
    CarInfor,
    CarOptions,
    ListImage,
    MenuDetailCar,
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  data() {
    return {
      isCar: {},
    };
  },
  created() {
    this.handleGetCar();
  },
  methods: {
    async handleGetCar() {
      try {
        const ID = this.$route.params.id;
        const BODY = {
          car_id: ID,
        };

        const { status_code, data } = await getDetailCar(BODY);

        if (status_code === 200) {
          this.isCar = data;
        }
      } catch (err) {
        console.log("[ERROR CALL DETAIL CAR]: ", err);
      }
    },
  },
};
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
    .content-car-images,
    .content-car-performance {
      margin-bottom: 10px;
    }

    .img-car-performance {
      img {
        width: 100%;
      }

      height: 500px;
      overflow-y: scroll;
    }
  }
}
</style>
