<template>
  <div class="app-shop">
    <b-container>
      <Banner />
      <AppMain />
      <FooterHome />
    </b-container>
  </div>
</template>

<script>
import Banner from '@/views/ShopCar/components/Banner.vue';
import AppMain from './components/AppMain.vue';
import FooterHome from '@/views/ShopCar/components/FooterHome.vue'

export default {
  name: 'LayoutShopCar',
  components: {
    Banner,
    AppMain,
    FooterHome,
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.app-shop {
  min-height: 100vh;
  background-color: $seashell;
}
</style>