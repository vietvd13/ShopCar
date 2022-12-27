<template>
    <div id="tab-car-options">
        <MenuDetailCar :tab-active="'tab-car-options'" />
        <b-card>
            <p class="title-content">
                {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_VEHICLE_OPTIONS_AND_DETAILS') }}
            </p>
            <div class="car-options">
                <b-row>
                    <b-col 
                        cols="12" 
                        xs="12" 
                        sm="12" 
                        md="6" 
                        lg="3"
                        xl="2"
                        v-for="(item, idx) in joinOption(exterior, guts, safety, convenience)"
                        :key="idx"
                        class="mb-sm-2 mb-lg-0"
                    >
                        <span class="item-option">
                            <i class="fas fa-check-square icon-checked" />
                            {{ item }}
                        </span>
                    </b-col>
                    <!-- <b-col
                        cols="12" xs="12" sm="12" md="6" lg="3"
                        class="mb-sm-4 mb-lg-0"
                    >
                        <p class="title-option">{{ $t('SHOP_CAR.DETAIL_CAR.CAR_OPTION_EXTERIOR') }}</p>
                        <span
                            class="item-option"
                            v-for="(item, idx) in exterior"
                            :key="idx"
                        >
                            <i class="fas fa-check-square" />
                            {{ item }}
                        </span>
                    </b-col>
                    <b-col
                        cols="12" xs="12" sm="12" md="6" lg="3"
                        class="mb-sm-4 mb-lg-0"
                    >
                        <p class="title-option">{{ $t('SHOP_CAR.DETAIL_CAR.CAR_OPTION_GUTS') }}</p>
                        <span
                            class="item-option"
                            v-for="(item, idx) in guts"
                            :key="idx"
                        >
                            <i class="fas fa-check-square" />
                            {{ item }}
                        </span>
                    </b-col>
                    <b-col
                        cols="12" xs="12" sm="12" md="6" lg="3"
                        class="mb-sm-4 mb-lg-0"
                    >
                        <p class="title-option">{{ $t('SHOP_CAR.DETAIL_CAR.CAR_OPTION_SAFETY') }}</p>
                        <span
                            class="item-option"
                            v-for="(item, idx) in safety"
                            :key="idx"
                        >
                            <i class="fas fa-check-square" />
                            {{ item }}
                        </span>
                    </b-col>
                    <b-col
                        cols="12" xs="12" sm="12" md="6" lg="3"
                        class="mb-sm-4 mb-lg-0"
                    >
                        <p class="title-option">{{ $t('SHOP_CAR.DETAIL_CAR.CAR_OPTION_CONVENIENCE') }}</p>
                        <span
                            class="item-option"
                            v-for="(item, idx) in convenience"
                            :key="idx"
                        >
                            <i class="fas fa-check-square" />
                            {{ item }}
                        </span>
                    </b-col> -->
                </b-row>
            </div>
        </b-card>
    </div>
</template>

<script>
import MenuDetailCar from '@/components/MenuDetailCar.vue';

export default {
    name: 'CarOptions',
    components: {
        MenuDetailCar,
    },
    props: {
        exterior: {
            type: Array,
            default: function() {
                return [];
            }
        },
        guts: {
            type: Array,
            default: function() {
                return [];
            }
        },
        safety: {
            type: Array,
            default: function() {
                return [];
            }
        },
        convenience: {
            type: Array,
            default: function() {
                return [];
            }
        },
    },
    methods: {
        joinOption(exterior = [], guts = [], safety = [], convenience = []) {
            return [...exterior, ...guts, ...safety, ...convenience];
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.title-content {
    font-size: 22px;
    font-weight: 600;
}

.title-option {
    font-weight: bold;
}

span {
    display: block;

    i {
        color: $international-orange;
        margin-right: 5px;
    }
}
</style>