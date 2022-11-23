<template>
  <div class="zone-left-home">
    <b-card>

    </b-card>
  </div>
</template>

<script>
export default {
  name: 'FilterHome'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.zone-left-home {
  position: fixed;
  width: 250px;
  height: 100px;
  overflow: auto;

  top: 380px;
  left: 15px;
}

</style>