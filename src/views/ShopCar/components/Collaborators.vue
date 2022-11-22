<template>
  <div class="zone-right-home">
    <div class="zone-collaborators">
      <template
        v-for="(collaborator, idx) in items"
      >
        <CardCollaborators
          :key="idx"
          :avatar="collaborator.image"
          :fullname="collaborator.staff_name"
          :description="collaborator.staff_description"
          :phone="collaborator.sns_phone"
          :kakaotalk="collaborator.sns_kakaotalk"
          :zalo="collaborator.sns_zalo"
          :messager="collaborator.sns_messager"
        />
      </template>
    </div>

    <div class="zone-support">
      <div class="contact-support">
        <div class="contact-support__title">
          {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.TITLE') }}
        </div>
        <div class="contact-support__form">
          <div class="item-form">
            <label for="input-name">
              {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.NAME') }}
            </label>
            <b-form-input 
              id="input-name"
              v-model="formSupport.name"
            />
          </div>

          <div class="item-form">
            <label for="input-phone">
              {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.PHONE') }}
            </label>
            <b-form-input 
              id="input-phone"
              v-model="formSupport.phone"
            />
          </div>

          <div class="item-form">
            <label for="input-content">
              {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.CONTENT') }}
            </label>
            <b-form-textarea
              v-model="formSupport.content"
              id="input-content"
              rows="6"
              max-rows="6"
            />
          </div>

          <div class="item-form">
            <b-button 
              block 
              class="btn-app"
              @click="handleSendContactSupport()"
            >
              {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.SEND') }}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { postCreateContactSupport } from '@/api/modules/Home';
import Toast from '@/toast';
import CardCollaborators from './CardCollaborators.vue';

export default {
  name: 'CollaboratorsHome',
  components: {
    CardCollaborators,
  },
  props: {
    items: {
      type: [],
      required: true, 
      default: function() {
        return [];
      }
    },
  },
  data() {
    return {
      formSupport: {
        name: '',
        phone: '',
        content: '',
      }
    }
  },
  methods: {
    async handleSendContactSupport() {
      try {
        setLoading(true);

        const BODY = {
          name: this.formSupport.name,
          phone: this.formSupport.phone,
          content: this.formSupport.content
        }

        const { status_code } = await postCreateContactSupport(BODY);
        
        if (status_code === 200) {
          this.formSupport = {
            name: '',
            phone: '',
            content: '',
          }

          Toast.success(this.$t('TOAST_MESSAGE.CREATE_CUSTOMER_SUPPORT_SUCCESS'));
        } else {
          Toast.warning(this.$t('TOAST_MESSAGE.CREATE_CUSTOMER_SUPPORT_ERROR'));
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.zone-right-home {
  position: fixed;
  width: 200px;
  top: 10px;
  overflow: hidden;
  z-index: 2;

  .zone-collaborators {
    padding: 5px;

    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    
    margin-bottom: 10px;
  }

  .contact-support {
    &__title {
      text-align: center;
      padding: 5px 0;
      background-color: $international-orange;
      color: $white;
    }

    &__form {
      padding: 5px 10px;
      .item-form {
        margin-bottom: 5px;
      }

      border: 1px  solid $silver-chalice;
    }
  }
}

</style>