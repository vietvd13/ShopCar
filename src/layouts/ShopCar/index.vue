<template>
  <div class="app-shop">
    <AppMain />
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue';

export default {
  name: 'LayoutShopCar',
  components: {
    AppMain,
  },
}
</script>

<style lang="scss" scoped>
.app-shop {
  min-height: 100vh;
}
</style>