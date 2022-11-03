<template>
  <div class="basic-infor-car">
    <b-row>
      <b-col>
        <div class="car-name">
          <h4>{{ name }}</h4>  
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="car-price">
          <h4>{{ price }}</h4>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="car-no-number">
          <h5>{{ noNumber }}</h5>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'BasicInforCar',
  props: {
    name: {
      type: String,
      required: false,
      default: '기아 카니발 R 리무진 디젤 9인승 프레지던트'
    },
    price: {
      type: String,
      required: false,
      default: '730 만원'
    },
    noNumber: {
      type: String,
      required: false,
      default: '730 만원'
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.basic-infor-car {
  .car-price {
    color: $main;
  }
}
</style>