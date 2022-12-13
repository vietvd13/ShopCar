<template>
    <div class="shop-car-contact">
        <div class="shop-car-contact__title">
            <TitleContent>{{ $t('SHOP_CAR.CONTACT.TITLE') }}</TitleContent>
        </div>

        <b-card>
            <b-row>
                <b-col cols="12" sm="12" md="12" xl="6" lg="6" align-self="center">
                    <div class="company-name">
                        {{ profile.company_name || "Công ty mua bán xe cũ" }}
                    </div>

                    <div class="item-form">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.ADDRESS') }}:</b> 
                        {{ profile.company_address || '266 Liễu Giai, Long Biên, Hà Nội' }}
                    </div>

                    <div class="item-form">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.WEBSITE') }}:</b> 
                        {{ domain }}
                    </div>

                    <div class="item-form">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.EMAIL') }}:</b> 
                        {{ profile.email || 'mycompany@gmail.com' }}
                    </div>

                    <div class="item-form">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.PHONE') }}:</b> 
                        {{ profile.phone_number || '0987654321' }}
                    </div>
                </b-col>

                <b-col cols="12" sm="12" md="12" xl="6" lg="6">
                    <iframe
                        :src="profile.map || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904149296542!2d105.81368901533224!3d21.036520892888273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6d7fee2771%3A0xc4a199ae8b20e4c7!2zMjY2IMSQ4buZaSBD4bqlbg!5e0!3m2!1svi!2s!4v1669199823487!5m2!1svi!2s`"
                        width="100%" 
                        height="400" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" 
                    />
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
    computed: {
        domain() {
            return window.origin;
        }
    },
    data() {
        return {
            profile: {
                phone_number: '',
                company_address: '',
                email: '',
                map: '',
                company_name: '',
            }
        }
    },
    created() {
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
                    this.profile.phone_number = data.phone_number;
                    this.profile.company_address = data.company_address;
                    this.profile.email = data.email;
                    this.profile.map = data.company_map;
                    this.profile.company_name = data.company_name;

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
        font-size: 27px;
        margin-bottom: 40px;
        color: $international-orange;
    }

    .item-form {
        margin-bottom: 10px;
    }
}
</style>