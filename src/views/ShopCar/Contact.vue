<template>
    <div class="shop-car-contact">
        <div class="shop-car-contact__title">
            <TitleContent>{{ $t('SHOP_CAR.CONTACT.TITLE') }}</TitleContent>
        </div>

        <b-card>
            <b-row>
                <b-col cols="12" sm="12" md="12" xl="6" lg="6" align-self="center">
                    <div class="company-name">
                        <h3>Công ty mua bán xe cũ</h3>
                    </div>
                    <div class="item-form">
                        <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.PHONE') }}</label>
                        <p>{{ profile.phone || '0987654321' }}</p>
                    </div>

                    <div class="item-form">
                        <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.ADDRESS') }}</label>
                        <p>{{ profile.address || '266 Liễu Giai, Long Biên, Hà Nội' }}</p>
                    </div>

                    <div class="item-form">
                        <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.EMAIL') }}</label>
                        <p>{{ profile.email }}</p>
                    </div>

                    <div class="item-form">
                        <label for="">{{ $t('SHOP_CAR.HOME.CONTACT.EMAIL') }}</label>
                        <p>{{ 'https://shop-car.thangld-dev.tech/' }}</p>
                    </div>
                </b-col>

                <b-col cols="12" sm="12" md="12" xl="6" lg="6">
                    <div class="item-form">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904149296542!2d105.81368901533224!3d21.036520892888273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6d7fee2771%3A0xc4a199ae8b20e4c7!2zMjY2IMSQ4buZaSBD4bqlbg!5e0!3m2!1svi!2s!4v1669199823487!5m2!1svi!2s" 
                            width="100%" 
                            height="400" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </b-col>
            </b-row>
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

    .company-name {
        font-weight: bold;
        margin-bottom: 40px;
    }
}
</style>