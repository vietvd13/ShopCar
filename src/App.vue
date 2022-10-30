<template>
  <b-overlay
    :show="loading.show"
    :variant="loading.variant"
    :opacity="loading.opacity"
    :blur="loading.blur"
    :rounded="loading.sm"
  >
    <template #overlay>
      <div class="text-center">
          <i class="fad fa-spinner-third fa-spin" />
          <p class="text-loading">
            {{ $t('APP.LOADING') }}
          </p>
      </div>
    </template>

    <router-view />
  </b-overlay>
</template>

<script>
import { setPageName } from './utils/setPageName';

export default {
  name: 'App',
  created () {
    setPageName();
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
}
</script>

<style lang="scss" scoped>
.text-loading {
  font-weight: bold;
}
</style>