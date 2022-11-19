<template>
  <div class="card-collaborators">
    <div class="card-collaborators__img">
      <b-img-lazy 
        :src="`${domainImage}${avatar}`"
        :blank-src="require('@/assets/images/noimage.webp')"
        alt="Image Collaborators"
        v-bind="{
          width: 155,
          height: 189
        }"
      />
    </div>

    <div class="card-collaborators__fullname">
      {{ fullname }}
    </div>

    <div class="card-collaborators__telephone">
      <i class="fas fa-phone-alt" />
      {{ phone }}
    </div>

    <div class="card-collaborators__social-network">
      <div class="item-social">
        <b-img
          @click="goToLink(kakaotalk)"
          :src="require('@/assets/images/kakaotalk.png')"
          v-bind="{
            width: 38,
            height: 38
          }" 
        />
      </div>

      <div class="item-social">
        <b-img
          @click="goToLink(zalo)"
          :src="require('@/assets/images/zalo.png')" 
          v-bind="{
            width: 38,
            height: 38
          }" 
        />
      </div>

      <div class="item-social">
        <b-img
          @click="goToLink(messager)"
          :src="require('@/assets/images/messager.png')"
          v-bind="{
            width: 38,
            height: 38
          }" 
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCollaborators',
  props: {
    avatar: {
      type: [String],
      default: '',
      required: false,
    },
    fullname: {
      type: String,
      default: '',
      required: true,
    },
    phone: {
      type: String,
      default: '',
      required: true,
    },
    kakaotalk: {
      type: String,
      default: '',
      required: true,
    },
    zalo: {
      type: String,
      default: '',
      required: true,
    },
    messager: {
      type: String,
      default: '',
      required: true,
    }
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    }
  },
  methods: {
    goToLink(link) {
      window.open(link, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.card-collaborators {
  width: 100%;
  background-color: $white;
  border: 1px solid $iron;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  &__img {
    text-align: center;
    min-height: 189px;
    margin-bottom: 10px;

    img {
      width: 155px;
    }

    overflow: hidden;
  }

  &__fullname {
    text-align: center;
    margin: 5px 0;
    font-weight: 600;
    color: $white;
    background-color: $main;
    padding: 5px 0;
    border-radius: 5px;
  }

  &__description {
    text-align: center;
    color: $white;
    background-color: $main;
    padding: 5px 0;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  &__telephone {
    text-align: center;
    margin: 5px 0;
    font-weight: 600;

    i {
      font-size: 13px;
    }
  }

  &__social-network {
    display: flex;
    justify-content: space-around;
    margin-top: 7px;

    .item-social {
      text-align: center;
      img {
        width: 38px;
        cursor: pointer;

        border-radius: 5px;
      }
    }
    
  }
}
</style>