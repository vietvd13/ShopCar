<template>
    <div class="shop-car-contact">
        <div class="shop-car-contact__title">
            <TitleContent>{{ $t('SHOP_CAR.CONTACT.TITLE') }}</TitleContent>
        </div>

        <b-card>
            <div class="item-form">
                <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.PHONE') }}</label>
                <p>{{ profile.phone }}</p>
            </div>

            <div class="item-form">
                <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.ADDRESS') }}</label>
                <p>{{ profile.address }}</p>
            </div>

            <div class="item-form">
                <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.EMAIL') }}</label>
                <p>{{ profile.email }}</p>
            </div>

            <div class="item-form">
                <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.MAP') }}</label>
                <p>{{ profile.map }}</p>
            </div>
        </b-card>
    </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { getProfilePublic } from '@/api/modules/Home';
import TitleContent from './components/TitleContent.vue';

export default {
    name: 'ShopCarContact',
    components: {
        TitleContent,
    },
    data() {
        return {
            profile: {
                phone: '',
                address: '',
                email: '',
                map: '',
            }
        }
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            await this.handleGetProfile();
        },
        async handleGetProfile() {
            try {
                setLoading(true);

                const { status_code, data } = await getProfilePublic();

                if (status_code === 200) {
                    this.profile.phone = data.phone_number;
                    this.profile.address = data.address;
                    this.profile.email = data.email;
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

.shop-car-contact {
    margin-bottom: 10px;
}
</style>