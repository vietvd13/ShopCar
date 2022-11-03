<template>
  <div class="home-search">
    <b-row align-h="center">
      <b-col cols="6" xs="6" sm="6" md="6" lg="4" xl="4">
        <b-form-input 
          v-model="keyword"
          :placeholder="$t('SHOP_CAR.HOME.SEARCH')" 
          trim
          class="input-search"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SearchHome',
  data() {
    return {
      keyword: ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.home-search {
  background-color: $main;

  padding: 10px 0;

  overflow: hidden;

  .input-search {
    // border-radius: 1.5rem;
    border: none;
    box-shadow: none;
  }
}
</style>