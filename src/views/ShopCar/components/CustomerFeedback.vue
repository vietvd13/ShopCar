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
            :image="`${feedback.primary_image}`"
            :feedback="feedback.content"
          />
        </b-col>
      </b-row>
    </div>

    <div class="show-more text-right" @click="goToViewAll()">
      {{ $t('APP.TEXT_VIEW_MORE') }}
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
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    }
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
  },
  methods: {
        goToViewAll() {
            const ROUTER_NAME = this.$router.currentRoute.name;

            if (ROUTER_NAME !== 'AllHappyMoment') {
                this.$router.push({ name: 'AllHappyMoment' });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.customer-feedback-home {
  .show-more {
    margin-bottom: 5px;
    color: $main;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>