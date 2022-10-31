<template>
  <div class="top-new-car-home">
    <TitleContent>{{ $t('SHOP_CAR.HOME.NEW_CAR.TITLE') }}</TitleContent>
    <CardSlider :items="items" />
  </div>
</template>

<script>
import TitleContent from './TitleContent.vue';
import CardSlider from './CardSlider.vue';

export default {
  name: 'TopNewCar',
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