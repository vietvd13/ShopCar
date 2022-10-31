<template>
  <div class="hot-sale-home">
    <TitleContent>{{ $t('SHOP_CAR.HOME.HOT_SALE.TITLE') }}</TitleContent>
    <CardSlider :items="items" />
  </div>
</template>

<script>
import TitleContent from './TitleContent.vue';
import CardSlider from './CardSlider.vue';

export default {
  name: 'HotSaleHome',
  components: {
    TitleContent,
    CardSlider,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
  }
}
</script>