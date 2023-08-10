<template>
  <div class="list-collaborators-home" id="tab-collaborators-home">
    <TitleContent>{{ $t("SHOP_CAR.HOME.COLLABORATORS.TITLE") }}</TitleContent>

    <div class="list-collaborators-home__list">
      <b-row>
        <b-col
          cols="6"
          xs="6"
          sm="4"
          md="3"
          lg="2"
          xl="2"
          v-for="(collaborator, idx) in items"
          :key="idx"
        >
          <CardCollaborators
            :avatar="collaborator.image"
            :fullname="collaborator.staff_name"
            :phone="collaborator.sns_phone"
            :kakaotalk="collaborator.sns_kakaotalk"
            :zalo="collaborator.sns_zalo"
            :messager="collaborator.sns_messager"
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
import CardCollaborators from "../components/CardCollaborators.vue";

export default {
  name: "ListCollaboratorsHome",
  components: {
    TitleContent,
    CardCollaborators,
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  methods: {
    goToViewAll() {
      const ROUTER_NAME = this.$router.currentRoute.name;

      if (ROUTER_NAME !== "AllCollaborators") {
        this.$router.push({ name: "AllCollaborators" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.list-collaborators-home {
  .show-more {
    margin-bottom: 5px;
    color: $international-orange;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
