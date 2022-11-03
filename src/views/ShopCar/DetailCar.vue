<template>
  <div class="detail-car">
    <div class="detail-car__content">
      <b-row align-h="center">
        <b-col cols="2">

        </b-col>

        <b-col cols="8">
          <div class="content-search">
            <SearchHome />
          </div>

          <div class="content-basic-infor">
            <b-card>
              <b-row>
                <b-col cols="6">
                  <PreviewImage :images="isCar.images" />
                </b-col>
                <b-col cols="6">
                  <BasicInforCar />
                </b-col>
              </b-row>
            </b-card>
          </div>

          <div class="content-preview-image">
            <!-- <PreviewImage :images="isCar.images" /> -->
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
import BasicInforCar from './components/BasicInforCar.vue';
import PreviewImage from './components/PreviewImage.vue';

import { getDetailCar } from '../../api/modules/Home';

export default {
  name: 'DetailCar',
  components: {
    SearchHome,
    BasicInforCar,
    PreviewImage
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

  &__content {
    margin-bottom: 10px;

    .content-search,
    .content-basic-infor {
      margin-bottom: 10px;
    }
  }
}
</style>