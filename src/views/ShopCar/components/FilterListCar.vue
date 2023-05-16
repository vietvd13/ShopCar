<template>
    <div>
        <b-row>
            <b-col cols="12">
                <div class="item-form">
                    <b-input-group>
                        <b-form-input
                            id="filter-search"
                            v-model="isFilter.search"
                            :placeholder="$t('SHOP_CAR.HOME.FILTER.PLACEHOLDER_SEARCH')"
                            @keyup.enter="onClickFilter()"
                        />
                        <b-input-group-append>
                            <b-button 
                                class="btn-app"
                                @click="onClickFilter()"
                            >
                                <i class="fa fa-search mr-2" />
                                {{ $t('SHOP_CAR.HOME.FILTER.SEARCH') }}
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </b-col>
        </b-row>
        <b-card>
            <div class="toggle-filter" v-b-toggle="'filter-home-car'">
                {{ $t('SHOP_CAR.HOME.FILTER.FILTER_CAR') }}<span>: {{ totalCar }} {{ $t('APP.SEARCHES') }}</span>
                <span class="icon-toggle when-open">
                    <i class="fas fa-chevron-up" />
                </span>
                <span class="icon-toggle when-closed">
                    <i class="fas fa-chevron-down" />
                </span>
            </div>
            <b-collapse id="filter-home-car" :visible="initVisible">
                <div class="filter-list-car">
                    <b-row>
                        <b-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3">
                            <div class="item-form">
                                <CardListCategories
                                    :title="$t('SHOP_CAR.HOME.FILTER.CATEGORIES')"
                                    :items="filterCategoriesList"
                                    @onSelect="handleSelectFilterCategories"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3">
                            <div class="item-form">
                                <CardListModel
                                    :title="$t('SHOP_CAR.HOME.FILTER.MODEL')"
                                    :items="filterModel"
                                    @onSelect="handleSelectFilterModel"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3">
                            <div class="item-form">
                                <CardListDetailCar
                                    :title="$t('SHOP_CAR.HOME.FILTER.DETAIL_CAR')"
                                    :items="filterCarDetail"
                                    @onSelect="handleSelectFilterCarDetail"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3">
                            <div class="item-form">
                                <CardListRating
                                    :title="$t('SHOP_CAR.HOME.FILTER.RATING')"
                                    :items="filterRating"
                                    @onSelect="handleSelectFilterRating"
                                />
                            </div>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                            <!-- Filter Năm -->
                            <div class="item-form">
                                <b-form-group
                                    label-cols-lg="3"
                                    content-cols-lg="9"
                                    :label="$t('SHOP_CAR.HOME.FILTER.YEAR')"
                                    label-for="filter-from-year"
                                    class="mb-0"
                                >
                                    <b-input-group size="sm">
                                        <b-form-select
                                            v-model="isFilter.from_year"
                                            id="filter-from-year"
                                            class="border-input-group"
                                            @change="handleSelectYear"
                                            size="sm"
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
                                            size="sm"
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
                                </b-form-group>
                            </div>

                            <!-- Filter Giá -->
                            <div class="item-form">
                                <b-form-group
                                    label-cols-lg="3"
                                    content-cols-lg="9"
                                    :label="$t('SHOP_CAR.HOME.FILTER.PRICE')"
                                    label-for="filter-price"
                                    class="mb-0"
                                >
                                    <b-input-group size="sm">
                                        <b-form-select
                                            v-model="isFilter.from_price"
                                            id="filter-from-price"
                                            class="border-input-group"
                                            @change="handleSelectPrice"
                                            size="sm"
                                        >
                                            <template #first>
                                                <b-form-select-option :value="null">
                                                    {{ $t('APP.PLEASE_SELECT') }}
                                                </b-form-select-option>
                                            </template>
                                            <b-form-select-option
                                                v-for="(from_price, idxFromPrice) in listOptionPrice"
                                                :value="from_price.value"
                                                :key="idxFromPrice"
                                            >
                                                {{ from_price.text }}
                                            </b-form-select-option>
                                        </b-form-select>
                                        <b-input-group-prepend is-text>
                                            <b> - </b>
                                        </b-input-group-prepend>
                                        <b-form-select
                                            v-model="isFilter.to_price"
                                            id="filter-to-price"
                                            @change="handleSelectPrice"
                                            size="sm"
                                        >
                                            <template #first>
                                                <b-form-select-option :value="null">
                                                    {{ $t('APP.PLEASE_SELECT') }}
                                                </b-form-select-option>
                                            </template>
                                            <b-form-select-option
                                                v-for="(to_price, idxToPrice) in listOptionPrice"
                                                :value="to_price.value"
                                                :key="idxToPrice"
                                            >
                                                {{ to_price.text }}
                                            </b-form-select-option>
                                        </b-form-select>
                                    </b-input-group>
                                </b-form-group>
                            </div>

                            <!-- Filter Khoảng cách -->
                            <div class="item-form">
                                <b-form-group
                                    label-cols-lg="3"
                                    content-cols-lg="9"
                                    :label="$t('SHOP_CAR.HOME.FILTER.DISTANCE')"
                                    label-for="filter-distance"
                                    class="mb-0"
                                >
                                    <b-input-group size="sm">
                                        <b-form-select
                                            v-model="isFilter.from_distance"
                                            id="filter-from-distance"
                                            class="border-input-group"
                                            @change="handleSelectDistance"
                                            size="sm"
                                        >
                                            <template #first>
                                                <b-form-select-option :value="null">
                                                    {{ $t('APP.PLEASE_SELECT') }}
                                                </b-form-select-option>
                                            </template>
                                            <b-form-select-option
                                                v-for="(from_distance, idxFromDistance) in listOptionDistance"
                                                :value="from_distance.value"
                                                :key="idxFromDistance"
                                            >
                                                {{ from_distance.text }}
                                            </b-form-select-option>
                                        </b-form-select>
                                        <b-input-group-prepend is-text>
                                            <b> - </b>
                                        </b-input-group-prepend>
                                        <b-form-select
                                            v-model="isFilter.to_distance"
                                            id="filter-to-distance"
                                            @change="handleSelectDistance"
                                            size="sm"
                                        >
                                            <template #first>
                                                <b-form-select-option :value="null">
                                                    {{ $t('APP.PLEASE_SELECT') }}
                                                </b-form-select-option>
                                            </template>
                                            <b-form-select-option
                                                v-for="(to_distance, idxToDistance) in listOptionDistance"
                                                :value="to_distance.value"
                                                :key="idxToDistance"
                                            >
                                                {{ to_distance.text }}
                                            </b-form-select-option>
                                        </b-form-select>
                                    </b-input-group>
                                </b-form-group>
                            </div>
                        </b-col>

                        <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                            <!-- Filter Nhiên liệu -->
                            <div class="item-form">
                                <b-form-group
                                    label-cols-lg="3"
                                    content-cols-lg="9"
                                    :label="$t('SHOP_CAR.HOME.FILTER.FUEL_TYPE')"
                                    label-for="filter-fuel-type"
                                    class="mb-0"
                                >
                                    <b-form-select
                                        id="filter-fuel-type"
                                        v-model="isFilter.fuel_type"
                                        :options="listFuelType"
                                        size="sm"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <!-- Filter Hộp số -->
                            <div class="item-form">
                                <b-form-group
                                    label-cols-lg="3"
                                    content-cols-lg="9"
                                    :label="$t('SHOP_CAR.HOME.FILTER.GEAR_BOX')"
                                    label-for="filter-gear-box"
                                    class="mb-0"
                                >
                                    <b-form-select
                                        id="filter-gear-box"
                                        v-model="isFilter.gear_box"
                                        :options="listGearBox"
                                        size="sm"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <!-- Filter Màu xe -->
                            <div class="item-form">
                                <b-form-group
                                    label-cols-lg="3"
                                    content-cols-lg="9"
                                    :label="$t('SHOP_CAR.HOME.FILTER.COLOR')"
                                    label-for="filter-color"
                                    class="mb-0"
                                >
                                    <b-form-select
                                        id="filter-color"
                                        v-model="isFilter.color"
                                        :options="listColor"
                                        size="sm"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="text-center">
                            <b-button
                                variant="danger"
                                class="mt-2 btn-default btn-remove-filter"
                                @click="onClickResetFilter()"
                            >
                                <i class="fa fa-trash mr-2" />
                                {{ $t('APP.BUTTON_RESET_FILTER') }}
                            </b-button>
                        </b-col>
                        <b-col class="text-center">
                            <b-button
                                class="mt-2 btn-app btn-default btn-filter"
                                @click="onClickFilter()"
                            >
                                <i class="fa fa-filter mr-2" />
                                {{ $t('APP.BUTTON_FILTER') }}
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
import CardListCategories from '@/components/CardListCategories';
import CardListModel from '@/components/CardListModelCar';
import CardListDetailCar from '@/components/CardListDetailCar';
import CardListRating from '@/components/CardListRating';

import {
    getFilterCategoriesList, 
    getListColor,
    getListFuleType,
    getListGearBox,
} from '@/api/modules/Home';
import { generateSelect, formatPrice, formatNumber, getValueInArrObj } from '@/utils/helper';
import { validInputNumber } from '@/utils/handleInput';

import CONSTANTS from '@/constants';

export default {
    name: 'FilterListCar',
    components: {
        CardListCategories,
        CardListModel,
        CardListDetailCar,
        CardListRating
    },
    props: {
        initVisible: {
            type: Boolean,
            default: true,
        },
        totalCar: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            isFilter: this.$store.getters.isFilter || {
                search: '',

                categories: null,
                models: null,
                car_details: null,
                rating: [],

                from_year: null,
                to_year: null,

                from_price: null,
                to_price: null,

                from_distance: null,
                to_distance: null,

                color: null,
                fuel_type: null,
                gear_box: null,
            },

            filterCategoriesList: [],
            filterModel: [],
            filterCarDetail: [],
            filterRating: [],

            listOptionYear: [],
            listOptionPrice: [],
            listOptionDistance: [],
            listColor: [],
            listFuelType: [],
            listGearBox: [],
        }
    },
    watch: {
        isFilter: {
            handler: async function() {
                await this.$store.dispatch('filter/setFilter', this.isFilter);
            },
            deep: true,
        }
    },
    created () {
        this.initData();
    },
    methods: {
        validInputNumber,
        formatPrice,
        formatNumber,
        async initData() {
            this.listOptionYear = this.handleGetListYear();
            this.listOptionPrice = this.handleGetListOptionPrice();
            this.listOptionDistance = this.handleGetListOptionDistance();
            this.handleGetFilterCategoriesList();
            this.handleGetListColor();
            this.handleGetListFuleType();
            this.handleGetListGearBox();
        },
        async handleGetFilterCategoriesList() {
            try {
                const { status_code, data } = await getFilterCategoriesList();

                if (status_code === 200) {
                    this.filterCategoriesList = data;

                    this.handleInitSelectBox();
                } else {
                    this.filterCategoriesList = [];
                }
            } catch (err) {
                this.filterCategoriesList = [];
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

            console.log("FILTER: ", this.$store.getters.isFilter);
        },
        async onClickResetFilter() {
            this.isFilter = {
                search: '',

                categories: null,
                models: null,
                car_details: null,
                rating: [],

                from_year: null,
                to_year: null,

                from_price: null,
                to_price: null,

                from_distance: null,
                to_distance: null,

                color: null,
                fuel_type: null,
                gear_box: null,
            }

            this.filterCategoriesList = [];
            this.filterModel = [];
            this.filterCarDetail = [];
            this.filterRating = [];

            await this.$store.dispatch('filter/setFilter', this.isFilter)
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
        handleGetListOptionPrice() {
            let idx = 0;
            const len = CONSTANTS.VALUE.LIST_OPTION_PRICE.length;
            const result = [];
            
            while (idx < len) {
                const option = CONSTANTS.VALUE.LIST_OPTION_PRICE[idx];

                result.push({
                    value: option,
                    text: formatNumber(option),
                })

                idx++;
            }

            return result;
        },
        handleGetListOptionDistance() {
            const result = [
                {
                    value: CONSTANTS.VALUE.MIX_DISTANCE,
                    text: `${CONSTANTS.VALUE.MIX_DISTANCE} km`,
                }
            ];

            let item = CONSTANTS.VALUE.MIX_DISTANCE;
            const step = CONSTANTS.VALUE.STEP_DISTANCE || 10000;

            while (item < CONSTANTS.VALUE.MAX_DISTANCE) {
                item = item + step;

                result.push({
                    value: item,
                    text: `${formatNumber(item)} km`,
                });
            }

            return result;
        },
        handleSelectYear() {
            if ((this.isFilter.from_year > this.isFilter.to_year) && (this.isFilter.to_year !== null)) {
                this.isFilter.to_year = this.isFilter.from_year;
            }
        },
        handleSelectPrice() {
            if ((this.isFilter.from_price > this.isFilter.to_price) && (this.isFilter.to_price !== null)) {
                this.isFilter.to_price = this.isFilter.from_price;
            }
        },
        handleSelectDistance() {
            if ((this.isFilter.from_distance > this.isFilter.to_distance) && (this.isFilter.to_distance !== null)) {
                this.isFilter.to_distance = this.isFilter.from_distance;
            }
        },
        handleInitSelectBox() {
            const categories = this.$store.getters.isFilter.categories;
            const models = this.$store.getters.isFilter.models;
            const carDetail = this.$store.getters.isFilter.car_details;
            const rating = this.$store.getters.isFilter.rating;

            if (categories) {
                this.isFilter.categories = categories;

                this.handleSelectFilterCategories(categories);
            }

            if (models) {
                this.isFilter.models = models;

                this.handleSelectFilterModel(models);
            }

            if (carDetail) {
                this.isFilter.car_details = carDetail;

                this.handleSelectFilterCarDetail(carDetail);
            }

            if (rating) {
                this.isFilter.rating = rating;

                this.handleSelectFilterRating(rating);
            }
        },
        handleSelectFilterCategories(value) {
            if (value) {
                this.isFilter.categories = value;

                this.filterModel = getValueInArrObj(this.filterCategoriesList, value._id, "_id", "category_detail");
                this.filterCarDetail = [];
                this.filterRating = [];
                this.isFilter.models = null;
                this.isFilter.car_details = null;
                this.isFilter.rating = [];
                this.$store.dispatch("filter/resetFilterModels"); 
                this.$store.dispatch("filter/resetFilterDetailCar"); 
                this.$store.dispatch("filter/resetFilterRating"); 

                return;
            }
        },
        handleSelectFilterModel(value) {
            if (value) {
                this.isFilter.models = value;

                this.filterCarDetail = getValueInArrObj(this.filterModel, value.model_name, "model_name", "model_detail");
                this.filterRating = [];
                this.isFilter.car_details = null;
                this.isFilter.rating = [];
                this.$store.dispatch("filter/resetFilterDetailCar"); 
                this.$store.dispatch("filter/resetFilterRating"); 

                return;
            }
        },
        handleSelectFilterCarDetail(value) {
            if (value) {
                this.isFilter.car_details = value;

                this.filterRating = getValueInArrObj(this.filterCarDetail, value.detail_name, "detail_name", "rating");
                this.isFilter.rating = [];
                this.$store.dispatch("filter/resetFilterRating"); 

                return;
            }
        },
        handleSelectFilterRating(value) {
            if (value) {
                this.isFilter.rating = value;
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

.row .no-float {
    display: table-cell;
    float: none;
}
</style>