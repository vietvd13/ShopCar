<template>
  <div class="insurance-page container">
    <b-row>
      <b-col>
        <b-card class="w-100 mt-2">
          <template v-if="file.length">
            <b-img-lazy
              v-for="(image, idx) in file"
              :key="idx"
              :src="`${domainImage}${image}`"
              :blank-src="require('@/assets/images/noimage.webp')"
              fluid
              :alt="image"
              class="display-image"
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
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-center mt-2 mb-2">
        <b-button
          block
          variant="primary"
          class="btn-app"
          @click="handleShowModal"
        >
          {{ $t("APP.BUTTON_UPDATE") }}
        </b-button>
      </b-col>
    </b-row>

    <div class="insurance-page__modal">
      <b-modal 
        v-model="isModal.show" 
        no-close-on-backdrop 
        no-close-on-esc 
        hide-header-close 
        static 
        scrollable
        :title="$t('ROUTER.INSURANCE_MANAGEMENT')"
      >
        <label for="file">
          {{ $t('APP.DROP_FILE') }}
        </label>

        <b-form-file 
          id="file" 
          v-model="init_file"  
          accept="image/*" 
          :placeholder="$t('APP.DROP_FILE')"
          :drop-placeholder="$t('APP.DROP_FILE')"
          :browse-text="$t('APP.DROP_FILE')"
          type="file"
          multiple
        />

        <template #modal-footer>
          <b-row align-v="baseline">
            <b-col cols="6" class="text-center">
              <b-button class="btn-default btn-cancel" @click="hanldeCloseModal">
                {{ $t("APP.CANCEL") }}
              </b-button>
            </b-col>

            <b-col cols="6" class="text-center">
              <b-button class="btn-default btn-app" @click="handleUpdateinsurance">
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
import { getFilePDFInsurance } from "@/api/modules/Home";
import { postImages } from "@/api/modules/Upload";
import Toast from "@/toast";
import { postEditInsurance } from "@/api/modules/Dashboard";
import { setLoading } from "@/utils/setLoading";

export default {
  name: "InsuranceManagement",
  data() {
    return {
      file: [],
      current_id: "",
      init_file: null,
      isModal: {
        show: false,
      },
    };
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  created() {
    this.initData();
  },

  methods: {
    async initData() {
      setLoading(true);
      await this.handleGetFilePDFinsurance();
      setLoading(false);
    },

    async handleGetFilePDFinsurance() {
      try {
        const { status_code, data } = await getFilePDFInsurance();

        if (status_code === 200) {
          if (Array.isArray(data.file)) {
            this.file = data.file;
          } else {
            this.file = [];
          }
          this.current_id = data._id;
        } else {
          this.file = [];
        }
      } catch (error) {
        this.file = [];
        console.log(error);
        setLoading(false);
      }
    },

    handleShowModal() {
      this.isModal.show = true;
    },

    hanldeCloseModal() {
      this.isModal.show = false;
      this.init_file = null;
    },

    async handleUpdateinsurance() {
      try {
        setLoading(true);

        if (!this.init_file) {
          return Toast.warning(this.$t("TOAST_MESSAGE.REQUIRED_FILE"));
        }

        const result = [];

        for (let image = 0; image < this.init_file.length; image++) {
          result.push({
            type_import: 'new',
            url: this.init_file[image]
          })
        }

        const response = await postImages(result);

        if (response.status) {
          this.file = response.data;
        }

        const BODY = {
          file: this.file,
          insurance_id: this.current_id,
        };

        const response_update = await postEditInsurance(BODY);

        if (response_update.status_code === 200) {
          Toast.success(response_update.message);
          this.hanldeCloseModal();
          this.initData();
        } else {
          Toast.error(response_update.message);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.insurance-page {
  &__header,
  &__content {
    margin-bottom: 10px;
  }

  &__header {
    button+button {
      margin-left: 10px;
    }
  }

  .display-image {
    width: 100%;
  }

  margin-bottom: 10px;
}
</style>
