<template>
  <div class="collaborators-page">
    <div class="collaborators-page__header">
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-right">
          <b-button 
            variant="primary" 
            class="btn-default"
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
  </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { getListCollaborators } from '@/api/modules/Dashboard';

export default {
  name: 'CollaboratorsManagement',
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
      }
    }
  },
  created () {
    this.initData();
  },
  methods: {
    async initData() {
      await this.handleGetListCollaborators();
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

        console.log(status_code);
        console.log(data);

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
</style>