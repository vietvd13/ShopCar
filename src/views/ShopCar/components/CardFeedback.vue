<template>
  <div 
    class="card-feedback"
    @click="goToDetail()"
  >
      <div class="card-feedback__img">
        <b-img-lazy 
          :src="`${domainImage}${image}`"
          :blank-src="require('@/assets/images/noimage.webp')" 
          fluid 
          alt="Customer Feedback Image"
          v-bind="{
            height: mapImageHeight(typeScreen),
            width: 'auto'
          }"
          :style="`height: ${mapImageHeight(typeScreen)}px`"
        />
      </div>

      <div class="card-feedback__desc">
        <div class="desc-writer">
          {{ writer }}
        </div>

        <div class="desc-rate">
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
        </div>

        <div class="desc-text">
          {{ feedback }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CardFeedback',
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    image: {
      type: String,
      required: true,
      default: '',
    },
    writer: {
      type: String,
      required: true,
      default: '',
    },
    feedback: {
      type: String,
      required: true,
      default: '',
    }
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
    typeScreen() {
      return this.$store.getters.sizeScreen.type;
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'DetailHappyMoment', params: { id: this.id }});
    },
    mapImageHeight(size) {
      const MAP_SIZE = {
        xl: 100,
        lg: 130,
        md: 130,
        sm: 130,
        xs: 130,
      };

      return MAP_SIZE[size];
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.card-feedback {
  cursor: pointer;
  background-color: $white;
  border: 1px solid $porcelain;
  overflow: hidden;

  &__img {
    text-align: center;
    
    img {
      width: 100%;
      object-fit: cover;
    }

    overflow: hidden;
  }

  &__desc {
    width: 100%;
    padding: 0 10px;
    background-color: $white;

    .desc-writer {
      text-align: left;
      margin-top: 5px;
      font-weight: 600;
    }

    .desc-rate {
      white-space: 3px;

      i {
        font-size: 0.7rem;
        color: $sunglow;
      }
    }

    .desc-text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size: 0.9rem;

      margin: 7px 0;
    }
  }

  margin-bottom: 20px;
}
</style>