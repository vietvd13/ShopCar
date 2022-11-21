<template>
    <div class="shop-car-contact">
        <div class="shop-car-contact__title">
            <TitleContent>{{ $t('SHOP_CAR.CONTACT.TITLE') }}</TitleContent>
        </div>

        <b-card>
            {{ $t('SHOP_CAR.CONTACT.TITLE') }}
        </b-card>
    </div>
</template>

<script>
import TitleContent from './components/TitleContent.vue';

export default {
    name: 'ShopCarContact',
    components: {
        TitleContent,
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.shop-car-contact {
    margin-bottom: 10px;
}
</style>