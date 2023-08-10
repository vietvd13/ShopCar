<template>
  <div class="customer-feedback-home">
    <TitleContent>{{
      $t("SHOP_CAR.HOME.CUSTOMER_FEEDBACK.TITLE")
    }}</TitleContent>

    <div class="customer-feedbac-home__list">
      <b-row>
        <b-col
          cols="6"
          xs="6"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="feedback in items"
          :key="feedback._id"
        >
          <CardFeedBack
            :id="feedback._id"
            :image="feedback.primary_image"
            :writer="feedback.writer"
            :feedback="feedback.content"
          />
        </b-col>
      </b-row>
    </div>

    <div class="show-more text-right" @click="goToViewAll()">
      {{ $t("APP.TEXT_VIEW_MORE") }}
    </div>
  </div>
</template>

<script>
import TitleContent from "./TitleContent.vue";
import CardFeedBack from "./CardFeedback.vue";

export default {
  name: "CustomerFeedbackHome",
  components: {
    TitleContent,
    CardFeedBack,
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    goToViewAll() {
      const ROUTER_NAME = this.$router.currentRoute.name;

      if (ROUTER_NAME !== "AllHappyMoment") {
        this.$router.push({ name: "AllHappyMoment" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.customer-feedback-home {
  .show-more {
    margin-bottom: 5px;
    color: $international-orange;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
