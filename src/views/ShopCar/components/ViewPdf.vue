<template>
  <div id="tab-car-performance">
    <MenuDetailCar :tab-active="'tab-car-performance'" />
    <b-card>
      <p class="title-content">
        {{ $t("SHOP_CAR.DETAIL_CAR.TITLE_PERFORMANCE_CHECK") }}
      </p>

      <template v-if="linkFile">
        <ViewPdfApp
          :file="`${domainPDF}${linkFile}`"
          :class-name="'view-pdf'"
        />
      </template>
      <template v-else>
        <div class="text-center">
          {{ $t("APP.NO_DATA") }}
        </div>
      </template>
    </b-card>
  </div>
</template>

<script>
import ViewPdfApp from "@/components/ViewPDF.vue";
import MenuDetailCar from "@/components/MenuDetailCar.vue";

export default {
  name: "ViewPDF",
  components: {
    ViewPdfApp,
    MenuDetailCar,
  },
  props: {
    linkFile: {
      type: String,
      default: "",
    },
  },
  computed: {
    domainPDF() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.title-content {
  font-size: 22px;
  font-weight: 600;
}

.view-pdf-car-performance {
  width: 100%;
  height: 500px;
}

.view-pdf {
  width: 100%;
  height: 700px;
}
</style>
