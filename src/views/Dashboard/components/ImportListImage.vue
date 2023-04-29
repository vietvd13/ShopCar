<template>
  <div class="import-list-image">
    <div class="input-import">
      <b-form-file
        plain
        :ref="`${refName}`"
        v-model="fileImport"
      />
    </div>

    <div class="btn-import">
      <b-button
        block
        class="btn-app"
        @click="onClickImport"
      >
        {{ $t('APP.IMPORT_IMAGE') }}
      </b-button>
    </div>

    <div class="list-image">
      <draggable
        :list="items"
      >
        <div
          v-for="(image, idx) in items"
          :key="idx"
          class="item-image"
        >
          <div
            v-if="image.type_import === 'old'"
            class="display-image"
          >
            <b-img :src="`${domainImage}${image.url}`" />
          </div>

          <div
            v-if="image.type_import === 'new'"
            class="display-image"
          >
            <b-img :src="convertFile2Image(image.url)" />
          </div>

          <div class="btn-remove-image">
            <b-button
              variant="danger"
              @click="onClickRemove(idx)"
            >
              {{ $t('APP.DELETE') }}
            </b-button>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: 'ImportListImage',
  components: {
    draggable,
  },
  props: {
    refName: {
      type: String,
      required: false,
      default: 'importListImage'
    },
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      fileImport: null,
    }
  },
  computed: {
    domainImage() {
      return import.meta.env.VITE_URL_IMAGE;
    }
  },
  watch: {
    fileImport() {
      if (this.fileImport) {
        const FILE = {
          url: this.fileImport,
          type_import: 'new'
        }

        this.$emit('import', FILE);
        this.$refs[this.refName].reset();
      }
    }
  },
  methods: {
    convertFile2Image(file) {
      if (file) {
        return URL.createObjectURL(file);
      }

      return '';
    },
    onClickImport() {
      this.$refs[this.refName].$el.click();
    },
    onClickRemove(idx) {
      this.$emit('remove', idx);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.import-list-image {
  .input-import {
    display: none;
  }

  .list-image {
    margin: 10px;

    text-align: center;

    .item-image {
      margin-bottom: 10px;

      .display-image {
        margin-bottom: 10px;

        img {
          width: 90%;
          object-fit: cover;
        }
      }

      .btn-remove-image {
        button {
          min-width: 150px;
        }
      }
    }
  }
}
</style>