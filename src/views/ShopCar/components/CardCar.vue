<template>
  <div class="card-car">
    <div class="card-car__img">
      <b-img 
        :src="carImage" 
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
        {{ carPrice }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCarHome',
  props: {
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
      type: String,
      required: true,
      default: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';


.card-car {
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &__img {
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
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