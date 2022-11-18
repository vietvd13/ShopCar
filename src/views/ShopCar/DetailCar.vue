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
          :price="isCar.price" 
        />
      </div>

      <div class="content-preview-image">
        <PreviewImage :images="isCar.images" />
      </div>

      <div class="content-basic-infor">
        <b-row>
          <b-col
            cols="12" 
            xs="12" 
            sm="12" 
            md="12" 
            lg="6"              
          >
            <div class="basic-infor">
              <span class="title-basic-infor">
                {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_BASIC_INFOR') }}
              </span>
              <table>
                <tbody>
                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.YEAR') }}</td>
                    <td>{{ isCar.year_manufacture }}</td>

                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.FIRST_REGISTRATION_DATE') }}</td>
                    <td>{{ isCar.year_manufacture }}</td>
                  </tr>

                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.FUEL_TYPE') }}</td>
                    <td>{{ isCar.fuel_type }}</td>

                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.GEARBOX') }}</td>
                    <td>{{ isCar.fuel_type }}</td>
                  </tr>

                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.COLOR') }}</td>
                    <td>{{ isCar.color }}</td>

                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.DISTANCE_DRIVEN') }}</td>
                    <td>{{ isCar.color }}</td>
                  </tr>

                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.LICENSE_PLATE') }}</td>
                    <td>{{ isCar.license_plate }}</td>

                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.VEHICLE_IDENTIFICATION_NUMBER') }}</td>
                    <td>{{ isCar.license_plate }}</td>
                  </tr>

                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.FORECLOSURE_MORTGAGE') }}</td>
                    <td>{{ isCar.license_plate }}</td>

                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.MODEL_NAME') }}</td>
                    <td>{{ isCar.license_plate }}</td>
                  </tr>

                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.NON_PAYMENT_OF_TAX') }}</td>
                    <td>{{ isCar.license_plate }}</td>

                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.PRESENTATION_NUMBER') }}</td>
                    <td>{{ isCar.license_plate }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t('SHOP_CAR.DETAIL_CAR.ACCIDENT') }}</td>
                    <td>{{ isCar.license_plate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>

          <b-col
            cols="12" 
            xs="12" 
            sm="12" 
            md="12" 
            lg="6"               
          >
            <div class="seller-infor">
              <span>{{ $t('SHOP_CAR.DETAIL_CAR.SELLER_INFORMATION') }}</span>
              <b-row>
                <b-col>
                  
                </b-col>

                <b-col>
                  <b-row>
                    <b-col>{{ $t('SHOP_CAR.DETAIL_CAR.SELLER_INFORMATION') }}</b-col>
                    <b-col>VU MANH HIEN</b-col>
                  </b-row>

                  <b-row>
                    <b-col>{{ $t('SHOP_CAR.DETAIL_CAR.CONTACT') }}</b-col>
                    <b-col>010-4319-6789</b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>

      <div>
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
import ListImage from './components/ListImage.vue';

import { getDetailCar } from '../../api/modules/Home';

export default {
  name: 'DetailCar',
  components: {
    TitleContent,
    BasicInforCar,
    PreviewImage,
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
    .content-preview-image {
      margin-bottom: 10px;
    }
  }
}
</style>