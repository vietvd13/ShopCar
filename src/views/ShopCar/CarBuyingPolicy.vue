<template>
    <div class="car-buying-policy">
        <div class="car-buying-policy__header">
            <TitleContent>
                {{ $t('SHOP_CAR.CAR_BUYING_POLICY.TITLE') }}
            </TitleContent>
        </div>

        <b-card>
        
        </b-card>
    </div>
</template>

<script>
import TitleContent from './components/TitleContent.vue';

export default {
    name: 'CarBuyingPolicy',
    components: {
        TitleContent,
    },
}
</script>

<style lang="scss" scoped>
.car-buying-policy {
    margin-bottom: 10px;

    &__header {
        margin-bottom: 10px;
    }
}
</style>