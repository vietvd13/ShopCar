<template>
  <div 
    class="card-feedback"
    @click="goToDetail()"
  >
    <div class="card-feedback__img">
      <b-img 
        :src="`${domainImage}${image}`" 
        fluid 
        alt="Customer Feedback Image" 
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
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'DetailHappyMoment', params: { id: this.id }});
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.card-feedback {
  cursor: pointer;
  background-color: $white;
  border: 1px solid $iron;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.2);
    }

    border: 1px solid $main;
  }

  &__img {
    text-align: center;
    
    img {
      height: 190px;
      object-fit: cover;
      transition: 0.3s all ease-in-out 0s;
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
      -webkit-line-clamp: 2;
      font-size: 0.9rem;

      margin: 7px 0;
    }
  }

  margin-bottom: 20px;
}
</style>