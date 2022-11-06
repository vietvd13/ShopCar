<template>
  <div class="collaborators-page">
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
      >
        <template #cell(no)="no">
          <span>{{ calNo(no) }}</span>
        </template>

        <template #cell(image)="image">
          <b-img thumbnail fluid :src="image.item.image" />
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
      <b-pagination
        v-model="pagination.current_page"
        :total-rows="pagination.total"
        :per-page="pagination.per_page"
        align="center"
        pills
        size="sm"
      />
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
import { getListCollaborators,  } from '@/api/modules/Dashboard';
import ImportImage from './components/ImportImage.vue';

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
        { key: 'staff_name', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.FULLNAME'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'sns_phone', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.TELEPHONE'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'contact', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.CONTACT'), thClass: 'text-center', tdClass: 'text-center base-td' },
        { key: 'action', label: this.$t('DASHBOARD.COLLABORATORS_MANAGEMENT.TABLE.ACTION'), thClass: 'text-center', tdClass: 'text-center base-td' },
      ]
    },
    isCurrentPage() {
      return this.pagination.current_page; 
    },
    isPerPage() {
      return this.pagination.per_page;
    }
  },
  watch: {
    isCurrentPage() {
      this.handleGetListCollaborators();
    },
    isPerPage() {
      this.handleGetListCollaborators();
    }
  },
  data() {
    return {
      items: [],
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
      },

      isModal: {
        show: false,
        image: null,
        fullname: '',
        telephone: '',
        sns_kakaotalk: '',
        sns_zalo: '',
        sns_messenger: '',
        description: ''
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
        console.log(file);
        this.isModal.image = file;
      });
    },
    destroyEmit() {
      this.$bus.off(this.constImport.emitName);
    },
    async handleGetListCollaborators() {
      try {
        setLoading(true);

        let BODY = {
          limit: this.pagination.per_page,
          page: this.pagination.current_page,
          // search: '',
        };

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
    calNo(item) {
      return ((this.pagination.current_page - 1) * this.pagination.per_page) + (item.index + 1);
    },
    onClickCreate() {
      this.isModal.show = true;
    },
    onClickEdit(id) {
      console.log(id);
    },
    onClickDelete(id) {
      console.log(id);
    },
    onClickCloseModal() {
      const DATA_MODAL = {
        show: false,
        image: null,
        fullname: '',
        telephone: '',
        sns_kakaotalk: '',
        sns_zalo: '',
        sns_messenger: '',
        description: ''
      }

      this.isModal = DATA_MODAL;
    },
    async onClickSaveModal() {
      console.log('onClickSaveModal');

      await this.handleUploadImage(this.isModal.image);
    },
    async handleUploadImage(FILE) {
      try {
        const { status_code } = await postImage(FILE);

        console.log(status_code);

      } catch (err) {
        console.log(err);
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
    ::v-deep table {
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

            .item-contact {
              margin: 10px 0;

              a {
                font-weight: bold;
              }
            }

            .item-action {
              margin: 10px 0;
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