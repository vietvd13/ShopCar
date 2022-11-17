<template>
  <div class="policy-page">
    <div class="collaborators-page__filter">
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="6" lg="5" xl="4">
          <label for="input-search">{{ $t('DASHBOARD.HAPPY_MOMENT.SEARCH') }}</label>
          <b-form-input id="input-search" v-model="search" />
        </b-col>
      </b-row>
    </div>

    <div class="policy-page__header">
      <b-row>
        <b-col class="text-right">
          <b-button variant="primary" class="btn-default" @click="onClickCreate">
            {{ $t('APP.BUTTON_ADD') }}
          </b-button>
        </b-col>
      </b-row>
    </div>
    <div class="policy-page__content">
      <b-table :items="items" :fields="headerTable" class="table-policy" bordered show-empty no-local-sorting
        no-sort-reset no-border-collapse>

        <template #cell(actions)="actions">
          <div class="item-action">
            <b-button variant="warning" class="btn-default" @click="onClickEdit(actions.item._id)">
              {{ $t('DASHBOARD.HAPPY_MOMENT.TABLE.BTN_EDIT') }}
            </b-button>
          </div>

          <div class="item-action">
            <b-button variant="danger" class="btn-default" @click="onClickDelete(actions.item._id)">
              {{ $t('DASHBOARD.HAPPY_MOMENT.TABLE.BTN_DELETE') }}
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

    <div class="collaborators-page__pagination">
      <b-row>
        <b-col>
          <b-form-select v-model="pagination.per_page" size="sm" @change="onChangePerPage" class="select-per-page">
            <b-form-select-option v-for="(option, idx) in optionsPerpage" :key="idx" :value="option.value">
              {{ $t(option.text) }}
            </b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col>
          <b-pagination v-model="pagination.current_page" :total-rows="pagination.total" :per-page="pagination.per_page"
            align="right" pills size="sm" />
        </b-col>
      </b-row>
    </div>

    <b-modal v-model="isModal.show" no-close-on-backdrop no-close-on-esc hide-header-close static scrollable
      body-class="modal-body-policy" footer-class="modal-footer-policy"
      :title="$t('DASHBOARD.HAPPY_MOMENT.MODAL.TITLE')">
      <div class="form-input">
        <div class="item-input">
          <label for="input-title">
            {{ $t('DASHBOARD.HAPPY_MOMENT.MODAL.LABEL_TITLE') }}
          </label>
          <b-form-input id="input-title" v-model="isModal.title" />
        </div>

        <div class="item-input">
          <label for="input-content">
            {{ $t('DASHBOARD.HAPPY_MOMENT.MODAL.LABEL_CONTENT') }}
          </label>
          <b-form-textarea id="input-content" v-model="isModal.content" rows="3" max-rows="6" />
        </div>
      </div>

      <template #modal-footer>
        <b-row align-v="baseline">
          <b-col cols="6" class="text-center">
            <b-button class="btn-default btn-cancel" @click="onClickCloseModal">
              {{ $t('APP.CANCEL') }}
            </b-button>
          </b-col>

          <b-col cols="6" class="text-center">
            <b-button class="btn-default btn-app" @click="onClickSaveModal">
              {{ $t('APP.SAVE') }}
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "PolicyManagement",
  data() {
    return {
      selectRow: [],
      search: '',
      isSort: {
        field: '',
        type: '',
      },
      items: [{
        title: "Chính sách một",
        content: "Chính sách một",
        file: "Chính sách m"
      }],
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
      },

      isModal: {
        show: false,
        typeModal: null,
        id: null,
        title: '',
        content: '',
        images: [],
        primary_image: '',
      }
    }
  },
  computed: {
    headerTable() {
      return [
        { key: 'title', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.TITLE'), thClass: 'text-center', tdClass: 'text-center' },
        { key: 'content', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.CONTENT'), thClass: 'text-center', tdClass: 'text-center' },
        { key: 'file', label: "Tệp đính kèm", thClass: 'text-center', tdClass: 'text-center' },
        { key: 'actions', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.ACTIONS'), thClass: 'text-center', tdClass: 'text-center' },
      ];
    }
  },
  methods: {
    onClickCreate() {
      this.isModal.show = true;
      this.isModal.typeModal = 'create';
      this.isModal.title = '';
      this.isModal.content = '';
      this.isModal.images = [];
      this.isModal.primary_image = '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.policy-page {

  &__header,
  &__content {
    margin-bottom: 10px;
  }

  &__header {
    button+button {
      margin-left: 10px;
    }
  }

  &__content {
    height: calc(100vh - 290px);
    overflow: auto;

    ::v-deep table.table-policy {
      thead {
        tr {
          position: sticky;
          top: 0;
          z-index: 2;

          th {
            text-align: center;
            vertical-align: middle;

            background-color: $main;
            color: $white;
          }
        }
      }

      tbody {
        tr {
          td {
            min-width: 130px;

            text-align: center;
            vertical-align: middle;
            background-color: $white;

            .item-action {
              margin: 10px 0;
            }

            .primary-image {
              height: 150px;
            }
          }
        }
      }
    }
  }
}

::v-deep {
  .modal-body-policy {
    .form-input {
      .item-input {
        margin-bottom: 10px;
      }
    }
  }

  .modal-footer-policy {
    justify-content: center;
  }
}
</style>