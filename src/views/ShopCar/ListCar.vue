<template>
  <div class="list-car">
    <div class="list-car__content">
      <div class="content-filter">
        <FilterListCar
          :total-car="pagination.total"
          :initVisible="true"
          @filter="onClickApplyFilter"    
        />
      </div>

      <div class="content-sort">
        <SortListCar />
      </div>

      <div class="content-list-car">
        <ListCardCar :items="items" />
      </div>

      <div class="content-pagination">
        <b-pagination
          v-if="pagination.total > 0"
          v-model="pagination.current_page"
          :total-rows="pagination.total"
          :per-page="pagination.per_page"
          align="center"
          pills
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterListCar from './components/FilterListCar.vue';
import SortListCar from './components/SortListCar.vue';
import ListCardCar from './components/ListCardCar.vue';

import { setLoading } from '@/utils/setLoading';
import { getListCar } from '@/api/modules/Home';
import { handleSrollTop } from '@/utils/helper';

export default {
  name: 'ListCar',
  components: {
    FilterListCar,
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
      this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
    },
    isPerPage() {
      this.handleGetListCar(1, this.pagination.per_page);
    }
  },
  created() {
    this.initBus();
    this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
  },
  destroyed () {
    this.removeBus();
  },
  methods: {
    initBus() {
      this.$bus.on('LIST_CAR_SORT_CLICK', async(sort) => {
        this.sort.sort = sort.sort;
        this.sort.type = sort.type;

        await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
      });

      this.$bus.on('LIST_CAR_PER_PAGE_CHANGE', async(per_page) => {
        this.pagination.current_page = 1;
        this.pagination.per_page = per_page;

        await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
      })
    },
    removeBus() {
      this.$bus.off('LIST_CAR_SORT_CLICK');
    },
    async onClickApplyFilter() {
      await this.handleGetListCar(1, this.pagination.per_page);
    },
    async handleGetListCar(page, per_page) {
      try {
        setLoading(true);
        handleSrollTop();

        let BODY = {
          page: page,
          limit: per_page,
          filter: {

          },
          search: ''
        }

        if (this.sort.sort) {
          BODY.sort = {
            [this.sort.sort]: this.sort.type
          }
        }

        const FILTER = this.$store.getters.isFilter;

        if (FILTER.search) {
          BODY.search = FILTER.search;
        }

        if (FILTER.categories) {
          BODY.filter.category_name = FILTER.categories.category_name;

          if (FILTER.models) {
            BODY.filter.model_name = FILTER.models.model_name;

            if (FILTER.car_details) {
              BODY.filter.car_details = FILTER.car_details.detail_name;

              if (FILTER.rating) {
                BODY.filter.rating = FILTER.rating;
              }
            }
          }
        }

        if (FILTER.from_year || FILTER.to_year) {
          BODY.filter.from_year = FILTER.from_year;
          BODY.filter.to_year = FILTER.to_year;
        }

        if (FILTER.from_price || FILTER.to_price) {
          BODY.filter.from_price = FILTER.from_price;
          BODY.filter.to_price = FILTER.to_price;
        }

        if (FILTER.from_distance || FILTER.to_distance) {
          BODY.filter.from_distance = FILTER.from_distance;
          BODY.filter.to_distance = FILTER.to_distance;
        }

        if (FILTER.fuel_type) {
          BODY.filter.fuel_type = FILTER.fuel_type;
        }

        if (FILTER.gear_box) {
          BODY.filter.gear_box = FILTER.gear_box;
        }

        if (FILTER.color) {
          BODY.filter.color = FILTER.color;
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

    .content-filter,
    .content-sort,
    .content-customer-feedback {
      margin-bottom: 10px;
    }

    .content-pagination {
      margin-top: 10px;
    }
  }
}
</style>