<template>
  <b-row>
    <!-- Button Back -->
    <b-col cols="1">
      <div class="icon-card-slider">
        <i 
          class="fas fa-chevron-left" 
          @click="backSlider()" 
        />
      </div>
    </b-col>

    <!-- Slider -->
    <b-col cols="10">
      <b-carousel :ref="refName">
        <b-carousel-slide v-for="(slide, idx) in items" :key="idx">
          <template #img>
            <b-row>
              <template v-for="(car, idxCar) in slide">
                <template v-if="car">
                  <b-col cols="3" :key="idxCar">
                    <CardCar
                      :car-image="car.image"
                      :car-name="car.name"
                      :date-sale="car.date_sale"
                      :car-price="car.price"
                    />
                  </b-col>
                </template>
                <template v-else>
                  <b-col cols="3" :key="idxCar" />
                </template>
              </template>
            </b-row>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-col>

    <!-- Button Next -->
    <b-col cols="1">
      <div class="icon-card-slider">
        <i 
          class="fas fa-chevron-right" 
          @click="nextSlider()" 
        />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import CardCar from './CardCar.vue';

export default {
  name: 'CardSlider',
  components: {
    CardCar,
  },
  props: {
    refName: {
      type: String,
      required: false,
      default: 'CardSlider',
    },
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
  },
  methods: {
    backSlider() {
      this.$refs[this.refName].prev();
    },
    nextSlider() {
      this.$refs[this.refName].next();
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.icon-card-slider {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: $main;

  i {
    cursor: pointer;
  }
}
</style>