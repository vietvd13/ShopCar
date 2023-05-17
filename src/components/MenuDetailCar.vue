<template>
    <div class="menu-detail-car">
        <div 
            :class="{
                'item-menu': true,
                'item-menu-active': tabActive === 'tab-car-infor'
            }" 
            @click="onScrollTo('tab-car-infor')"
        >
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_BASIC_INFOR') }}
        </div>

        <div 
            :class="{
                'item-menu': true,
                'item-menu-active': tabActive === 'tab-car-options'
            }" 
            @click="onScrollTo('tab-car-options')"
        >
            <span v-html="$t('SHOP_CAR.DETAIL_CAR.TITLE_VEHICLE_OPTIONS_AND_DETAILS')" />
        </div>

        <div             
            :class="{
                'item-menu': true,
                'item-menu-active': tabActive === 'tab-car-images'
            }" 
            @click="onScrollTo('tab-car-images')"
        >
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_IMAGE') }}
        </div>

        <div             
            :class="{
                'item-menu': true,
                'item-menu-active': tabActive === 'tab-car-performance'
            }"
            @click="onScrollTo('tab-car-performance')">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_PERFORMANCE_CHECK') }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuDetailCar',
    props: {
        tabActive: {
            type: String,
            default: '',
        },
    },
    methods: {
        onScrollTo(tab) {
            if (tab) {
                const EL = document.getElementById(tab);
                const APP_SHOP = document.getElementsByClassName('app-shop');

                APP_SHOP[0].scroll({
                    top: EL.offsetTop - 76,
                    behavior: 'smooth'
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.menu-detail-car {
    display: flex;
    justify-content: space-between;

    .item-menu {
        width: 100%;

        padding: 10px 5px;
        border: 1px solid $geyser;
        background-color: $concrete;
        cursor: pointer;

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-weight: 600;
    }

    .item-menu-active {
        background-color: $international-orange;
        color: $white;
    }
}
</style>