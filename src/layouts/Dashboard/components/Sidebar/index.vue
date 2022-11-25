<template>
	<div id="sidebar-wrapper">
		<MenuSidebar class="sidebar-menu" :routes="routes" />
	</div>
</template>

<script>
import CONSTANTS from '@/constants';
import { asyncRoutes } from '@/routers';
import MenuSidebar from './MenuSidebar.vue';

export default {
	name: 'SidebarDashboard',
	components: {
		MenuSidebar,
	},
	data() {
		return {
			asyncRoutes,
			routes: [],
			CONSTANTS
		}
	},
	created() {
		const DASHBORAD = this.asyncRoutes.find((route) => route.name === 'Dashboard');

		if (DASHBORAD) {
			this.routes = (DASHBORAD.children).filter((route) => route.hidden !== true);
		} else {
			this.routes.length = 0;
		}
	},
	computed: {
		fullname() {
			return this.$store.getters.profile.name || ''; 
		}
	},
};
</script>

<style lang="scss" scoped>
	@import '@/scss/variables';
	@import '@/scss/layout';
</style>