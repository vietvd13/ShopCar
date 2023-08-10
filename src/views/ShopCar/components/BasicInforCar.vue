<template>
  <div class="basic-infor-car">
    <b-row>
      <b-col>
        <div class="car-name text-left">
          {{ name }}
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "BasicInforCar",
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

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
