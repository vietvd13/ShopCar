<template>
  <b-img-lazy
    :src="`${domainImage}${urlBanner}`"
    :blank-src="require('@/assets/images/noimage.webp')"
    fluid
    center
    class="banner-home"
    alt="Banner Home"
    v-bind="{ 
      height: 370,
      width: 'auto'
    }"
  />
</template>

<script>
import { getBanner } from '@/api/modules/Home';

export default {
  name: 'CarouselHome',
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE; 
    }
  },
  data() {
    return {
      urlBanner: ''
    }
  },
  created () {
    this.initData();
  },
  methods: {
    async initData() {
      await this.handleGetBanner();
    },
    async handleGetBanner() {
      try {
        const { status_code, data } = await getBanner();

        if (status_code === 200) {
          this.urlBanner = data;
        } else {
          this.urlBanner = '';
        }
      } catch (err) {
        this.urlBanner = '';
        console.log(err);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.banner-home {
  width: 100%;
  object-fit: scale-down;

  max-height: auto;
}
</style>