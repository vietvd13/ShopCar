<template>
    <b-card>
        <div class="toggle-filter" v-b-toggle="'filter-home-car'">
            {{ $t('DASHBOARD.CAR.FILTER.FILTER_CAR') }}<span>: {{ totalCar }} {{ $t('APP.SEARCHES') }}</span>
            <span class="icon-toggle when-open">
                <i class="fas fa-chevron-up" />
            </span>
            <span class="icon-toggle when-closed">
                <i class="fas fa-chevron-down" />
            </span>
        </div>

        <b-collapse id="filter-home-car" :visible="false">
            <div class="filter-list-car">
                <b-row>
                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-search">
                                {{ $t('DASHBOARD.CAR.FILTER.SEARCH') }}
                            </label>
                            <b-form-input
                                id="filter-search"
                                v-model="isFilter.search"
                                :placeholder="$t('DASHBOARD.CAR.FILTER.PLACEHOLDER_SEARCH')"
                            />
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-from-year">
                                {{ $t('DASHBOARD.CAR.FILTER.YEAR') }}
                            </label>
                            <b-input-group class="mb-2">
                                <b-form-select 
                                    v-model="isFilter.from_year" 
                                    id="filter-from-year"
                                    @change="handleSelectYear"
                                >
                                    <template #first>
                                        <b-form-select-option :value="null">
                                            {{ $t('APP.PLEASE_SELECT') }}
                                        </b-form-select-option>
                                    </template>

                                    <b-form-select-option
                                        v-for="(year, idxYear) in listOptionYear"
                                        :value="year.value"
                                        :key="idxYear"
                                    >
                                        {{ year.text }}
                                    </b-form-select-option>
                                </b-form-select>
                                <b-input-group-prepend is-text>
                                    <b> - </b>
                                </b-input-group-prepend>
                                <b-form-select 
                                    v-model="isFilter.to_year" 
                                    id="filter-to-year"
                                    @change="handleSelectYear"
                                >
                                    <template #first>
                                        <b-form-select-option :value="null">
                                            {{ $t('APP.PLEASE_SELECT') }}
                                        </b-form-select-option>
                                    </template>

                                    <b-form-select-option
                                        v-for="(year, idxYear) in listOptionYear"
                                        :value="year.value"
                                        :key="idxYear"
                                    >
                                        {{ year.text }}
                                    </b-form-select-option>
                                </b-form-select>
                            </b-input-group>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                        <div class="item-form">
                            <label for="filter-categories">
                                {{ $t('DASHBOARD.CAR.FILTER.CATEGORIES') }}
                            </label>
                            <b-form-select
                                id="filter-categories"
                                v-model="isFilter.categories"
                                :options="listCategories"
                                @change="onSelectCategories"
                            >
                                <template #first>
                                    <b-form-select-option :value="null">
                                        {{ $t('APP.PLEASE_SELECT') }}
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </b-col>
                    
                    <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                        <div class="item-form">
                            <label for="filter-model">
                                {{ $t('SHOP_CAR.HOME.FILTER.MODEL') }}
                            </label>

                            <div class="show-filter-model">
                                <span 
                                    v-for="(itemModel, idxModel) in isFilter.model" 
                                    :key="idxModel"
                                    class="item-model"
                                >
                                    {{ itemModel }}
                                    <i class="fas fa-times" @click="onClickRemoveModle(idxModel)" />
                                </span>
                            </div>

                            <div class="zone-multiple-select">
                                <b-form-checkbox-group
                                    id="filter-model"
                                    v-model="isFilter.model"
                                    stacked
                                    name="filter-model"
                                    v-if="optionModel.length"
                                >
                                    <b-form-checkbox 
                                        v-for="(model, idx) in optionModel" 
                                        :key="idx"
                                        :value="model"
                                    >
                                        {{ model }}
                                    </b-form-checkbox>
                                </b-form-checkbox-group>

                                <div 
                                    v-else
                                    class="text-center"
                                >
                                    {{ $t('APP.TABLE_NO_DATA') }}
                                </div>
                            </div>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-color">{{ $t('DASHBOARD.CAR.FILTER.COLOR') }}</label>
                            <b-form-select
                                id="filter-color"
                                v-model="isFilter.color"
                                :options="listColor"
                            >
                                <template #first>
                                    <b-form-select-option :value="null">
                                        {{ $t('APP.PLEASE_SELECT') }}
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-fuel-type">{{ $t('DASHBOARD.CAR.FILTER.FUEL_TYPE') }}</label>
                            <b-form-select
                                id="filter-fuel-type"
                                v-model="isFilter.fuel_type"
                                :options="listFuelType"
                            >
                                <template #first>
                                    <b-form-select-option :value="null">
                                        {{ $t('APP.PLEASE_SELECT') }}
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="">{{ $t('DASHBOARD.CAR.FILTER.GEAR_BOX') }}</label>
                            <b-form-select
                                v-model="isFilter.gear_box"
                                :options="listGearBox"
                            >
                                <template #first>
                                    <b-form-select-option :value="null">
                                        {{ $t('APP.PLEASE_SELECT') }}
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="">{{ $t('DASHBOARD.CAR.FILTER.HOT_SALE') }}</label>
                            <b-form-select
                                v-model="isFilter.is_hotsale"
                                :options="listHotSale"
                            >
                                <template #first>
                                    <b-form-select-option :value="null">
                                        {{ $t('APP.PLEASE_SELECT') }}
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="">{{ $t('DASHBOARD.CAR.FILTER.DATA_CRAWL') }}</label>
                            <b-form-select
                                v-model="isFilter.is_data_crawl"
                                :options="ListDataCrawl"
                            >
                                <template #first>
                                    <b-form-select-option :value="null">
                                        {{ $t('APP.PLEASE_SELECT') }}
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" />

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-distance-dashboard">
                                {{ $t('SHOP_CAR.HOME.FILTER.DISTANCE') }}
                            </label>

                            <div class="show-range">
                                <b-row>
                                    <b-col class="text-left">
                                        {{ formatNumber(isFilter.distance[0]) }} km
                                    </b-col>

                                    <b-col class="text-right">
                                        {{ formatNumber(isFilter.distance[1]) }} km
                                    </b-col>
                                </b-row>
                            </div>

                            <b-col class="text-center">
                                <div
                                    id="filter-distance-dashboard"
                                    class="height-slider"
                                />
                            </b-col>

                            <div class="input-range">
                                <b-row align-h="end">
                                    <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-right">
                                        <b-form-checkbox v-model="isLimit.distance">
                                            {{ $t('APP.NO_LIMIT') }}
                                        </b-form-checkbox>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-price-dashboard">
                                {{ $t('SHOP_CAR.HOME.FILTER.PRICE') }}
                            </label>

                            <div class="show-range">
                                <b-row>
                                    <b-col class="text-left">
                                        {{ formatPrice(isFilter.price[0]) }} 만원
                                    </b-col>

                                    <b-col class="text-right">
                                        {{ formatPrice(isFilter.price[1]) }} 만원
                                    </b-col>
                                </b-row>
                            </div>

                            <b-col class="text-center">
                                <div
                                    id="filter-price-dashboard"
                                    class="height-slider"
                                />
                            </b-col>

                            <div class="input-range">
                                <b-row align-h="end">
                                    <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-right">
                                        <b-form-checkbox v-model="isLimit.price">
                                            {{ $t('APP.NO_LIMIT') }}
                                        </b-form-checkbox>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col class="text-center">
                        <b-button
                            variant="danger"
                            class="mt-4 btn-default btn-remove-filter"
                            @click="onClickResetFilter()"
                        >
                            {{ $t('APP.BUTTON_RESET_FILTER') }}
                        </b-button>
                    </b-col>

                    <b-col class="text-center">
                        <b-button
                            class="mt-4 btn-app btn-default btn-filter"
                            @click="onClickFilter()"
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
    getListGearBox,
    getAllModelCar
} from '@/api/modules/Home';
import { generateSelect, formatPrice, formatNumber } from '@/utils/helper';
import { validInputNumber } from '@/utils/handleInput';

import CONSTANTS from '@/constants';

export default {
    name: 'FilterListCarDashboard',
    props: {
        totalCar: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            isFilter: this.$store.getters.isFilterDashboard || {
                search: '',
                from_year: null,
                to_year: null,
                categories: null,
                model: [],
                color: null,
                fuel_type: null,
                gear_box: null,
                is_hotsale: null,
                is_data_crawl: null,
                apply_distance: true,
                apply_price: true,
                distance: [0, CONSTANTS.VALUE.MAX_DISTANCE],
                price: [0, CONSTANTS.VALUE.MAX_PRICE]
            },

            configSlider: this.$store.getters.configSliderDashboard || {
                distance: {
                    min: 0,
                    max: CONSTANTS.VALUE.MAX_DISTANCE,
                },
                price: {
                    min: 0,
                    max: CONSTANTS.VALUE.MAX_PRICE,
                }
            },

            listCategories: [],
            listModel: {},
            optionModel: [],
            listColor: [],
            listFuelType: [],
            listGearBox: [],
            listHotSale: [
                { value: true, text: this.$t('DASHBOARD.CAR.FILTER.TEXT_YES') },
                { value: false, text: this.$t('DASHBOARD.CAR.FILTER.TEXT_NO') }
            ],
            ListDataCrawl: [
                { value: 'manual', text: window.origin },
                { value: 'https://dautomall.com', text: 'https://dautomall.com' },
                { value: 'https://www.djauto.co.kr', text: 'https://www.djauto.co.kr' },
            ],

            filterDistance: null,
            filterPrice: null,

            isLimit: this.$store.getters.isLimitDashboard || {
                distance: true,
                price: true,
            }
        }
    },
    computed: {
        rangeDistanceMaxChange() {
            return this.configSlider.distance.max;
        },
        rangePriceMaxChange() {
            return this.configSlider.price.max;
        }
    },
    watch: {
        isFilter: {
            handler: async function() {
                if (this.isFilter.from_year > this.isFilter.to_year && (this.isFilter.to_year !== null)) {
                    this.isFilter.from_year = this.isFilter.to_year;
                }

                await this.$store.dispatch('filter/setFilterDashboard', this.isFilter);
            },
            deep: true,
        },
        isLimit: {
            handler: async function() {
                if (this.isLimit.distance) {
                    this.isFilter.distance = [this.isFilter.distance[0], CONSTANTS.VALUE.MAX_DISTANCE];
                }

                if (this.isLimit.price) {
                    this.isFilter.price = [this.isFilter.price[0], CONSTANTS.VALUE.MAX_PRICE];
                }

                const CONFIG = {
                    distance: {
                        min: parseInt(this.isFilter.distance[0]) || 0,
                        max: CONSTANTS.VALUE.MAX_DISTANCE || 0,
                    },
                    price: {
                        min: parseInt(this.isFilter.price[0]) || 0,
                        max: CONSTANTS.VALUE.MAX_PRICE || 0,
                    }
                }

                await this.$store.dispatch('filter/setConfigSliderDashboard', CONFIG)
                    .then(() => {
                        this.filterDistance.noUiSlider.updateOptions({
                            range: {
                                min: parseInt(this.isFilter.distance[0]) || 0,
                                max: CONSTANTS.VALUE.MAX_DISTANCE || 0,
                            }
                        });

                        this.filterPrice.noUiSlider.updateOptions({
                            range: {
                                min: parseInt(this.isFilter.price[0]) || 0,
                                max: CONSTANTS.VALUE.MAX_PRICE || 0,
                            }
                        });
                    });

                await this.$store.dispatch('filter/setLimitDashboard', this.isLimit);
            },
            deep: true,
        },
        async rangeDistanceMaxChange() {
            const CONFIG = {
                distance: {
                    min: parseInt(this.configSlider.distance.min) || 0,
                    max: parseInt(this.configSlider.distance.max) || 0,
                },
                price: {
                    min: parseInt(this.configSlider.price.min) || 0,
                    max: parseInt(this.configSlider.price.max) || 0,
                }
            }

            await this.$store.dispatch('filter/setConfigSliderDashboard', CONFIG)
                .then(() => {
                    this.filterDistance.noUiSlider.updateOptions({
                        range: {
                            'min': parseInt(this.configSlider.distance.min) || 0,
                            'max': parseInt(this.configSlider.distance.max) || 0
                        }
                    });
                });
        },
        async rangePriceMaxChange() {
            const CONFIG = {
                distance: {
                    min: parseInt(this.configSlider.distance.min) || 0,
                    max: parseInt(this.configSlider.distance.max) || 0,
                },
                price: {
                    min: parseInt(this.configSlider.price.min) || 0,
                    max: parseInt(this.configSlider.price.max) || 0,
                }
            }

            await this.$store.dispatch('filter/setConfigSliderDashboard', CONFIG)
                .then(() => {
                    this.filterPrice.noUiSlider.updateOptions({
                        range: {
                            'min': parseInt(this.configSlider.price.min) || 0,
                            'max': parseInt(this.configSlider.price.max) || 0
                        }
                    });
            })
        }
    },
    created () {
        this.initData();
    },
    mounted () {
        this.initSlider();
    },
    methods: {
        validInputNumber,
        formatPrice, 
        formatNumber,
        initSlider() {
            this.filterDistance = document.getElementById('filter-distance-dashboard');

            noUiSlider.create(this.filterDistance, {
                start: [this.isFilter.distance[0], this.isFilter.distance[1]],
                connect: true,
                step: 1,
                range: {
                    'min': this.configSlider.distance.min || 0,
                    'max': this.configSlider.distance.max || 0
                }
            });

            this.filterDistance.noUiSlider.on('update', (values) => {
                this.isFilter.distance = values;

                if (this.isFilter.distance[1] >= CONSTANTS.VALUE.MAX_DISTANCE) {
                    this.isLimit.distance = true;
                } else {
                    this.isLimit.distance = false;
                }
            })

            this.filterPrice = document.getElementById('filter-price-dashboard');

            noUiSlider.create(this.filterPrice, {
                start: [this.isFilter.price[0], this.isFilter.price[1]],
                connect: true,
                step: 1,
                range: {
                    'min': this.configSlider.price.min || 0,
                    'max': this.configSlider.price.max || 0
                }
            });

            this.filterPrice.noUiSlider.on('update', (values) => {
                this.isFilter.price = values;

                if (this.isFilter.price[1] >= CONSTANTS.VALUE.MAX_PRICE) {
                    this.isLimit.price = true;
                } else {
                    this.isLimit.price = false;
                }
            })
        },
        async initData() {
            this.listOptionYear = this.handleGetListYear();
            this.handleGetListCategories();
            this.handleGetAllModelCar();
            this.handleGetListColor();
            this.handleGetListFuleType();
            this.handleGetListGearBox();
        },
        async handleGetListCategories() {
            try {
                const { status_code, data } = await getListCategories();

                if (status_code === 200) {
                    this.listCategories = generateSelect(data, true);
                } else {
                    this.listCategories = [];
                }
            } catch (err) {
                this.listCategories = [];
                console.log(err);
            }
        },
        async handleGetAllModelCar() {
            try {
                const { status_code, data } = await getAllModelCar();

                if (status_code === 200) {
                    this.listModel = data;
                } else {
                    this.listModel = {};
                }
            } catch (err) {
                this.listModel = {};
                console.log();
            }
        },
        onSelectCategories() {
            if (this.isFilter.categories) {
                this.isFilter.model = [];
                this.optionModel = this.listModel[this.isFilter.categories] || [];
            } else {
                this.isFilter.model = [];
                this.optionModel = [];
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
        },
        onClickFilter() {
            this.$emit('filter');
        },
        async onClickResetFilter() {
            this.isFilter = {
                search: '',
                from_year: null,
                to_year: null,
                categories: null,
                model: [],
                color: null,
                fuel_type: null,
                gear_box: null,
                is_hotsale: null,
                is_data_crawl: null,
                apply_distance: true,
                apply_price: true,
                distance: [0, CONSTANTS.VALUE.MAX_DISTANCE],
                price: [0, CONSTANTS.VALUE.MAX_PRICE]
            }

            this.optionModel = [];

            this.configSlider = {
                distance: {
                    min: 0,
                    max: CONSTANTS.VALUE.MAX_DISTANCE,
                },
                price: {
                    min: 0,
                    max: CONSTANTS.VALUE.MAX_PRICE,
                }
            }

            this.isLimit = {
                distance: false,
                price: false,
            }

            await this.$store.dispatch('filter/setFilterDashboard', this.isFilter)
                .then(() => {
                    this.$emit('filter');
                })
                .catch(() => {
                    this.$emit('filter');
                })
        },
        handleGetListYear() {
            const MIN = 2000;
            const d = new Date();

            let YEAR = d.getFullYear() + 1;

            const result = [];

            if (YEAR >= MIN) {
                while (YEAR >= MIN) {
                    result.push({
                        value: YEAR,
                        text: `${YEAR}`
                    });

                    YEAR = YEAR - 1;
                }
            }

            return result;
        },
        handleSelectYear() {
            if (this.isFilter.from_year > this.isFilter.to_year && (this.isFilter.to_year !== null)) {
                this.isFilter.to_year = this.isFilter.from_year;
            }
        },
        onClickRemoveModle(idx) {
            if (idx >= 0 && idx < this.isFilter.model.length) {
                this.isFilter.model.splice(idx, 1);
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
    margin-bottom: 10px;

    .input-range {
        margin-top: 10px;
    }
}

.btn-filter {
    min-width: 150px;
}

.btn-remove-filter {
    min-width: 150px;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>