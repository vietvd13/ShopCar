<template>
    <div class="contact-support">
        <TitleContent>{{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.TITLE') }}</TitleContent>

        <div class="contact-support__form">
            <div class="item-form">
                <label for="form-contact-support-input-name">
                    {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.NAME') }}
                </label>
                <b-form-input
                    id="form-contact-support-input-name"
                    v-model="isForm.name" 
                />
            </div>

            <div class="item-form">
                <label for="form-contact-support-input-phone">
                    {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.PHONE') }}
                </label>
                <b-form-input
                    id="form-contact-support-input-phone"
                    v-model="isForm.phone" 
                />
            </div>

            <div class="item-form">
                <label for="form-contact-support-input-content">
                    {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.CONTENT') }}
                </label>
                <b-form-textarea
                    id="form-contact-support-input-content"
                    v-model="isForm.content"
                    rows="6"
                    max-rows="6"
                />
            </div>

            <b-button
                block
                class="btn-app"
                @click="handleSubmitContactSupport()"
            >
                {{ $t('SHOP_CAR.HOME.CONTACT_SUPPORT.SEND') }}
            </b-button>
        </div>
    </div>
</template>

<script>
import Toast from '@/toast';
import { postCreatSupport } from '@/api/modules/Home';
import { setLoading } from '@/utils/setLoading';
import TitleContent from './TitleContent.vue';


export default {
    name: 'ContactSupport',
    components: {
        TitleContent,
    },
    data() {
        return {
            isForm: {
                name: '',
                phone: '',
                content: '',
            }
        }
    },
    methods: {
        async handleSubmitContactSupport() {
            try {
                setLoading(true);

                const BODY = {
                    name: this.isForm.name,
                    phone: this.isForm.phone,
                    content: this.isForm.content,
                };

                const { status_code } = await postCreatSupport(BODY);

                if (status_code === 200) {
                    this.handleResetForm();

                    Toast.success(this.$t('TOAST_MESSAGE.CREATE_CUSTOMER_SUPPORT_SUCCESS'));
                } else {
                    Toast.warning(this.$t('TOAST_MESSAGE.CREATE_CUSTOMER_SUPPORT_ERROR'));
                }

                setLoading(false);
                console.log(status_code);
            } catch (err) {
                Toast.warning(this.$t('TOAST_MESSAGE.CREATE_CUSTOMER_SUPPORT_ERROR'));
                setLoading(false);
                console.log(err);
            }
        },
        handleResetForm() {
            const FORM = {
                name: '',
                phone: '',
                content: '',
            };

            this.isForm = FORM;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.contact-support {
    &__form {
        background-color: $white;
        border-radius: 5px;
        padding: 20px;

        .item-form {
            margin-bottom: 10px;
        }
    }
}
</style>