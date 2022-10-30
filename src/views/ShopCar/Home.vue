<template>
  <div class="home-shop-car">
    <div class="home-shop-car__search">
      <SearchHome />
    </div>

    <div class="home-shop-car__content">
      <b-row align-h="center">
        <b-col cols="11">
          <div class="content-carousel">
            <CarouselHome />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          
        </b-col>

        <b-col cols="8">
          <div class="content-categories">
            <CategoriesHome />
          </div>
          <div class="content-branchs">
            <BranchsHome />
          </div>
        </b-col>

        <b-col cols="2">

        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SearchHome from './components/Search.vue';
import CarouselHome from './components/Carousel.vue';
import CategoriesHome from './components/Categories.vue';
import BranchsHome from './components/Branchs.vue';

export default {
  name: 'HomeShopCar',
  components: {
    SearchHome,
    CarouselHome,
    CategoriesHome,
    BranchsHome,
  },
}
</script>

<style lang="scss" scoped>
.home-shop-car {
  &__search,
  &__content {
    margin-bottom: 10px;

    .content-categories,
    .content-branchs {
      margin-bottom: 10px;
    }
  }
}
</style>