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
          <i class="fad fa-spinner-third fa-spin icon-loading" />
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
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  created() {
    this.$store.dispatch('auth/setInitApp')
      .then(() => {
        setPageName();
      })
  },
}
</script>

<style lang="scss" scoped>
@import './scss/variables.scss';

.icon-loading {
  color: $international-orange;
  font-size: 40px;
  margin-bottom: 10px;
}

.text-loading {
  font-weight: bold;
}
</style>