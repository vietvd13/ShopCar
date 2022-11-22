<template>
  <div class="policy-page container">
    <b-row>
      <b-card class="w-100 mt-2">
        <template v-if="file">
          <ViewPDF 
            :file="`${domainPDF}${file}`"
            class="view-pdf" 
          />

        </template>

        <template v-else>
          <b-row>
            <b-col class="text-center">
              <span>{{ $t("APP.NO_DATA") }}</span>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-row>

    <b-row>
      <b-col class="text-right mt-2">
        <b-button variant="primary" class="btn-app" @click="handleShowModal">
          {{ $t("APP.BUTTON_UPDATE") }}
        </b-button>
      </b-col>
    </b-row>

    <div class="policy-page__modal">
      <b-modal v-model="isModal.show" no-close-on-backdrop no-close-on-esc hide-header-close static scrollable>
        <b-form>
          <b-form-group label-cols-sm="4" label-cols-md="4" label-cols-lg="4" label-cols-xl="4" label-cols="4"
            label-for="file" label="File">
            <b-form-file id="file" v-model="init_file" accept="application/pdf" placeholder="Choose a file"
              drop-placeholder="Drop file here..." type="file"></b-form-file>
          </b-form-group>
        </b-form>

        <template #modal-footer>
          <b-row align-v="baseline">
            <b-col cols="6" class="text-center">
              <b-button class="btn-default btn-cancel" @click="hanldeCloseModal">
                {{ $t("APP.CANCEL") }}
              </b-button>
            </b-col>

            <b-col cols="6" class="text-center">
              <b-button class="btn-default btn-app" @click="handleUpdatePolicy">
                {{ $t("APP.SAVE") }}
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { getFilePDFPolicy } from "@/api/modules/Home";
import { postFile } from "@/api/modules/Upload";
import Toast from "@/toast";
import { postEditPolicy } from "@/api/modules/Dashboard";
import ViewPDF from '@/components/ViewPDF.vue';

export default {
  name: "PolicyManagement",
  components: {
    ViewPDF,
  },
  data() {
    return {
      file: null,
      current_id: "",
      init_file: null,
      isModal: {
        show: false,
      },
    };
  },
  computed: {
    domainPDF() {
      return process.env.VUE_APP_URL_IMAGE;
    },
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
          if (data.file) {
            this.file = data.file;
          } else {
            this.file = null;
          }
          this.current_id = data._id;
        } else {
          this.file = null;
        }
      } catch (error) {
        Toast.error(error);
      }
    },

    handleShowModal() {
      this.isModal.show = true;
    },

    hanldeCloseModal() {
      this.isModal.show = false;
      this.init_file = null;
    },

    async handleUpdatePolicy() {
      if (!this.init_file) {
        return Toast.warning(this.$t("TOAST_MESSAGE.REQUIRED_FILE"));
      }
      const response = await postFile(this.init_file);
      if (response.status) {
        this.file = response.data.image;
      }
      const BODY = {
        file: this.file,
        policy_id: this.current_id,
      };

      const response_update = await postEditPolicy(BODY);
      if (response_update.status_code === 200) {
        Toast.success(response_update.message);
        this.hanldeCloseModal();
        this.initData();
      } else {
        Toast.error(response_update.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

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
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
