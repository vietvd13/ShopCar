<template>
  <router-view class="view-app-main" :key="key" />
</template>

<script>
export default {
  name: "AppMainShopCar",
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss" scoped>
.view-app-main {
  margin-top: 10px;
}
</style>
