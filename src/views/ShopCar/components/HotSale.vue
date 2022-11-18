<template>
  <div class="hot-sale-home">
    <TitleContent>{{ $t('SHOP_CAR.HOME.HOT_SALE.TITLE') }}</TitleContent>

    <template v-if="['xl'].includes(typeScreen)">
      <CardSlider :items="handleDataSliderAndList(items, 'slider')" />
    </template>

    <template v-else>
      <ListCardCar :items="handleDataSliderAndList(items, 'list')" />
    </template>
  </div>
</template>

<script>
import TitleContent from './TitleContent.vue';
import CardSlider from './CardSlider.vue';
import ListCardCar from './ListCardCar.vue';

import { handleDataSliderAndList } from '@/utils/handleDataSliderAndList';
import { getListHotSale } from '@/api/modules/Home';

export default {
  name: 'HotSaleHome',
  components: {
    TitleContent,
    CardSlider,
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