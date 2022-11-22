<template>
  <div class="collaborators-page">
    <div class="collaborators-page__filter">
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="6" lg="5" xl="4">
          <label for="input-search">{{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.SEARCH') }}</label>
          <b-form-input
            id="input-search"
            v-model="searchTable"
            @keyup.enter="handleSearch"
          />
        </b-col>
      </b-row>
    </div>

    <div class="collaborators-page__header">
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-right">
          <b-button 
            variant="primary" 
            class="btn-default"
            @click="onClickCreate"
          >
            {{ $t('APP.BUTTON_ADD') }}
          </b-button>
          <b-button 
            variant="danger" 
            class="btn-default"
            @click="onClickDeleteMultiple"
          >
            {{ $t('APP.BUTTON_DELETE_MANY') }}
          </b-button>
        </b-col>
      </b-row>
    </div>

    <div class="collaborators-page__body">
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

        <template #cell(no)="no">
          <span>{{ calNo(no) }}</span>
        </template>

        <template #cell(image)="image">
          <b-img 
            thumbnail 
            fluid 
            :src="`${domainImage}${image.item.image}`"
            class="avatar-collaborators"
          />
        </template>

        <template #cell(contact)="contact">
          <div class="item-contact">
            <a 
              :href="contact.item.sns_kakaotalk"
              target="_blank"
            >
              {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.SNS_KAKAOTALK') }}
            </a>
          </div>

          <div class="item-contact">
            <a 
              :href="contact.item.sns_zalo"
              target="_blank"
            >
              {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.SNS_ZALO') }}
            </a>
          </div>

          <div class="item-contact">
            <a 
              :href="contact.item.sns_messenger"
              target="_blank"
            >
              {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.SNS_MESSAGER') }}
            </a>
          </div>
        </template>

        <template #cell(action)="action">
          <div class="item-action">
            <b-button 
              variant="warning"
              class="btn-default"
              @click="onClickEdit(action.item._id)"
            >
              {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.EDIT') }}
            </b-button>
          </div>

          <div class="item-action">
            <b-button 
              variant="danger"
              class="btn-default"
              @click="onClickDelete(action.item._id)"
            >
              {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.DELETE') }}
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

    <b-modal
      v-model="isModal.show"
      no-close-on-backdrop
      no-close-on-esc
      static
      scrollable
      body-class="modal-body-collaborators"
      footer-class="modal-footer-collaborators"
      :title="$t('DASHBOARD.COLLABORATORS_MANAGEMENT.MODAL.TITLE')"
    >
      <div class="form-collaborators">
        <div class="item-form">
          <ImportImage 
            :ref-name="constImport.refName"
            :emit-name="constImport.emitName"
            :reset-image="isModal.resetImage"
            :image="isModal.image"
          />
        </div>

        <div class="item-form">
          <label for="input-fullname">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.FULLNAME') }}
          </label>
          <b-form-input
            id="input-fullname"
            v-model="isModal.fullname" 
          />
        </div>

        <div class="item-form">
          <label for="input-telephone">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.TELEPHONE') }}
          </label>
          <b-form-input
            id="input-telephone"
            v-model="isModal.telephone" 
          />
        </div>

        <div class="item-form">
          <label for="input-email">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.EMAIL') }}
          </label>
          <b-form-input
            id="input-email"
            v-model="isModal.email" 
          />
        </div>

        <div class="item-form">
          <label for="input-sns-kakaotalk">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.SNS_KAKAOTALK') }}
          </label>
          <b-form-input
            id="input-sns-kakaotalk"
            v-model="isModal.sns_kakaotalk" 
          />
        </div>

        <div class="item-form">
          <label for="input-sns-zalo">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.SNS_ZALO') }}
          </label>
          <b-form-input
            id="input-sns-zalo"
            v-model="isModal.sns_zalo" 
          />
        </div>

        <div class="item-form">
          <label for="input-sns-messenger">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.SNS_MESSAGER') }}
          </label>
          <b-form-input
            id="input-sns-messenger"
            v-model="isModal.sns_messenger" 
          />
        </div>

        <div class="item-form">
          <label for="input-description">
            {{ $t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.DESCRIPTION') }}
          </label>
          <b-form-textarea
            id="input-description"
            v-model="isModal.description"
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
import { setLoading } from '@/utils/setLoading';
import { postImage } from '@/api/modules/Upload';
import {
  getListCollaborators,
  postCreateCollaborators,
  postDeleteCollaborators,
  getDetailCollaborators,
  postEditCollaborators
} from '@/api/modules/Dashboard';
import ImportImage from './components/ImportImage.vue';
import Toast from '@/toast';

export default {
  name: 'CollaboratorsManagement',
  components: {
    ImportImage,
  },
  computed: {
    headerTable() {
      return [
        { key: 'delete_multiple', label: '', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'no', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.NO'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'image', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.AVATAR'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'staff_name', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.FULLNAME'), sortable: true, thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'sns_phone', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.TELEPHONE'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'contact', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.CONTACT'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'action', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.ACTION'), thClass: 'text-center', tdClass: 'text-center base-td' },
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
    isPerPage() {
      return this.pagination.per_page;
    },
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    }
  },
  watch: {
    isCurrentPage() {
      this.handleGetListCollaborators();
    },
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

      searchTable: '',
      isSort: {
        field: '',
        type: '',
      },

      isModal: {
        typeModal: '',
        show: false,
        id: null,
        image: null,
        image_file: null,
        fullname: '',
        telephone: '',
        email: '',
        sns_kakaotalk: '',
        sns_zalo: '',
        sns_messenger: '',
        description: '',
        resetImage: 0,
      },

      constImport: {
        refName: 'import-image-collaborators',
        emitName: 'IMPORT-IMAGE-COLLABORATORS-CHANGE'
      }
    }
  },
  created() {
    this.initEmit();
    this.initData();
  },
  destroyed () {
    this.destroyEmit();
  },
  methods: {
    async initData() {
      await this.handleGetListCollaborators();
    },
    initEmit() {
      this.$bus.on(this.constImport.emitName, (file) => {
        this.isModal.image_file = file;
      });

      this.$bus.on('COLLABORATORS_DELETE_IMAGE', () => {
        this.isModal.image = null;
      })
    },
    destroyEmit() {
      this.$bus.off(this.constImport.emitName);
      this.$bus.off('COLLABORATORS_DELETE_IMAGE');
    },
    async handleSearch() {
      this.handleGetListCollaborators(true);
    },
    async handleSort(ctx) {
      this.isSort.field = ctx.sortBy;
      this.isSort.type = ctx.sortDesc === false ? 1 : -1;

      await this.handleGetListCollaborators();
    },
    async handleGetListCollaborators(isReset) {
      try {
        setLoading(true);

        let BODY = {
          limit: isReset ? 10 : this.pagination.per_page,
          page: isReset? 1 : this.pagination.current_page,
        };

        if (this.searchTable) {
          BODY.search = this.searchTable;
        }

        if (this.isSort.field) {
          BODY.sort = {
            [this.isSort.field]: this.isSort.type,
          }
        }

        const { status_code, data, pagination } = await getListCollaborators(BODY);

        if (status_code === 200) {
          this.items = data;
          this.pagination.current_page = pagination.current_page;
          this.pagination.per_page = pagination.per_page;
          this.pagination.total = pagination.total;
        } else {
          this.items.length = [];
        }

        setLoading(false);
      } catch (err) {
        this.items.length = [];
        setLoading(false);

        console.log(err);
      }
    },
    async onChangePerPage() {
      await this.handleGetListCollaborators();
    },
    calNo(item) {
      return ((this.pagination.current_page - 1) * this.pagination.per_page) + (item.index + 1);
    },
    onClickCreate() {
      this.isModal.typeModal = 'CREATE';
      this.isModal.show = true;
    },
    async onClickEdit(id) {
      try {
        this.isModal.typeModal = 'EDIT';
        const { status_code, data } = await getDetailCollaborators(id);

        if (status_code === 200) {
          const { _id, image, staff_name, staff_description, staff_email, sns_phone, sns_kakaotalk, sns_zalo, sns_messenger } = data;

          this.isModal.id = _id;
          this.isModal.image = image;
          this.isModal.image_file = null;
          this.isModal.fullname = staff_name;
          this.isModal.description = staff_description;
          this.isModal.email = staff_email;
          this.isModal.telephone = sns_phone;
          this.isModal.sns_kakaotalk = sns_kakaotalk;
          this.isModal.sns_zalo = sns_zalo;
          this.isModal.sns_messenger = sns_messenger;

          this.isModal.show = true;
        }
      } catch (err) {
        // console.log(err);
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
    async onClickDelete(id) {
      try {
        setLoading(true);
        const BODY = {
          ids: [id]
        };

        const { status_code } = await postDeleteCollaborators(BODY);

        if (status_code === 200) {
          Toast.success(this.$t('TOAST_MESSAGE.DELETE_COLLABORATORS_SUCCESS'));

          await this.handleGetListCollaborators();
        } else {
          Toast.warning(this.$t('TOAST_MESSAGE.DELETE_COLLABORATORS_ERROR'));
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        Toast.warning(this.$t('TOAST_MESSAGE.DELETE_COLLABORATORS_ERROR'));

        console.log(err);
      }
    },
    async onClickDeleteMultiple() {
      try {
        setLoading(true);

        const BODY = {
          ids: this.selectRow
        };

        const { status_code } = await postDeleteCollaborators(BODY);
        this.selectRow.length = 0;

        if (status_code === 200) {
          Toast.success(this.$t('TOAST_MESSAGE.DELETE_COLLABORATORS_SUCCESS'));

          await this.handleGetListCollaborators();
        } else {
          Toast.warning(this.$t('TOAST_MESSAGE.DELETE_COLLABORATORS_ERROR'));
        }

        setLoading(false);
      } catch (err) {
        this.selectRow.length = 0;
        setLoading(false);
        Toast.warning(this.$t('TOAST_MESSAGE.DELETE_COLLABORATORS_ERROR'));

        console.log(err);
      }
    },
    onClickCloseModal() {
      const DATA_MODAL = {
        show: false,
        id: null,
        image: null,
        image_file: null,
        fullname: '',
        telephone: '',
        email: '',
        sns_kakaotalk: '',
        sns_zalo: '',
        sns_messenger: '',
        description: ''
      }
      
      this.isModal = {
        ...DATA_MODAL,
        resetImage: this.isModal.resetImage + 1,
      };
    },
    async onClickSaveModal() {
      try {
        setLoading(true);

        if (this.isModal.typeModal === 'CREATE') {
          const IMAGE = await this.handleUploadImage(this.isModal.image_file);

          const BODY = {
            staff_name: this.isModal.fullname,
            staff_email: this.isModal.email,
            staff_description: this.isModal.description,
            image: IMAGE,
            sns_zalo: this.isModal.sns_zalo,
            sns_phone: this.isModal.telephone,
            sns_kakaotalk: this.isModal.sns_kakaotalk,
            sns_messenger: this.isModal.sns_messenger,
          }

          const { status_code } = await postCreateCollaborators(BODY);

          if (status_code === 200) {
            this.isModal.show = false;
            this.onClickCloseModal();

            Toast.success(this.$t('TOAST_MESSAGE.CREATE_COLLABORATORS_SUCCESS'));

            await this.handleGetListCollaborators();
          } else {
            Toast.warning(this.$t('TOAST_MESSAGE.CREATE_COLLABORATORS_ERROR'));
          }
        }

        if (this.isModal.typeModal === 'EDIT') {
          let BODY;

          if (this.isModal.image) {
            BODY = {
              id: this.isModal.id,
              staff_name: this.isModal.fullname,
              staff_email: this.isModal.email,
              staff_description: this.isModal.description,
              image: this.isModal.image,
              sns_zalo: this.isModal.sns_zalo,
              sns_phone: this.isModal.telephone,
              sns_kakaotalk: this.isModal.sns_kakaotalk,
              sns_messenger: this.isModal.sns_messenger,
            }
          } else {
            const IMAGE = await this.handleUploadImage(this.isModal.image_file);

            BODY = {
              id: this.isModal.id,
              staff_name: this.isModal.fullname,
              staff_email: this.isModal.email,
              staff_description: this.isModal.description,
              image: IMAGE,
              sns_zalo: this.isModal.sns_zalo,
              sns_phone: this.isModal.telephone,
              sns_kakaotalk: this.isModal.sns_kakaotalk,
              sns_messenger: this.isModal.sns_messenger,
            }
          }

          const { status_code } = await postEditCollaborators(BODY);

          if (status_code === 200) {
            this.isModal.show = false;
            this.onClickCloseModal();

            Toast.success(this.$t('TOAST_MESSAGE.CREATE_COLLABORATORS_SUCCESS'));

            await this.handleGetListCollaborators();
          } else {
            Toast.warning(this.$t('TOAST_MESSAGE.CREATE_COLLABORATORS_ERROR'));
          }
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    async handleUploadImage(FILE) {
      try {
        if (FILE) {
          const { status_code, data } = await postImage(FILE);

          if (status_code === 200) {
            return data.image;
          } 
        }

        return '';
      } catch (err) {
        console.log(err);

        return '';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
.collaborators-page {
  &__header,
  &__body {
    margin-bottom: 10px;
  }

  &__header {
    button + button {
      margin-left: 10px;
    }
  }

  &__body {
    height: calc(100vh - 290px);
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

::v-deep {
  .modal-body-collaborators {
    .form-collaborators {
      .item-form {
        margin-bottom: 10px;
      }
    }
  }

  .modal-footer-collaborators {
    justify-content: center;
  }
}
</style>