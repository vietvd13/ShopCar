<template>
  <b-card>
    <b-row>
      <b-col
        v-for="(cate, idx) in ListCategories"
        :key="idx"
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="3"
        xl="3"
      >
        <div class="card-categories" @click="goToRoute(cate.route)">
          <span>{{ $t(cate.text) }}</span>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "CategoriesHome",
  data() {
    return {
      ListCategories: [
        {
          value: "DOMESTIC_CAR",
          text: "SHOP_CAR.HOME.CATEGORIES.DOMESTIC_CAR",
          route: "",
        },
        {
          value: "IMPORTED_CAR",
          text: "SHOP_CAR.HOME.CATEGORIES.IMPORTED_CAR",
          route: "",
        },
        {
          value: "CUSTOMER_REVIEWS",
          text: "SHOP_CAR.HOME.CATEGORIES.CUSTOMER_REVIEWS",
          route: "",
        },
        {
          value: "VEHICLE_LIST",
          text: "SHOP_CAR.HOME.CATEGORIES.VEHICLE_LIST",
          route: "ListCar",
        },
      ],
    };
  },
  methods: {
    goToRoute(name) {
      if (name) {
        const CURRENT_NAME = this.$route.name;

        if (CURRENT_NAME !== name) {
          this.$router.push({ name });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.card-categories {
  background-color: $international-orange;
  text-align: center;
  padding: 10px 0;
  border-radius: 5px;
  margin: 5px 0;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  span {
    color: $white;
    font-weight: bold;
  }
}
</style>
