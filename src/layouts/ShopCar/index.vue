<template>
  <div class="app-shop" :style="handleOverflow">
    <b-container>
      <!-- Banner -->
      <Banner />

      <!-- Navbar -->
      <Search />

      <!-- App View -->
      <AppMain />

      <!-- Happy Moment -->
      <div 
        class="app-shope__happy-moment"
        v-if="showHappyMoment"
      >
        <CustomerFeedback :items="listFeedback" />
      </div>

      <!-- Collaborators -->
      <div 
        class="app-shop__collaborators"
        v-if="showCollaborators"
      >
        <ListCollaborators  :items="listCollaborators" />
      </div>

      <!-- Contact Support -->
      <div class="app-shop__contact-support">
        <ContactSupport />
      </div>

      <!-- Footer -->
      <FooterHome />
    </b-container>
  </div>
</template>

<script>
import { 
  getListCollaborators,
  getListHappyMoment
} from '@/api/modules/Home';

import Banner from '@/views/ShopCar/components/Banner.vue';
import Search from '@/views/ShopCar/components/Search.vue';
import AppMain from './components/AppMain.vue';
import CustomerFeedback from '@/views/ShopCar/components/CustomerFeedback.vue';
import ListCollaborators from '@/views/ShopCar/components/ListCollaborators.vue';
import ContactSupport from '@/views/ShopCar/components/ContactSupport.vue'
import FooterHome from '@/views/ShopCar/components/FooterHome.vue';

export default {
  name: 'LayoutShopCar',
  components: {
    Banner,
    Search,
    AppMain,
    CustomerFeedback,
    ListCollaborators,
    ContactSupport,
    FooterHome,
  },
  data() {
    return {
      listFeedback: [],
      listCollaborators: [],
      showHappyMoment: false,
      showCollaborators: false,
    }
  },
  computed: {
    handleOverflow() {
      return `overflow: ${this.$store.getters.loading.show ? 'hidden' : 'auto' } !important;`;
    },
		pathURL() {
			return this.$route.fullPath;
		},
  },
  watch: {
    pathURL() {
      this.handleHiddenContent();
    }
  },
  created() {
    this.handleInit();
  },
  methods: {
    async handleInit() {
      this.handleHiddenContent();
      this.handleGetAllCollaborators();
      this.handleGetListHappyMoment();
    },
    async handleGetAllCollaborators() {
      try {
        const BODY = {
          limit: 8,
          page: 1,
        };

        const { status_code, data } = await getListCollaborators(BODY);

        if (status_code === 200) {
          this.listCollaborators = data;
        } else {
          this.listCollaborators = [];
        }
      } catch (err) {
        this.listCollaborators = [];
        console.log(err);
      }
    },
    async handleGetListHappyMoment() {
      try {
        const { status_code, data } = await getListHappyMoment();

        if (status_code === 200) {
          this.listFeedback = data;
        } else {
          this.listFeedback = [];
        }
      } catch (err) {
        this.listFeedback = [];
        console.log(err);
      }
    },
    handleHiddenContent() {
      const ROUTER_NAME = this.$router.currentRoute.name;

      this.showHappyMoment = !(['AllHappyMoment', 'DetailHappyMoment'].includes(ROUTER_NAME));
      this.showCollaborators = (ROUTER_NAME !== 'AllCollaborators');
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.app-shop {
  height: 100vh;
  background-color: $seashell;

  &__happy-moment,
  &__collaborators,
  &__contact-support {
    margin-bottom: 10px;
  }
}
</style>