<template>
  <router-view :key="key" />
</template>

<script>
export default {
  name: 'AppMainDashboard',
	computed: {
		key() {
			return this.$route.fullPath;
		},
	},
}
</script>
