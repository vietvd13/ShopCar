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
  </div>
</template>

<script>
export default {
  name: 'BasicInforCar',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    price: {
      type: String,
      required: true,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.basic-infor-car {
  .car-price {
    color: $main;

    font-weight: normal;
  }
}
</style>