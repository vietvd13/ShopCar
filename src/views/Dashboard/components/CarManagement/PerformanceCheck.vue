<template>
  <div class="import-performance-check">
    <p class="title-content">
      {{ $t("SHOP_CAR.DETAIL_CAR.TITLE_PERFORMANCE_CHECK") }}
    </p>

    <div class="import-file">
      <label for="import-pdf" class="label-import-image">{{
        $t("APP.DROP_FILE")
      }}</label>
      <div class="zone-import">
        <b-form-file
          id="import-pdf"
          v-model="fileImport.url"
          :placeholder="
            $t('DASHBOARD.CAR.FORM.PLACEHOLDER_IMPORT_PERFORMANCE_CHECK')
          "
          :drop-placeholder="$t('APP.DROP_FILE')"
          :browse-text="$t('APP.DROP_FILE')"
          accept="image/*"
        />
      </div>
    </div>

    <div class="preview-import-file">
      <template v-if="filePreview.url">
        <b-img-lazy
          v-for="(image, idx) in filePreview.url"
          :key="idx"
          :src="handleViewPdf(image)"
          :blank-src="require('@/assets/images/noimage.webp')"
          fluid
          :alt="`image-car-${idx + 1}`"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ImportPerformanceCheck",
  props: {
    oldFile: {
      type: Object,
      default: function () {
        return {
          url: [],
          type: "",
        };
      },
    },
  },
  computed: {
    domainPDF() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  watch: {
    oldFile: {
      handler: function () {
        this.filePreview = this.oldFile;
      },
      deep: true,
    },
    fileImport: {
      handler: function () {
        this.$emit("file", {
          url: [this.fileImport.url],
          type: "new",
        });
        this.filePreview = {
          type: "new",
          url: [this.fileImport.url],
        };
      },
      deep: true,
    },
  },
  data() {
    return {
      fileImport: {
        type: "",
        url: [],
      },
      filePreview: {
        type: "",
        url: [],
      },
    };
  },
  methods: {
    handleViewPdf(image) {
      if (this.filePreview) {
        if (this.filePreview.type === "new") {
          return URL.createObjectURL(image);
        }

        if (this.filePreview.type === "old") {
          return `${this.domainPDF}${image}`;
        }
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.import-performance-check {
  .title-content {
    font-size: 22px;
    font-weight: 600;
  }

  .preview-import-file {
    margin-top: 5px;
  }
}

.zone-import {
  display: none;
}

.display-image {
  width: 100%;
  margin-bottom: 10px;
}

.label-import-image {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: $international-orange;
  color: $white;
}
</style>
