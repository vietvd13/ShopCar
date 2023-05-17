<template>
  <b-card>
    <div class="preview-image">
      <BasicInforCar v-if="name" :name="name" />

      <b-row>
        <b-col cols="12" xs="12" sm="12" md="12" lg="6">
          <div
            class="display-image-preview mb-xs-2 mb-sm-2 mb-lg-0"
            :style="`height: ${handleSizePreview()}px;`"
          >
            <b-row>
              <b-col
                cols="1"
                xs="1"
                sm="1"
                md="1"
                lg="1"
                class="center-top-bottom"
                style="padding-right: 0"
              >
                <i
                  class="fas fa-chevron-left"
                  @click="onClickControlImage(-1)"
                />
              </b-col>

              <b-col cols="10" xs="10" sm="10" md="10" lg="10">
                <b-img-lazy
                  :src="`${domainImage}${imagePreview}`"
                  :blank-src="require('@/assets/images/noimage.webp')"
                  fluid
                  :alt="imagePreview"
                />
              </b-col>

              <b-col
                cols="1"
                xs="1"
                sm="1"
                md="1"
                lg="1"
                class="center-top-bottom"
                style="padding-left: 0"
              >
                <i
                  class="fas fa-chevron-right center-top-bottom"
                  @click="onClickControlImage(1)"
                />
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="12" xs="12" sm="12" md="12" lg="6">
          <div class="card-list-image">
            <div class="list-image">
              <div
                class="item-image"
                v-for="image in images"
                :key="image"
                @click="onClickChangeImage(image)"
              >
                <b-img-lazy
                  fluid
                  :src="`${domainImage}${image}`"
                  :blank-src="require('@/assets/images/noimage.webp')"
                />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import BasicInforCar from "./BasicInforCar.vue";

export default {
  name: "PreviewImage",
  components: {
    BasicInforCar,
  },
  props: {
    name: {
      type: String,
      required: false,
      default: "",
    },
    images: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  data() {
    return {
      idxImage: 0,
      imagePreview: "",
    };
  },
  watch: {
    images() {
      this.handleStartPreview();
    },
  },
  created() {
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
    },
    onClickControlImage(type = 1) {
      if ([-1, 1].includes(type)) {
        if (type === -1 && this.idxImage > 0) {
          this.idxImage = this.idxImage - 1;
          this.onClickChangeImage(this.images[this.idxImage]);
        }

        if (type === 1 && this.idxImage < this.images.length) {
          this.idxImage = this.idxImage + 1;
          this.onClickChangeImage(this.images[this.idxImage]);
        }
      }
    },
    handleSizePreview() {
      const SIZE = this.$store.getters.sizeScreen.type;
      const MAP_SIZE = {
        xl: 323,
        lg: 323,
        md: 323,
        sm: 323,
        xs: 280,
      };

      return MAP_SIZE[SIZE];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.preview-image {
  overflow: hidden;

  .basic-infor-car {
    margin-bottom: 10px;

    .car-name {
      font-weight: bold;
      font-size: 25px;
    }

    .car-price {
      font-weight: bold;
      font-size: 20px;

      span {
        color: $alizarin-crimson;
      }
    }
  }

  .display-image-preview {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-list-image {
    .list-image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow-y: scroll;
      height: 323px;
      width: 100%;

      .item-image {
        width: 110px;
        margin: 5px;
        cursor: pointer;

        img {
          height: auto;
          width: 110px;
        }
      }
    }
  }
}

.img-fluid {
  width: 100% !important;
  height: unset !important;
  max-height: 323px;
}

.center-top-bottom {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 30px;
    color: $international-orange;
    cursor: pointer;
  }
}
</style>
