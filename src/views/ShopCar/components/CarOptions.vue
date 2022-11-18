<template>
    <b-card>
        <p class="title-content">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_VEHICLE_OPTIONS_AND_DETAILS') }}
        </p>
    </b-card>
</template>

<script>
export default {
    name: 'CarOptions'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.title-content {
    font-size: 22px;
    font-weight: 600;
}
</style>