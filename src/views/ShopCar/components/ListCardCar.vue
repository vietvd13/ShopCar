<template>
  <b-row>
    <template v-if="items.length > 0">
      <b-col
        v-for="car in items"
        :key="car._id"
        cols="6"
        xs="6"
        sm="6"
        md="4"
        lg="4"
        xl="3"
      >
        <CardCar
          :car-id="car._id"
          :car-image="car.primary_image"
          :hotsale="car.is_hotsale"
          :car-name="car.car_name"
          :date-sale="car.year_manufacture"
          :category="car.category"
          :color="car.color"
          :car-price="car.price_display"
        />
      </b-col>
    </template>

    <template v-else>
      <b-col class="text-center">
        <b-card>
          {{ $t('APP.TABLE_NO_DATA') }}
        </b-card>
      </b-col>
    </template>
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
@import '@/scss/variables';

</style>