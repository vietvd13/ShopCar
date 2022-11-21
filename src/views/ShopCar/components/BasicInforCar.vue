<template>
  <div class="basic-infor-car">
    <b-row>
      <b-col>
        <div class="car-name text-left">
          {{ name }}
        </div>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col>
        <div class="car-price text-left">
          {{ $t('SHOP_CAR.DETAIL_CAR.PRICE') }}: <span>{{ price }}</span> 만원
        </div>
      </b-col>
    </b-row> -->
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
    // price: {
    //   type: [String, Number],
    //   required: true,
    //   default: 0
    // },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.basic-infor-car {
  margin-bottom: 10px;

  .car-name {
    font-weight: bold;
    font-size: 25px;
  }

  .car-price {
    font-weight: bold;
    font-size: 20px;

    span {
      color: $alizarin-crimson;
    }
  }
}
</style>