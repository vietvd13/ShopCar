<template>
  <div class="preview-image">
    <b-row>
      <b-col cols="6" xs="12">
        <div class="display-image-preview">
          <b-img
            :src="imagePreview"
            thumbnail 
          />
        </div>
      </b-col>

      <b-col cols="6" xs="12">
        <div class="list-image">
          <b-img
            class="item-image"
            v-for="(image, idx) in images" 
            :key="idx"
            :src="image"
            thumbnail
            fluid
            @click="onClickChangeImage(image)"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PreviewImage',
  props: {
    images: {
      type: Array,
      required: true,
      default: function() {
        return []
      },
    },
  },
  data() {
    return {
      imagePreview: '',
    }
  },
  watch: {
    images() {
      this.handleStartPreview();
    }
  },
  created () {
    this.handleStartPreview();
  },
  methods: {
    handleStartPreview() {
      if (this.images.length) {
        this.imagePreview = this.images[0];
      }
    },
    onClickChangeImage(image) {
      if (image) {
        this.imagePreview = image;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.preview-image {
  margin-bottom: 10px;

  .display-image-preview {
    display: flex;
    justify-content: center;
    height: 450px;
  }

  .list-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    height: 450px;

    .item-image {
      max-width: 120px;
      margin: 5px;
      cursor: pointer;

      img {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>