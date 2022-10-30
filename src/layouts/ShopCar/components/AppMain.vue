<template>
  <router-view :key="key" />
</template>

<script>
export default {
  name: 'AppMainShopCar',
	computed: {
		key() {
			return this.$route.fullPath;
		},
	},
}
</script>
