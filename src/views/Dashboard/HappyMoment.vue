<template>
  <div class="happy-moment-page">
    <div class="collaborators-page__filter">
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="6" lg="5" xl="4">
          <label for="input-search">{{ $t('DASHBOARD.HAPPY_MOMENT.SEARCH') }}</label>
          <b-form-input
            id="input-search"
            v-model="search"
            @keyup.enter="handleSearch"
          />
        </b-col>
      </b-row>
    </div>

    <div class="happy-moment-page__header">
      <b-row>
        <b-col class="text-right">
          <b-button 
            variant="primary" 
            class="btn-default"
            @click="onClickCreate"
          >
            {{ $t('APP.BUTTON_ADD') }}
          </b-button>
        </b-col>
      </b-row>
    </div>
    <div class="happ-moment-page__content">
      <b-table
        :items="items" 
        :fields="headerTable"
        class="table-happy-moment"
        bordered
        show-empty
        no-local-sorting
        no-sort-reset
        @sort-changed="handleSort"
      >
        <template #cell(primary_image)="primary_image">
          <b-img
            class="primary-image"
            :src="`${domainImage}${primary_image.item.primary_image}`"
          />
        </template>

        <template #cell(actions)="actions">
          <div class="item-action">
            <b-button 
              variant="warning"
              class="btn-default"
              @click="onClickEdit(actions.item._id)"
            >
              {{ $t('DASHBOARD.HAPPY_MOMENT.TABLE.BTN_EDIT') }}
            </b-button>
          </div>

          <div class="item-action">
            <b-button 
              variant="danger"
              class="btn-default"
              @click="onClickDelete(actions.item._id)"
            >
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
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      static
      scrollable
      body-class="modal-body-happy-moment"
      footer-class="modal-footer-happy-moment"
      :title="$t('DASHBOARD.HAPPY_MOMENT.MODAL.TITLE')"
    >
      <div class="form-input">
        <div class="item-input">
          <label for="input-title">
            {{ $t('DASHBOARD.HAPPY_MOMENT.MODAL.LABEL_TITLE') }}
          </label>
          <b-form-input 
            id="input-title"
            v-model="isModal.title"
          />
        </div>

        <div class="item-input">
          <label for="input-images">
            {{ $t('DASHBOARD.HAPPY_MOMENT.MODAL.LABEL_IMAGES') }}
          </label>
          <div id="input-images">
            <ImportListImage
              :ref-name="isModal.refName"
              :items="isModal.images"
              @import="handleImportFile"
              @remove="handleRemoveByIndex"
            />
          </div>
        </div>

        <div class="item-input">
          <label for="input-content">
            {{ $t('DASHBOARD.HAPPY_MOMENT.MODAL.LABEL_CONTENT') }}
          </label>
          <b-form-textarea
            id="input-content"
            v-model="isModal.content"
            rows="3"
            max-rows="6"
          />
        </div>
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
              @click="onClickSaveModal"
            >
              {{ $t('APP.SAVE') }}
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  getListHappyMoment,
  postCreateHappyMoment,
} from '@/api/modules/Dashboard';
import { postImages } from '@/api/modules/Upload';
import ImportListImage from './components/ImportListImage.vue';
import { setLoading } from '@/utils/setLoading';
import Toast from '@/toast';

export default {
  name: 'HappyMoment',
  components: {
    ImportListImage,
  },
  data() {
    return {
      search: '',
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
        typeModal: null,
        refName: 'importListImage',

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
        { key: 'primary_image', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.PRIMARY_IMAGE'), thClass: 'text-center', tdClass: 'text-center' },
        { key: 'title', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.TITLE'), sortable: true, thClass: 'text-center', tdClass: 'text-center' },
        { key: 'content', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.CONTENT'), sortable: true, thClass: 'text-center', tdClass: 'text-center' },
        { key: 'writer', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.WRITER'), sortable: true, thClass: 'text-center', tdClass: 'text-center' },
        { key: 'actions', label: this.$t('DASHBOARD.HAPPY_MOMENT.TABLE.ACTIONS'), thClass: 'text-center', tdClass: 'text-center' },
      ];
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
    isPerPage() {
      return this.pagination.per_page;
    },
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    }
  },
  watch: {
    isCurrentPage() {
      this.handleGetListHappyMoment();
    },
    isPerPage() {
      this.handleGetListHappyMoment();
    }
  },
  created () {
    this.initData();
  },
  methods: {
    async initData() {
      setLoading(true);

      await this.handleGetListHappyMoment();

      setLoading(false);
    },
    async handleGetListHappyMoment(isReset) {
      try {
        setLoading(true);

        const BODY = {
          limit: isReset ? 10 : this.pagination.per_page,
          page: isReset ? 1 : this.pagination.current_page,
          search: this.search,
          sort: {

          }
        };

        if (this.search) {
          BODY.search = this.search;
        }

        if (this.isSort.field) {
          BODY.sort = {
            [this.isSort.field]: this.isSort.type,
          }
        }

        const { status_code, data, pagination } = await getListHappyMoment(BODY);

        if (status_code === 200) {
          this.items = data;
          this.pagination.current_page = pagination.current_page;
          this.pagination.per_page = pagination.per_page;
          this.pagination.total = pagination.total;
        } else {
          this.items.length = 0;
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);

        console.log(err);
      }
    },
    onChangePerPage() {
      this.handleGetListHappyMoment();
    },
    async handleSearch() {
      this.handleGetListHappyMoment(true);
    },
    async handleSort(ctx) {
      this.isSort.field = ctx.sortBy;
      this.isSort.type = ctx.sortDesc === false ? 1 : -1;

      await this.handleGetListHappyMoment();
    },
    handleStatusModal(status = true) {
      if ([true, false].includes(status)) {
        this.isModal.show = status;
      } else {
        this.isModal.show = true;
      }
    },
    handleResetModal() {
      this.isModal = {
        show: false,
        typeModal: null,
        refName: 'importListImage',

        title: '',
        content: '',
        images: [],
        primary_image: '',
      }
    },
    onClickCloseModal() {
      this.handleResetModal();
    },
    async onClickSaveModal() {
      try {
        setLoading(true);

        if (this.isModal.typeModal === 'CREATE') {
          const IMAGES = await this.handleUploadImages(this.isModal.images);

          const BODY = {
            title: this.isModal.title,
            content: this.isModal.content,
            images: IMAGES,
            primary_image: this.handleGetPrimaryImage(IMAGES)
          }

          const { status_code } = await postCreateHappyMoment(BODY);

          if (status_code === 200) {
            Toast.success(this.$t('TOAST_MESSAGE.CREATE_HAPPY_MOMENT_SUCCESS'));
          } else {
            Toast.success(this.$t('TOAST_MESSAGE.CREATE_HAPPY_MOMENT_ERROR'));
          }
        }

        if (this.isModal.typeModal === 'EDIT') {
          const GET_UPDATE_IMAGE = this.handleGetListIdxImport(this.isModal.images);

          console.log(GET_UPDATE_IMAGE);

          console.log('EDIT');
        }

        await this.handleGetListHappyMoment(true);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        console.log(err);
      }

      this.handleResetModal();
    },
    handleGetListIdxImport(images) {
      const len = images.length;
      let idx = 0;

      const result = [];
      const result_idx = [];

      while (idx < len) {
        if ((typeof images[idx]) === 'object') {
          result.push(images[idx]);
          result_idx.push(idx);
        }

        idx++;
      }

      return {
        origin_images: images,
        new_images: result,
        new_idx_images: result_idx
      };
    },
    handleGetPrimaryImage(images) {
      if (Array.isArray(images)) {
        if (images.length > 0) {
          return images[0];
        }
      }

      return null;
    },
    async handleUploadImages(images) {
      try {
        const { status_code, data } = await postImages(images);

        if (status_code === 200) {
          return data;
        }

        return [];
      } catch (err) {
        console.log(err);

        return [];
      }
    },
    onClickCreate() {
      this.isModal.typeModal = 'CREATE';
      this.handleStatusModal(true);
    },
    handleImportFile(file) {
      this.isModal.images.push(file);
    },
    handleRemoveByIndex(idx) {
      if (idx >= 0 && idx < this.isModal.images.length) {
        this.isModal.images.splice(idx, 1);
      }
    },
    onClickEdit(id) {
      console.log(id);
    },
    onClickDelete(id) {
      console.log(id);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.happy-moment-page {
  &__header,
  &__content {
    margin-bottom: 10px;
  }
}

::v-deep {
  .modal-body-happy-moment {
    .form-input {
      .item-input {
        margin-bottom: 10px;
      }
    }
  }

  .modal-footer-happy-moment {
    justify-content: center;
  }
}

::v-deep table.table-happy-moment {
  thead {
    tr {
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
        text-align: center;
        vertical-align: middle;
        background-color: $white;

        .item-action {
          margin: 10px 0;
        }

        .primary-image {
          width: 300px;
        }
      }
    }
  }
}
</style>