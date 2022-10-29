<template>
  <div>
    Vue
  </div>
</template>

<script>
import { setPageName } from './utils/setPageName';

export default {
  name: 'App',
  created () {
    setPageName();
  },
}
</script>
