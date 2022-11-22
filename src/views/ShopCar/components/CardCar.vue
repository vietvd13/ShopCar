<template>
  <div class="card-car" @click="onClickCardCar(carId)">
    <div class="card-car__img">
      <b-img-lazy 
        :src="`${domainImage}${carImage}`"
        :blank-src="require('@/assets/images/noimage.webp')"
        fluid 
        :alt="carName"
        v-bind="{
          height: mapImageHeight(typeScreen),
          width: 'auto'
        }"
        :style="`height: ${mapImageHeight(typeScreen)}px`"
      />
    </div>
    <div class="card-car__desc">
      <div class="car-name">
        {{ carName }}
      </div>
      <div class="date-sale">
        {{ dateSale }}
      </div>
      <div class="car-price">
        {{ formatPrice(carPrice) }} <span>만원</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '@/utils/helper';

export default {
  name: 'CardCarHome',
  props: {
    carId: {
      type: String,
      required: true,
      default: '',
    },
    carImage: {
      type: String,
      required: true,
      default: '',
    },
    carName: {
      type: String,
      required: true,
      default: '',
    },
    dateSale: {
      type: String,
      required: true,
      default: '',
    },
    carPrice: {
      type: [Number, String],
      required: true,
      default: 0,
    }
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
    typeScreen() {
      return this.$store.getters.sizeScreen.type;
    }
  },
  created () {
    this.mapImageHeight();
  },
  methods: {
    formatPrice,
    onClickCardCar(id) {
      if (id) {
        let route = this.$router.resolve({ name: 'DetailCar', params: { id }});

        window.open(route.href);
      }
    },
    mapImageHeight(size) {
      const MAP_SIZE = {
        xl: 190,
        lg: 190,
        md: 220,
        sm: 170,
        xs: 170,
      };

      return MAP_SIZE[size];
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.card-car {
  cursor: pointer;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid $iron;

  &:hover {
    img {
      transform: scale(1.2);
    }

    border: 1px solid $international-orange;
  }

  &__img {
    display: flex;
    text-align: center;
    vertical-align: middle;
    justify-content: center;

    img {
      width: 100%;
      object-fit: cover;
      transition: 0.3s all ease-in-out 0s;
    }

    overflow: hidden;
  }

  &__desc {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    overflow: hidden;
    background-color: $white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;

    .car-name {
      font-weight: 500;
      margin-bottom: 5px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .date-sale {
      font-size: 12px;
      color: $xanadu;
      margin-bottom: 5px;
    }

    .car-price {
      font-size: 18px;
      font-weight: 500;
      color: $alizarin-crimson;

      span {
        font-size: 12px;
        color: $xanadu;
      }
    }
  }
}
</style>