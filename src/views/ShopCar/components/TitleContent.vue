<template>
  <div class="shop-car-title">
    <div class="shop-car-title__dot" />
    <div class="shop-car-title__text">
      <slot> Title </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleConent",
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.shop-car-title {
  display: flex;
  background-color: $white;
  margin-bottom: 10px;
  padding: 10px;

  &__dot {
    width: 7px;
    height: 30px;

    background-color: $international-orange;
  }

  &__text {
    font-weight: bold;
    font-size: 1.2rem;
    text-indent: 10px;
    text-transform: capitalize;
  }
}
</style>
