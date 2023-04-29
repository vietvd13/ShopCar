<template>
  <b-card>
    <div class="preview-image">
      <BasicInforCar
        v-if="name"
        :name="name"
      />

      <b-row>
        <b-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="6"
        >
          <div
            class="display-image-preview mb-xs-2 mb-sm-2 mb-lg-0"
            :style="`height: ${handleSizePreview()}px;`"
          >
            <b-img-lazy
              :src="`${domainImage}${imagePreview}`"
              :blank-src="require('@/assets/images/noimage.webp')"
              fluid
              :alt="imagePreview"
              v-bind="{
                height: 400,
                width: 'auto'
              }"
            />
          </div>
        </b-col>
        <b-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="6"
        >
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
                  v-bind="{
                    height: 120,
                    width: 'auto'
                  }"
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
import BasicInforCar from './BasicInforCar.vue';

export default {
  name: 'PreviewImage',
  components: {
    BasicInforCar,
  },
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    images: {
      type: Array,
      required: true,
      default: function() {
        return []
      },
    },
  },
  computed: {
    domainImage() {
      return import.meta.env.VITE_URL_IMAGE;
    }
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
    },
    handleSizePreview() {
      const SIZE = this.$store.getters.sizeScreen.type;
      const MAP_SIZE = {
        xl: 400,
        lg: 400,
        md: 400,
        sm: 400,
        xs: 280,
      };

      return MAP_SIZE[SIZE];
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.preview-image {
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
  }

  .card-list-image {
    .list-image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow-y: scroll;
      height: 400px;
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
</style>