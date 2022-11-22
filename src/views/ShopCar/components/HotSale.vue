<template>
  <div class="hot-sale-home">
    <ListCardCar :items="items" />
  </div>
</template>

<script>
import ListCardCar from './ListCardCar.vue';

import { handleDataSliderAndList } from '@/utils/handleDataSliderAndList';
import { getListHotSale } from '@/api/modules/Home';

export default {
  name: 'HotSaleHome',
  components: {
    ListCardCar
  },
  computed: {
    typeScreen() {
      return this.$store.getters.sizeScreen.type;
    }
  },
  data() {
    return {
      items: []
    }
  },
  created () {
    this.initData();
  },
  methods: {
    handleDataSliderAndList,
    async initData() {
      await this.handleGetListHotsale();
    },
    async handleGetListHotsale() {
      try {
        const { status_code, data } = await getListHotSale();

        if (status_code === 200) {
          this.items = data;
        } else {
          this.items = [];
        }

      } catch (err) {
        this.items = [];

        console.log(err);
      }
    }
  },
}
</script>