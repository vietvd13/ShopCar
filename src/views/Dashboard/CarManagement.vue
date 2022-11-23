<template>
  <div class="car-management-page">
    <div class="car-management-page__control">
      <b-row>
        <b-col class="text-right">
          <b-button class="btn-app btn-add-new">
            {{ $t('DASHBOARD.CAR.BUTTON_ADD_NEW') }}
          </b-button>

          <b-button class="btn-app btn-actions">
            {{ $t('DASHBOARD.CAR.BUTTON_ACTIONS') }}
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-card>
      <div class="car-management-page__table">
        <b-table
          :items="items"
          :fields="headerTable"
          bordered
          show-empty
          no-local-sorting
          no-sort-reset
          no-border-collapse
          @sort-changed="handleSort"
        >
          <template #cell(delete_multiple)="delete_multiple">
            <b-form-checkbox
              :value="delete_multiple.item._id"
              :unchecked-value="delete_multiple.item._id"
              @change="onSelectDelete"
            />
          </template>

          <template #cell(created_at)="created_at">
            <span>{{ calNo(created_at) }}</span>
          </template>

          <template #cell(primary_image)="primary_image">
            <b-img-lazy
              thumbnail
              fluid
              :src="`${domainImage}${primary_image.item.primary_image}`"
              :blank-src="require('@/assets/images/noimage.webp')"
              :alt="items.car_name"
              class="avatar-collaborators"
            />
          </template>

          <template #cell(is_hotsale)="is_hotsale">
            <b-badge v-if="is_hotsale.item.is_hotsale === false" variant="secondary">
              {{ $t('DASHBOARD.CAR.TABLE_TEXT_NO_HOT_SALE') }}
            </b-badge>
            <b-badge v-if="is_hotsale.item.is_hotsale === true" variant="success">
              {{ $t('DASHBOARD.CAR.TABLE_TEXT_HOT_SALE') }}
            </b-badge>
          </template>

          <template #cell(actions)="actions">
            <div class="item-action">
              <b-button 
                variant="warning"
                class="btn-default"
                @click="onClickEdit(actions.item._id)"
              >
                {{ $t('DASHBOARD.CAR.TABLE_TEXT_EDIT') }}
              </b-button>
            </div>

            <div class="item-action">
              <b-button 
                variant="danger"
                class="btn-default"
                @click="onClickDelete(actions.item._id)"
              >
                {{ $t('DASHBOARD.CAR.TABLE_TEXT_DELETE') }}
              </b-button>
            </div>
          </template>

          <template #empty>
            <div class="text-center">
              {{ $t('APP.TABLE_NO_DATA') }}
            </div>
          </template>
        </b-table>
      </div>
    </b-card>

    <div class="car-management-page__pagination">
      <b-row align-h="center">
        <b-col>
          <b-form-select 
            v-model="pagination.per_page" 
            size="sm"
            @change="onChangePerPage"
            class="select-per-page"
          >
            <b-form-select-option
              v-for="(option, idx) in optionsPerpage"
              :key="idx"
              :value="option.value"
            >
              {{ $t(option.text) }}
            </b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col>
          <b-pagination
            v-model="pagination.current_page"
            :total-rows="pagination.total"
            :per-page="pagination.per_page"
            align="right"
            pills
            size="sm"
          />
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { postListCar } from '@/api/modules/Dashboard';

export default {
  name: 'CarManagement',
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
    headerTable() {
      return [
        { key: 'delete_multiple', label: '', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'created_at', label: this.$t('DASHBOARD.CAR.TABLE_NO'), sortable: true, thClass: 'text-center td-no', tdClass: 'text-center base-td' },
        { key: 'primary_image', label: this.$t('DASHBOARD.CAR.TABLE_IMAGE'), thClass: 'text-center th-image', tdClass: 'text-center base-td' },
        { key: 'car_name', label: this.$t('DASHBOARD.CAR.TABLE_CAR_NAME'), sortable: true, thClass: 'text-center th-car-name', tdClass: 'text-center base-td' },
        { key: 'category', label: this.$t('DASHBOARD.CAR.TABLE_CAR_BRAND'), sortable: true, thClass: 'text-center th-car-brand', tdClass: 'text-center base-td' },
        { key: 'is_hotsale', label: this.$t('DASHBOARD.CAR.TABLE_HOT_SALE'), sortable: true, thClass: 'text-center th-hot-sale', tdClass: 'text-center base-td' },
        { key: 'actions', label: this.$t('DASHBOARD.CAR.TABLE_ACTIONS'), thClass: 'text-center th-actions', tdClass: 'text-center base-td' },
      ]
    },
    optionsPerpage() {
      return [
        {
          value: 10,
          text: 'APP.TEXT_PER_PAGE_10'
        },
        {
          value: 20,
          text: 'APP.TEXT_PER_PAGE_20'
        },
        {
          value: 40,
          text: 'APP.TEXT_PER_PAGE_40'
        },
        {
          value: 80,
          text: 'APP.TEXT_PER_PAGE_80'
        },
        {
          value: 100,
          text: 'APP.TEXT_PER_PAGE_100'
        },
      ]
    },
    isCurrentPage() {
      return this.pagination.current_page; 
    },
  },
  watch: {
    async isCurrentPage() {
      setLoading(true);

      await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);

      setLoading(false);
    }
  },
  data() {
    return {
      items: [],
      selectRow: [],
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
      },
      isSort: {
        field: '',
        type: '',
      },
    }
  },
  created () {
    this.initData();
  },
  methods: {
    async initData() {
      setLoading(true);
      await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
      setLoading(false);
    },
    async handleGetListCar(page, limit) {
      try {
        const BODY = {
          page: page,
          limit: limit,
        }

        if (this.isSort.field) {
          BODY.sort = {
            [this.isSort.field]: this.isSort.type,
          }
        }

        const { status_code, data, pagination } = await postListCar(BODY);

        if (status_code === 200) {
          this.items = data;
          this.pagination.current_page = pagination.current_page;
          this.pagination.per_page = pagination.per_page;
          this.pagination.total = pagination.total;
        } else {
          this.items = [];
          this.pagination.current_page = 1;
          this.pagination.per_page = 10;
          this.pagination.total = 0;
        }
      } catch (err) {
        this.items = [];
        this.pagination.current_page = 1;
        this.pagination.per_page = 10;
        this.pagination.total = 0;
        console.log(err);
      }
    },
    onSelectDelete(id) {
      if (this.selectRow.includes(id)) {
        const idx = this.selectRow.findIndex((row) => row === id);

        if (idx >= 0) {
          this.selectRow.splice(idx, 1);
        }
      } else {
        this.selectRow.push(id);
      }
    },
    onClickEdit(id) {
      console.log(id);
    },
    onClickDelete(id) {
      console.log(id);
    },
    async onChangePerPage() {
      await this.handleGetListCar(1, this.pagination.per_page);
    },
    async handleSort(ctx) {
      this.isSort.field = ctx.sortBy;
      this.isSort.type = ctx.sortDesc === false ? 1 : -1;

      setLoading(true);
      await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
      setLoading(false);
    },
    calNo(item) {
      return ((this.pagination.current_page - 1) * this.pagination.per_page) + (item.index + 1);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.car-management-page {
  &__control {
    margin-bottom: 10px;
  }

  &__pagination {
    margin-top: 10px;
  }

  &__control {
    .btn-add-new {
      margin-right: 10px;
    }
  }

  &__table {
    height: calc(100vh - 250px);
    overflow: auto;
    
    ::v-deep table {
      thead {
        tr {
          position: sticky;
          top: 0;
          z-index: 2;

          th {
            text-align: center;
            vertical-align: middle;

            background-color: $international-orange;
            color: $white;
          }
        }
      }

      tbody {
        tr {
          td {
            min-width: 100px;

            text-align: center;
            vertical-align: middle;
            background-color: $white;

            .item-contact {
              margin: 10px 0;

              a {
                font-weight: bold;
              }
            }

            .item-action {
              margin: 10px 0;
            }

            .avatar-collaborators {
              width: 4cm;
            }
          }
        }
      }
    }
  }
}
</style>