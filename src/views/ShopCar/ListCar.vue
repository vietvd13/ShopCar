<template>
  <div class="list-car">
    <div class="list-car__content">
      <b-container>
        <div class="content-carousel">
          <BannerHome />
          <SearchHome />
        </div>

        <div class="content-categories">
          <CategoriesHome />
        </div>

        <div class="content-sort">
          <SortListCar />
        </div>

        <div class="content-list-car">
          <ListCardCar :items="items" />
        </div>

        <div class="content-pagination">
          <b-pagination
            v-model="pagination.current_page"
            :total-rows="pagination.total"
            :per-page="pagination.per_page"
            align="center"
            pills
            size="sm"
          />
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import SearchHome from './components/Search.vue';
import BannerHome from './components/Banner.vue';
import CategoriesHome from './components/Categories.vue';
import SortListCar from './components/SortListCar.vue';
import ListCardCar from './components/ListCardCar.vue';

import { setLoading } from '../../utils/setLoading';
import { getListCar } from '../../api/modules/Home';

export default {
  name: 'ListCar',
  components: {
    SearchHome,
    BannerHome,
    CategoriesHome,
    SortListCar,
    ListCardCar
  },
  data() {
    return {
      items: [],
      pagination: {
        current_page: 1,
        per_page: 24,
        total: 0,
      },
      sort: {
        sort: '',
        type: null
      }
    }
  },
  computed: {
    isCurrentPage() {
      return this.pagination.current_page; 
    },
    isPerPage() {
      return this.pagination.per_page;
    }
  },
  watch: {
    isCurrentPage() {
      this.handleGetListCar();
    },
    isPerPage() {
      this.handleGetListCar();
    }
  },
  created() {
    this.initBus();
    this.handleGetListCar();
  },
  destroyed () {
    this.removeBus();
  },
  methods: {
    initBus() {
      this.$bus.on('LIST_CAR_SORT_CLICK', async(sort) => {
        this.sort.sort = sort.sort;
        this.sort.type = sort.type;

        await this.handleGetListCar();
      });

      this.$bus.on('LIST_CAR_PER_PAGE_CHANGE', async(per_page) => {
        this.pagination.current_page = 1;
        this.pagination.per_page = per_page;

        await this.handleGetListCar();
      })
    },
    removeBus() {
      this.$bus.off('LIST_CAR_SORT_CLICK');
    },
    async handleGetListCar() {
      try {
        setLoading(true);

        let BODY = {
          page: this.pagination.current_page,
          limit: this.pagination.per_page,
        }

        if (this.sort.sort) {
          BODY.sort = {
            [this.sort.sort]: this.sort.type
          }
        }

        const { status_code, data, pagination } = await getListCar(BODY);

        if (status_code === 200) {
          this.items = data || [];

          this.pagination.current_page = pagination.current_page;
          this.pagination.per_page = pagination.per_page;
          this.pagination.total = pagination.total;
        } else {
          this.items.length = 0;
          this.pagination.current_page = 1;
          this.pagination.per_page = 24;
          this.pagination.total = 0;
        }

        setLoading(false);
      } catch (err) {
        console.log('[ERROR CALL LIST CAR]: ', err);

        this.items.length = 0;
        this.pagination.current_page = 1;
        this.pagination.per_page = 24;
        this.pagination.total = 0;

        setLoading(false);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list-car {
  overflow: hidden;

  &__content {
    margin-bottom: 10px;

    .content-categories,
    .content-customer-feedback {
      margin-bottom: 10px;
    }

    .content-pagination {
      margin-top: 10px;
    }
  }
}
</style>