<template>
  <div class="card-collaborators">
    <div class="card-collaborators__img">
      <b-img :src="`${domainImage}${avatar}`" />
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
        />
      </div>

      <div class="item-social">
        <b-img
          @click="goToLink(zalo)"
          :src="require('@/assets/images/zalo.png')" 
        />
      </div>

      <div class="item-social">
        <b-img
          @click="goToLink(messager)"
          :src="require('@/assets/images/messager.png')" 
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
      type: String,
      default: '',
      required: true,
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
@import '../../../scss/variables';

.card-collaborators {
  width: 100%;
  background-color: $white;

  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid $silver-chalice;
  border-radius: 5px;
  overflow: hidden;

  &__img {
    text-align: center;
    img {
      width: 155px;
      border-radius: 5px;
    }
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
        width: 80%;
        cursor: pointer;

        border-radius: 5px;
      }
    }
    
  }
}
</style>