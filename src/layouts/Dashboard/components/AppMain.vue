<template>
  <b-col>
    <div class="app-view-title">
      <BreadcrumbDashboard>{{ $t(title) }}</BreadcrumbDashboard>
    </div>
    <div class="app-view-main">
      <router-view :key="key" />
    </div>
  </b-col>
</template>

<script>
import BreadcrumbDashboard from "./Breadcrumb.vue";

export default {
  name: "AppMainDashboard",
  components: {
    BreadcrumbDashboard,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
    title() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-view-title,
.app-view-main {
  margin-bottom: 10px;
}
</style>
