<template>
  <div class="dashboard-breadcrumb">
    <span class="text-dashboard-breadcrumb">
      <slot> Breadcrumb </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "DashboardBreadcrumb",
};
</script>

<style lang="scss" scoped>
.dashboard-breadcrumb {
  margin-bottom: 10px;
  .text-dashboard-breadcrumb {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
