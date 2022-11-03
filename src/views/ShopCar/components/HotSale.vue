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

import { handleDataSliderAndList } from '../../../utils/handleDataSliderAndList';

export default {
  name: 'HotSaleHome',
  components: {
    TitleContent,
    CardSlider,
    ListCardCar
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
  },
  computed: {
    typeScreen() {
      return this.$store.getters.sizeScreen.type;
    }
  },
  methods: {
    handleDataSliderAndList
  },
}
</script>