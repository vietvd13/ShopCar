<template>
  <div class="customer-support-page">
    <div class="customer-support-page__filter">
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="6" lg="5" xl="4">
          <label for="input-search">{{ $t('DASHBOARD.HAPPY_MOMENT.SEARCH') }}</label>
          <b-form-input
            id="input-search"
            v-model="searchTable"
            @keyup.enter="handleSearch"
          />
        </b-col>
      </b-row>
    </div>

    <div class="customer-support-page__content">
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
        <template #cell(no)="no">
          {{ calNo(no) }}
        </template>

        <template #cell(is_process)="is_process">
          <template v-if="is_process.item.is_process === CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_IN_PROGRESS">
            <b-badge variant="warning">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.IN_PROGRESS') }}</b-badge>
          </template>

          <template v-if="is_process.item.is_process === CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_DONE">
            <b-badge variant="success">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.DONE') }}</b-badge>
          </template>
        </template>

        <template #cell(action)="action">
          <b-button
            variant="warning"
            @click="handleDetailCustomerSupport(action.item)"
          >
            {{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.DETAIL') }}
          </b-button>
        </template>

        <template #empty>
          <div class="text-center">
            {{ $t('APP.TABLE_NO_DATA') }}
          </div>
        </template>
      </b-table>
    </div>

    <div class="customer-support-page__pagination">
      <b-row>
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

    <b-modal
      v-model="isModal.show"
      :title="$t('ROUTER.CUSTOMER_SUPPORT')"
      body-class="modal-body-customer-support"
      footer-class="modal-footer-customer-support"
    >
      <div class="item-form">
        <p class="label-form">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.NAME') }}:</p>
        <p>{{ isModal.name }}</p>
      </div>

      <div class="item-form">
        <p class="label-form">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.PHONE') }}:</p>
        <p>{{ isModal.phone }}</p>
      </div>

      <div class="item-form">
        <p class="label-form">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.STATUS') }}</p>
        <template v-if="isModal.status === CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_IN_PROGRESS">
          <b-badge variant="warning">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.IN_PROGRESS') }}</b-badge>
        </template>

        <template v-if="isModal.status === CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_DONE">
          <b-badge variant="success">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.DONE') }}</b-badge>
        </template>
      </div>

      <div class="item-form">
        <p class="label-form">{{ $t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.QUESTION') }}:</p>
        <p>{{ isModal.content }}</p>
      </div>

      <template #modal-footer>
        <b-row align-v="baseline">
          <b-col cols="6" class="text-center">
            <b-button 
              class="btn-default btn-cancel"
              @click="onClickCloseModal"
            >
              {{ $t('APP.CANCEL') }}
            </b-button>
          </b-col>

          <b-col cols="6" class="text-center">
            <b-button 
              class="btn-default btn-app"
              @click="onClickSaveModal(CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_DONE)"
              v-if="isModal.status === CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_IN_PROGRESS"
            >
              {{ $t('APP.UPDATE_STATUS_DONE') }}
            </b-button>

            <b-button 
              class="btn-default btn-app"
              @click="onClickSaveModal(CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_IN_PROGRESS)"
              v-if="isModal.status === CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_DONE"
            >
              {{ $t('APP.UPDATE_STATUS_IN_PROGRESS') }}
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { 
  getListCustomerSupport,
  postEditCustomerSupport 
} from '@/api/modules/Dashboard';
import CONSTANTS from '@/constants';
import Toast from '@/toast';

export default {
  name: 'CustomerSupport',
  computed: {
    headerTable() {
      return [
        { key: 'no', label: this.$t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.NO'), thClass: 'text-center', tdClass: 'text-center' },
        { key: 'name', label: this.$t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.NAME'), sortable: true, thClass: 'text-center', tdClass: 'text-center' },
        { key: 'phone', label: this.$t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.PHONE'), sortable: true,thClass: 'text-center', tdClass: 'text-center' },
        { key: 'content', label: this.$t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.QUESTION'), sortable: true, thClass: 'text-center', tdClass: 'text-center' },
        { key: 'is_process', label: this.$t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.STATUS'), sortable: true, thClass: 'text-center', tdClass: 'text-center' },
        { key: 'action', label: this.$t('DASHBOARD.CUSTOMER_SUPPORT.TABLE.ACTION'), thClass: 'text-center', tdClass: 'text-center' },
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
    isCurrentPage() {
      this.handleGetListCustomerSupport();
    },
  },
  data() {
    return {
      CONSTANTS,
      searchTable: '',
      isSort: {
        field: '',
        type: '',
      },
      items: [],
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
      },
      isModal: {
        show: false,

        id: null,
        name: '',
        phone: '',
        status: '',
        content: '',
      }
    }
  },
  created () {
    this.initData();
  },
  methods: {
    async initData() {
      await this.handleGetListCustomerSupport();
    },
    async handleGetListCustomerSupport(isReset = false) {
      try {
        setLoading(true);

        const BODY = {
          limit: isReset ? 10 : this.pagination.per_page,
          page: isReset? 1 : this.pagination.current_page,
          search: this.searchTable,
          sort: {

          },
        }

        if (this.isSort.field) {
          BODY.sort = {
            [this.isSort.field]: this.isSort.type
          }
        }

        const { status_code, data, pagination } = await getListCustomerSupport(BODY);

        if (status_code === 200) {
          this.items = data;
          this.pagination.current_page = pagination.current_page;
          this.pagination.per_page = pagination.per_page;
          this.pagination.total = pagination.total;
        } else {
          this.items = [];
        }

        setLoading(false);
      } catch (err) {
        this.items = [];
        setLoading(false);
        console.log(err);
      }
    },
    async handleSearch() {
      await this.handleGetListCustomerSupport(true);
    },
    async onChangePerPage() {
      await this.handleGetListCustomerSupport();
    },
    async handleSort(ctx) {
      this.isSort.field = ctx.sortBy;
      this.isSort.type = ctx.sortDesc === false ? 1 : -1;

      await this.handleGetListCustomerSupport();
    },
    handleDetailCustomerSupport(item) {
      this.isModal.id = item._id;
      this.isModal.name = item.name;
      this.isModal.phone = item.phone;
      this.isModal.status = item.is_process;
      this.isModal.content = item.content;

      this.isModal.show = true;
    },
    onClickCloseModal() {
      this.isModal = {
        show: false,

        id: null,
        name: '',
        phone: '',
        status: '',
        content: ''
      }
    },
    async onClickSaveModal(status) {
      const LIST_STATUS = [
        CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_DONE, 
        CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_IN_PROGRESS
      ];

      if (!LIST_STATUS.includes(status)) {
        status = CONSTANTS.VALUE.CUSTOMER_SUPPORT_STATUS_IN_PROGRESS
      }

      try {
        setLoading(true);

        const BODY = {
          support_id: this.isModal.id,
          is_process: status,
        }

        const { status_code } = await postEditCustomerSupport(BODY);

        if (status_code === 200) {
          Toast.success(this.$t('TOAST_MESSAGE.EDIT_CUSTOMER_SUPPORT_SUCCESS'));
        } else {
          Toast.warning(this.$t('TOAST_MESSAGE.EDIT_CUSTOMER_SUPPORT_ERROR'));
        }

        this.onClickCloseModal();

        await this.handleGetListCustomerSupport();

        setLoading(false);
      } catch (err) {
        this.onClickCloseModal();
        setLoading(false);
        Toast.warning(this.$t('TOAST_MESSAGE.EDIT_CUSTOMER_SUPPORT_ERROR'));
        console.log(err);
      }
    },
    calNo(item) {
      return ((this.pagination.current_page - 1) * this.pagination.per_page) + (item.index + 1);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.customer-support-page {
  &__filter,
  &__content {
    margin-bottom: 10px;
  }

  &__content {
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

            background-color: $mine-shaft;
            color: $white;
          }
        }
      }

      tbody {
        tr {
          td {
            // min-width: 100px;

            text-align: center;
            vertical-align: middle;
            background-color: $white;
          }
        }
      }
    }
  }
}

::v-deep .modal-body-customer-support {
  .item-form {
    margin-bottom: 10px;

    .label-form {
      font-weight: bold;
    }
  }
}

::v-deep .modal-footer-customer-support {
    justify-content: center;

    button {
      min-width: 150px;
    }
}
</style>