<template>
  <div class="dashboard">
    <div class="dashboard__navbar">
      <Navbar />
    </div>
    <div class="dashboard__app-main">
      <AppMain />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'LayoutDashboard',
  components: {
    Navbar,
    AppMain,
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: 100vh;
}
</style>