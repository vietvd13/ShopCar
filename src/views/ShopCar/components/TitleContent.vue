<template>
  <div class="shop-car-title">
    <div class="shop-car-title__text">
      <slot>
        Title
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleConent'
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.shop-car-title {
  display: flex;
  background-color: $white;
  margin-bottom: 10px;

  &__text {
    font-weight: bold;
    font-size: 1.2rem;
  }
}
</style>