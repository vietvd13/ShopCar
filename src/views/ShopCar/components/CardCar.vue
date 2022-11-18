<template>
  <div class="card-car" @click="onClickCardCar(carId)">
    <div class="card-car__img">
      <b-img 
        :src="`${domainImage}${carImage}`" 
        fluid 
        :alt="carName" 
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
        {{ carPrice }} 만원
      </div>
    </div>
  </div>
</template>

<script>
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
      type: Number,
      required: true,
      default: 0,
    }
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    }
  },
  methods: {
    onClickCardCar(id) {
      if (id) {
        let route = this.$router.resolve({ name: 'DetailCar', params: { id }});

        window.open(route.href);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.card-car {
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  overflow: hidden;

  margin-top: 10px;
  margin-bottom: 10px;

  &__img {
    height: 220px;

    display: flex;
    text-align: center;
    vertical-align: middle;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
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

    .car-name {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 10px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      min-height: 36px;
    }

    .date-sale {
      font-size: 12px;
      color: $silver-chalice;
      margin-bottom: 10px;
    }

    .car-price {
      font-size: 18px;
      font-weight: bold;
      color: $main;
    }
  }
}
</style>