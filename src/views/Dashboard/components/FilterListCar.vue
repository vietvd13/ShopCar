<template>
    <b-card>
        <div class="toggle-filter" v-b-toggle="'filter-home-car'">
            {{ $t('DASHBOARD.CAR.FILTER.FILTER_CAR') }}
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
                                <b-form-input
                                    id="filter-from-year"
                                    class="reset-border-right"
                                    type="number"
                                    v-model="isFilter.from_year"
                                    :placeholder="$t('DASHBOARD.CAR.FILTER.PLACEHOLDER_FROM_YEAR')"
                                    @keydown.native="validInputNumber"
                                />
                                <b-input-group-prepend is-text>
                                    <b> - </b>
                                </b-input-group-prepend>
                                <b-form-input
                                    id="filter-to-year"
                                    type="number"
                                    v-model="isFilter.to_year"
                                    :placeholder="$t('DASHBOARD.CAR.FILTER.PLACEHOLDER_TO_YEAR')"
                                    @keydown.native="validInputNumber"
                                />
                            </b-input-group>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-categories">
                                {{ $t('DASHBOARD.CAR.FILTER.CATEGORIES') }}
                            </label>
                            <b-form-select
                                id="filter-categories"
                                v-model="isFilter.categories"
                                :options="listCategories"
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

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-distance-dashboard">{{ $t('DASHBOARD.CAR.FILTER.DISTANCE') }}</label>

                            <div class="show-range">
                                <b-row>
                                    <b-col class="text-left">
                                        {{ isFilter.distance[0] }}
                                    </b-col>

                                    <b-col class="text-right">
                                        {{ isFilter.distance[1] }}
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
                                    <b-col cols="5" xs="5" sm="5" md="3" lg="3" xl="3" class="text-right">
                                        <b-form-input
                                            type="number"
                                            size="sm" 
                                            :placeholder="$t('DASHBOARD.CAR.FILTER.PLACEHOLDER_INPUT_MAX_DISTANCE')"
                                            v-model="configSlider.distance.max"
                                            @keydown.native="validInputNumber"
                                        />
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-col>

                    <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="item-form">
                            <label for="filter-price-dashboard">{{ $t('DASHBOARD.CAR.FILTER.PRICE') }}</label>

                            <div class="show-range">
                                <b-row>
                                    <b-col class="text-left">
                                        {{ isFilter.price[0] }}
                                    </b-col>

                                    <b-col class="text-right">
                                        {{ isFilter.price[1] }}
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
                                    <b-col cols="5" xs="5" sm="5" md="3" lg="3" xl="3" class="text-right">
                                        <b-form-input
                                            type="number"
                                            size="sm" 
                                            :placeholder="$t('DASHBOARD.CAR.FILTER.PLACEHOLDER_INPUT_MAX_PRICE')"
                                            v-model="configSlider.price.max"
                                            @keydown.native="validInputNumber"
                                        />
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
    getListGearBox
} from '@/api/modules/Home';
import { generateSelect } from '@/utils/helper';
import { validInputNumber } from '@/utils/handleInput';

export default {
    name: 'FilterListCarDashboard',
    data() {
        return {
            isFilter: this.$store.getters.isFilterDashboard || {
                search: '',
                from_year: '',
                to_year: '',
                categories: null,
                color: null,
                fuel_type: null,
                gear_box: null,
                is_hotsale: null,
                is_data_crawl: null,
                distance: [0, 50000],
                price: [0, 50000]
            },

            configSlider: this.$store.getters.configSliderDashboard || {
                distance: {
                    min: 0,
                    max: 50000,
                },
                price: {
                    min: 0,
                    max: 50000,
                }
            },

            listCategories: [],
            listColor: [],
            listFuelType: [],
            listGearBox: [],
            listHotSale: [
                { value: true, text: this.$t('DASHBOARD.CAR.FILTER.TEXT_YES') },
                { value: false, text: this.$t('DASHBOARD.CAR.FILTER.TEXT_NO') }
            ],
            ListDataCrawl: [
                { value: true, text: this.$t('DASHBOARD.CAR.FILTER.TEXT_YES') },
                { value: false, text: this.$t('DASHBOARD.CAR.FILTER.TEXT_NO') }
            ],

            filterDistance: null,
            filterPrice: null,
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
                await this.$store.dispatch('filter/setFilterDashboard', this.isFilter);
            },
            deep: true,
        },
        async rangeDistanceMaxChange() {
            const CONFIG = {
                distance: {
                    min: parseInt(this.configSlider.distance.min),
                    max: parseInt(this.configSlider.distance.max),
                },
                price: {
                    min: parseInt(this.configSlider.price.min),
                    max: parseInt(this.configSlider.price.max),
                }
            }

            await this.$store.dispatch('filter/setConfigSliderDashboard', CONFIG)
                .then(() => {
                    this.filterDistance.noUiSlider.updateOptions({
                        range: {
                            'min': parseInt(this.configSlider.distance.min),
                            'max': parseInt(this.configSlider.distance.max)
                        }
                    });
                });
        },
        async rangePriceMaxChange() {
            const CONFIG = {
                distance: {
                    min: parseInt(this.configSlider.distance.min),
                    max: parseInt(this.configSlider.distance.max),
                },
                price: {
                    min: parseInt(this.configSlider.price.min),
                    max: parseInt(this.configSlider.price.max),
                }
            }

            await this.$store.dispatch('filter/setConfigSliderDashboard', CONFIG)
                .then(() => {
                    this.filterPrice.noUiSlider.updateOptions({
                        range: {
                            'min': parseInt(this.configSlider.price.min),
                            'max': parseInt(this.configSlider.price.max)
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
        initSlider() {
            this.filterDistance = document.getElementById('filter-distance-dashboard');

            noUiSlider.create(this.filterDistance, {
                start: [this.isFilter.distance[0], this.isFilter.distance[1]],
                connect: true,
                step: 1,
                range: {
                    'min': this.configSlider.distance.min,
                    'max': this.configSlider.distance.max
                }
            });

            this.filterDistance.noUiSlider.on('update', (values) => {
                this.isFilter.distance = values;
            })

            this.filterPrice = document.getElementById('filter-price-dashboard');

            noUiSlider.create(this.filterPrice, {
                start: [this.isFilter.price[0], this.isFilter.price[1]],
                connect: true,
                step: 1,
                range: {
                    'min': this.configSlider.price.min,
                    'max': this.configSlider.price.max
                }
            });

            this.filterPrice.noUiSlider.on('update', (values) => {
                this.isFilter.price = values;
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
                    this.listCategories = generateSelect(data, true);
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
        },
        onClickFilter() {
            this.$emit('filter');
        },
        async onClickResetFilter() {
            this.isFilter = {
                search: '',
                from_year: '',
                to_year: '',
                categories: null,
                color: null,
                fuel_type: null,
                gear_box: null,
                is_hotsale: null,
                is_data_crawl: null,
                distance: [0, 50000],
                price: [0, 50000]
            }

            this.configSlider = {
                distance: {
                    min: 0,
                    max: 50000,
                },
                price: {
                    min: 0,
                    max: 50000,
                }
            }

            this.$emit('filter');
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