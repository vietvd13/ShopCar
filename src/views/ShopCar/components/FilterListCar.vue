<template>
    <b-card>
        <div class="toggle-filter" v-b-toggle="'filter-home-car'">
            {{ $t('SHOP_CAR.HOME.FILTER.FILTER_CAR') }}
            <span class="icon-toggle when-open">
                <i class="fas fa-chevron-up" />
            </span>
            <span class="icon-toggle when-closed">
                <i class="fas fa-chevron-down" />
            </span>
        </div>

        <b-collapse id="filter-home-car" :visible="true">
            <div class="filter-list-car">
                <b-row>
                    <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                        <b-row>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.YEAR') }}</label>
                                    <b-input-group class="mb-2">
                                        <b-form-input
                                            class="reset-border-right"
                                            type="number"
                                            v-model="isFilter.from_year"
                                        />
                                        <b-input-group-prepend is-text>
                                            <b> - </b>
                                        </b-input-group-prepend>
                                        <b-form-input
                                            type="number"
                                            v-model="isFilter.to_year"
                                        />
                                    </b-input-group>
                                </div>
                            </b-col>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.CATEGORIES') }}</label>
                                    <b-form-select
                                        v-model="isFilter.categories"
                                        :options="listCategories"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                        <b-row>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.COLOR') }}</label>
                                    <b-form-select
                                        v-model="isFilter.color"
                                        :options="listColor"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </div>
                            </b-col>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.FUEL_TYPE') }}</label>
                                    <b-form-select
                                        v-model="isFilter.fuel_type"
                                        :options="listFuelType"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </div>
                            </b-col>
                        </b-row>
                        <!-- <label for="">Giá tiền</label>
                        <div id="slider" class="height-slider"></div> -->
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" xs="12" sm="12" md="12" lg="3">
                        <b-row>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.GEAR_BOX') }}</label>
                                    <b-form-select
                                        v-model="isFilter.gear_box"
                                        :options="listGearBox"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" xs="12" sm="12" md="12" lg="9">
                        <b-row>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.DISTANCE') }}</label>
                                    <div
                                        id="filter-distance"
                                        class="height-slider"
                                    />
                                </div>
                            </b-col>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <div class="item-form">
                                    <label for="">{{ $t('SHOP_CAR.HOME.FILTER.PRICE') }}</label>
                                    <div
                                        id="filter-price"
                                        class="height-slider"
                                    />
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="text-center">
                        <b-button
                            class="mt-4 btn-app btn-default btn-filter"
                        >
                            {{ $t('APP.BUTTON_FILTER') }}
                        </b-button>
                    </b-col>
                </b-row>
            </div>
        </b-collapse>
    </b-card>
</template>

<script>
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import { 
    getListCategories,
    getListColor,
    getListFuleType,
    getListGearBox
} from '@/api/modules/Home';
import { generateSelect } from '@/utils/helper';

export default {
    name: 'FilterListCar',
    data() {
        return {
            isFilter: {
                from_year: '',
                to_year: '',
                categories: null,
                color: null,
                fuel_type: null,
                gear_box: null
            },

            listCategories: [],
            listColor: [],
            listFuelType: [],
            listGearBox: [],

            filterDistance: null,
            filterPrice: null,
        }
    },
    created () {
        this.initData();
    },
    mounted () {
        this.initSlider();
    },
    methods: {
        initSlider() {
            this.filterDistance = document.getElementById('filter-distance');

            noUiSlider.create(this.filterDistance, {
                start: [20, 80],
                connect: true,
                range: {
                    'min': 0,
                    'max': 100
                }
            });

            this.filterDistance.noUiSlider.on('update', (values) => {
                console.log('Distance: ', values);
            })

            this.filterPrice = document.getElementById('filter-price');

            noUiSlider.create(this.filterPrice, {
                start: [20, 80],
                connect: true,
                range: {
                    'min': 0,
                    'max': 100
                }
            });

            this.filterPrice.noUiSlider.on('update', (values) => {
                console.log('Price: ', values);
            })
        },
        async initData() {
            this.handleGetListCategories();
            this.handleGetListColor();
            this.handleGetListFuleType();
            this.handleGetListGearBox();
        },
        async handleGetListCategories() {
            try {
                const { status_code, data } = await getListCategories();

                if (status_code === 200) {
                    this.listCategories = generateSelect(data, false, '_id', 'category_name');
                } else {
                    this.listCategories = [];
                }
            } catch (err) {
                this.listCategories = [];
                console.log(err);
            }
        },
        async handleGetListColor() {
            try {
                const { status_code, data } = await getListColor();

                if (status_code === 200) {
                    this.listColor = generateSelect(data, true);
                } else {
                    this.listColor = [];
                }
            } catch (err) {
                this.listColor = [];
                console.log(err);
            }
        },
        async handleGetListFuleType() {
            try {
                const { status_code, data } = await getListFuleType();

                if (status_code === 200) {
                    this.listFuelType = generateSelect(data, true);
                } else {
                    this.listFuelType = [];
                }
            } catch (err) {
                this.listFuelType = [];
                console.log(err);
            }
        },
        async handleGetListGearBox() {
            try {
                const { status_code, data } = await getListGearBox();

                if (status_code === 200) {
                    this.listGearBox = generateSelect(data, true);
                } else {
                    this.listGearBox = [];
                }
            } catch (err) {
                this.listGearBox = [];
                console.log(err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.toggle-filter {
    font-size: 20px;
    font-weight: 600;
}

.filter-list-car {
    margin-top: 20px;
}

.icon-toggle {
    float: right;
    color: $international-orange;
}

.reset-border-right {
    border-right-color: transparent !important;
}

.height-slider {
    margin-top: 10px;
}

.item-form {
    margin-bottom: 5px;
}

.btn-filter {
    min-width: 150px;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>