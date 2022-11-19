<template>
    <div class="car-buying-policy">
        <div class="car-buying-policy__header">
            <TitleContent>
                {{ $t('SHOP_CAR.CAR_BUYING_POLICY.TITLE') }}
            </TitleContent>
        </div>

        <b-card>
            <VuePdfApp
                style="height: 100vh;"
                pdf="https://api-cars.thangld-dev.tech/uploads/uploads-1668829787061-239f0249-5114-41b8-831a-96129883348b.pdf"
            />
        </b-card>
    </div>
</template>

<script>
import TitleContent from './components/TitleContent.vue';
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";

export default {
    name: 'CarBuyingPolicy',
    components: {
        TitleContent,
        VuePdfApp
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