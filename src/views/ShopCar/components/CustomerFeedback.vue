<template>
  <div class="customer-feedback-home">
    <TitleContent>{{ $t('SHOP_CAR.HOME.CUSTOMER_FEEDBACK.TITLE') }}</TitleContent>

    <div class="customer-feedbac-home__list">
      <b-row>
        <b-col 
          cols="6" xs="6" sm="6" md="6" lg="3" xl="3" 
          v-for="(feedback, idx) in items" 
          :key="idx"
        >
          <CardFeedBack 
            :image="feedback.image"
            :feedback="feedback.feedback"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import TitleContent from './TitleContent.vue';
import CardFeedBack from './CardFeedback.vue';

export default {
  name: 'CustomerFeedbackHome',
  components: {
    TitleContent,
    CardFeedBack
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>