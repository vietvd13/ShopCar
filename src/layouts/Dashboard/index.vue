<template>
  <div class="dashboard">
    <div class="dashboard__navbar">
      <Navbar />
    </div>
    <div class="dashboard__app-main">
      <BreadcrumbDashboard>{{ $t(title) }}</BreadcrumbDashboard>
      <AppMain />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BreadcrumbDashboard from './components/Breadcrumb.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'LayoutDashboard',
  components: {
    Navbar,
    BreadcrumbDashboard,
    AppMain,
  },
  computed: {
    title() {
      return this.$route.meta.title; 
    }
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: calc(100vh - 60px);

  &__app-main {
    padding: 10px;

    overflow: hidden;
  }
}
</style>