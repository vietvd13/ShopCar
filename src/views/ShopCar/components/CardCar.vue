<template>
  <div class="card-car mb-2 mb-md-2" @click="onClickCardCar(carId)">
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
      <span class="card-car__hotsale" v-if="hotsale">
        <i class="fad fa-fire-alt" />
        {{ $t('APP.HOT_SALE') }}
      </span>
    </div>
    <div class="card-car__desc">
      <div class="car-name">
        {{ carName }}
      </div>

      <div class="date-sale">
        {{ dateSale }} - {{ category }} - {{ color }} - {{ distanceDriven }} km
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
    hotsale: {
      type: Boolean,
      default: false,
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
    category: {
      type: String,
      required: true,
      default: '',
    },
    color: {
      type: String,
      required: true,
      default: '',
    },
    distanceDriven: {
      type: Number,
      required: true,
      default: 0,
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
    },
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
        md: 170,
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
  border: 1px solid $porcelain;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  &__hotsale {
    position: absolute;
    background-color: red;
    padding: 0.3rem;
    top: 0;
    left: 0;
    background-color: $white;
    color: $international-orange;
    font-weight: bold;
    font-size: 13px;
    z-index: 2;

    i {
      margin-right: 5px;
    }

    border-bottom-right-radius: 0.3rem;
  }

  &__img {
    display: flex;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    position: relative;

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
    text-align: left;
    font-family: 'Noto Sans KR', sans-serif;

    .car-name {
      font-weight: 500;
      margin-bottom: 5px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 16px;
    }

    .date-sale {
      font-size: 12px;
      color: $xanadu;
      margin-bottom: 5px;
    }

    .car-price {
      font-size: 28px;
      font-weight: 500;
      color: $international-orange;

      span {
        font-size: 12px;
        color: $xanadu;
      }
    }
  }
}
</style>