<template>
  <b-row>
    <b-col 
      v-for="car in items"
      :key="car._id" 
      cols="6" 
      xs="6" 
      sm="6" 
      md="6" 
      lg="3"
    >
      <CardCar
        :car-id="car._id"
        :car-image="car.primary_image"
        :car-name="car.car_name"
        :date-sale="car.year_manufacture"
        :car-price="car.price_display"
      />
    </b-col>
  </b-row>
</template>

<script>
import CardCar from './CardCar.vue';

export default {
  name: 'ListCardCar',
  components: {
    CardCar,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

</style>