<template>
  <div class="policy-page">
    <div class="policy-page__header">
      <b-row>
        <b-col class="text-right">
          <b-button variant="primary" class="btn-default" s>
            {{ $t('APP.BUTTON_EDIT') }}
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-card class="w-100 mt-2">
          <template v-if="file">
            <embed class="view-pdf" :src="`${domainPDF}${file}`" />
          </template>

          <template v-else>
            <b-row>
              <b-col class="text-center">
                <span>{{ $t('APP.NO_DATA') }}</span>
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
import { getFilePDFPolicy } from '@/api/modules/Home';

export default {
  name: "PolicyManagement",
  data() {
    return {
      file: "",
      current_id: ""
    }
  },
  computed: {
    domainPDF() {
      return process.env.VUE_APP_URL_IMAGE;
    }
  },
  created() {
    this.initData();
  },

  methods: {
    async initData() {
      await this.handleGetFilePDFPolicy();
    },
    async handleGetFilePDFPolicy() {
      try {
        const { status_code, data } = await getFilePDFPolicy();

        if (status_code === 200) {
          this.file = data.file;
          this.current_id = data.id;
        } else {
          this.file = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleUpdatePolicy() {
      
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

  .view-pdf {
    width: 100%;
    height: calc(100vh - 250px);
  }
}
</style>