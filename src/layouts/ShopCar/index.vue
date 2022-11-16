<template>
  <div class="app-shop" :style="handleOverflow">
    <b-container>
      <Banner />
      <AppMain />
      <div class="app-shope__happy-moment">
        <CustomerFeedback :items="listFeedback" />
      </div>
      <div class="app-shop__collaborators">
        <ListCollaborators  :items="listCollaborators" />
      </div>
      <div class="app-shop__contact-support">
        <ContactSupport />
      </div>
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
import AppMain from './components/AppMain.vue';
import CustomerFeedback from '@/views/ShopCar/components/CustomerFeedback.vue';
import ListCollaborators from '@/views/ShopCar/components/ListCollaborators.vue';
import ContactSupport from '@/views/ShopCar/components/ContactSupport.vue'
import FooterHome from '@/views/ShopCar/components/FooterHome.vue';

export default {
  name: 'LayoutShopCar',
  components: {
    Banner,
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
    }
  },
  computed: {
    handleOverflow() {
      return `overflow: ${this.$store.getters.loading.show ? 'hidden' : 'auto' } !important;`;
    }
  },
  created() {
    this.handleInit();
  },
  methods: {
    async handleInit() {
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