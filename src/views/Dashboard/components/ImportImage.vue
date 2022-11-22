<template>
  <div class="import-image">
    <template v-if="!image">
      <div
        class="zone-import-image"
        @click="onClickImport"
      >
        <b-form-file
          type="file"
          name="Import Image"
          id="import-image"
          accept="image/png, image/jpeg"
          :ref="refName"
          v-model="imageImport"
        />
        <div v-if="!imageImport" class="zone-import-empty">
          <i class="fas fa-image" />
          <div class="text-empty">
            <span class="text-please-import">
              {{ $t('APP.PLEASE_IMPORT_IMAGE') }}
            </span>
            <span class="text-suggest">
              ({{ $t('APP.REQUIRED_IMAGE_SIZE_4_6') }})
            </span>
          </div>
        </div>
        <b-img
          v-if="imageImport"
          :src="previewImage"
        />
      </div>
    </template>

    <template v-else>
      <b-img
        :src="`${domainImage}${image}`"
        class="image-staff"
      />
    </template>

    <div
      v-if="image || imageImport"
      class="zone-reset-import"
      @click="resetImport"
    >
      <i class="fas fa-trash" />
      <span>{{ $t('APP.DELETE') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportImage',
  props: {
    refName: {
      type: String,
      required: false,
      default: 'ImportImage'
    },
    emitName: {
      type: String,
      required: false,
      default: 'IMPORT_IMAGE_CHANGE',
    },
    resetImage: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    }
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  watch: {
    imageImport() {
      this.importChange();
    },
    resetImage() {
      this.resetImport();
    }
  },
  data() {
    return {
      imageImport: null,
      previewImage: null
    }
  },
  methods: {
    onClickImport() {
      this.$refs[this.refName].$el.children[0].click();
    },
    importChange() {
      if (this.imageImport) {
        this.$bus.emit(this.emitName, this.imageImport);
        this.previewImage = URL.createObjectURL(this.imageImport);
      }
    },
    resetImport() {
      if (this.image) {
        this.$bus.emit('COLLABORATORS_DELETE_IMAGE');
      }

      if (this.imageImport) {
        this.$refs[this.refName].reset();
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.import-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .zone-import-image {
    width: 4cm;
    height: 6cm;
    overflow: hidden;

    border-radius: 5px;
    border: dotted 2px $silver-chalice;
    background-color: $catskill-white;

    cursor: pointer;

    .b-form-file {
      display: none;
    }

    .zone-import-empty {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      i {
        font-size: 25px;
        color: $silver-chalice;
        margin-bottom: 10px;
      }

      .text-empty {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $silver-chalice;

        .text-please-import {
          font-size: 13px;
        }

        .text-suggest {
          font-size: 10px;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;

      object-fit: scale-down;
    }
  }

  .image-staff {
    width: 4cm;
  }

  .zone-reset-import {
    width: 4cm;
    background-color: $international-orange;
    padding: 5px;
    text-align: center;
    color: $white;
    cursor: pointer;

    margin-top: 5px;
    border-radius: 5px;

    i {
      margin-right: 10px;
    }
  }
}
</style>