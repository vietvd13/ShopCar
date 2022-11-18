<template>
    <div class="car-saller-infor">
        <b-card>
            <p class="title-content">
                {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_SALLER_INFOR') }}
            </p>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'SallerInfor'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.car-saller-infor {
    margin-bottom: 10px;

    .title-content {
        font-size: 22px;
        font-weight: 600;
    }
}
</style>