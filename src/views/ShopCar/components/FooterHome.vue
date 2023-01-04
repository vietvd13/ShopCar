<template>
    <div class="footer-home">
        <b-container>
            <b-row>
                <b-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <div class="footer-home__company-name">
                        {{ profile.company_name }}
                    </div>

                    <div class="footer-home__address">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.ADDRESS') }}:</b> 
                        {{ profile.company_address }}
                    </div>

                    <div class="footer-home__website">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.WEBSITE') }}:</b> 
                        {{ domain }}
                    </div>

                    <div class="footer-home__email">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.EMAIL') }}:</b> 
                        {{ profile.email_notification }}
                    </div>

                    <div class="footer-home__phone-number">
                        <b>{{ $t('SHOP_CAR.HOME.CONTACT.PHONE') }}:</b> 
                        {{ profile.phone_number }}
                    </div>
                </b-col>

                <b-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <iframe
                        :src="profile.map || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904149296542!2d105.81368901533224!3d21.036520892888273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6d7fee2771%3A0xc4a199ae8b20e4c7!2zMjY2IMSQ4buZaSBD4bqlbg!5e0!3m2!1svi!2s!4v1669199823487!5m2!1svi!2s`"
                        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { getProfilePublic } from '@/api/modules/Home';
import { setLoading } from '@/utils/setLoading';

export default {
    name: 'FooterHome',
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
                    this.profile = data;

                    await this.$store.dispatch('auth/setProfile', data);
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

.footer-home {
    background-color: $mine-shaft;
    color: $white;

    padding: 50px 0;

    &__company-name {
        font-size: 22px;
        margin-bottom: 30px;
        color: $international-orange;
        font-weight: bold;
    }

    &__address,
    &__website,
    &__email,
    &__phone-number {
        font-size: 15px;
        margin-bottom: 10px;
    }
}
</style>