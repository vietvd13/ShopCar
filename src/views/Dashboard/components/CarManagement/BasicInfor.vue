<template>
    <div class="input-basic-infor">
        <p class="title-content">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_BASIC_INFOR') }}
        </p>

        <div class="input-basic-infor-form">
            <b-row>
                <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="7">
                    <b-table-simple
                        bordered
                        no-border-collapse
                    >
                        <b-tbody>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.PRICE') }}
                                </b-td>
                                <b-td colspan="3" class="td-price">
                                    <b-form-input 
                                        v-model="isForm.price" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_PRICE')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.CATEGORIES') }}
                                </b-td>
                                <b-td colspan="3" class="td-categories">
                                    <b-form-select 
                                        v-model="isForm.categories"
                                        @change="onSelectCategories"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_CATEGORIES') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option
                                            v-for="(category, idxCategory) in listCategories"
                                            :value="category.category_name"
                                            :key="`category-${idxCategory + 1}`"
                                        >
                                            {{ category.category_name }}
                                        </b-form-select-option>
                                    </b-form-select>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.MODEL') }}
                                </b-td>
                                <b-td colspan="3" class="td-car-model">
                                    <b-form-select 
                                        v-model="isForm.model_name" 
                                        :disabled="isForm.categories === null"
                                        @change="onSelectModel"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_MODEL') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option
                                            v-for="(modelCar, idxModelCar) in listModelCar"
                                            :value="modelCar.model_name"
                                            :key="`modelCar-${idxModelCar + 1}`"
                                        >
                                            {{ modelCar.model_name }}
                                        </b-form-select-option>
                                    </b-form-select>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.HOME.FILTER.DETAIL_CAR') }}
                                </b-td>
                                <b-td colspan="3" class="td-car-model">
                                    <b-form-select 
                                        v-model="isForm.model_detail" 
                                        :disabled="isForm.model_name === null"
                                        @change="onSelectModelDetail"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_CAR_DETAIL') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option
                                            v-for="(modelDetail, idxModelDetail) in listModelDetail"
                                            :value="modelDetail.detail_name"
                                            :key="`modelDetail-${idxModelDetail + 1}`"
                                        >
                                            {{ modelDetail.detail_name }}
                                        </b-form-select-option>
                                    </b-form-select>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t("SHOP_CAR.HOME.FILTER.RATING") }}
                                </b-td>
                                <b-td colspan="3" class="td-car-model">
                                    <b-form-select 
                                        v-model="isForm.rating" 
                                        :disabled="isForm.model_detail === null"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('APP.PLEASE_SELECT') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option
                                            v-for="(rating, idxRating) in listRating"
                                            :value="rating"
                                            :key="`rating-${idxRating + 1}`"
                                        >
                                            {{ rating }}
                                        </b-form-select-option>
                                    </b-form-select>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.LICENSE_PLATE') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.licensePlate" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_LICENSE_PLATE')" 
                                    />
                                </b-td>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.YEAR') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.year" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_YEAR')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.DISTANCE_DRIVEN') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.distanceDriven" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_DISTANCE_DRIVEN')" 
                                    />
                                </b-td>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.FUEL_TYPE') }}
                                </b-td>
                                <b-td>
                                    <b-form-select 
                                        v-model="isForm.fuelType" 
                                        :options="listFuelType"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_FUEL_TYPE') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option :value="-1">
                                            {{ $t('APP.OPTION_OTHER') }}
                                        </b-form-select-option>
                                    </b-form-select>

                                    <b-form-input 
                                        v-show="isForm.fuelType === -1"
                                        class="mt-2"
                                        v-model="otherFuelType"
                                        :placeholder="$t('APP.PLACEHOLDER_PLEASE_INPUT')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.TRANSMISSION') }}
                                </b-td>
                                <b-td>
                                    <b-form-select 
                                        v-model="isForm.gearbox" 
                                        :options="listGearBox"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_TRANSMISSION') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option :value="-1">
                                            {{ $t('APP.OPTION_OTHER') }}
                                        </b-form-select-option>
                                    </b-form-select>

                                    <b-form-input 
                                        v-show="isForm.gearbox === -1"
                                        class="mt-2"
                                        v-model="otherGearBox"
                                        :placeholder="$t('APP.PLACEHOLDER_PLEASE_INPUT')" 
                                    />
                                </b-td>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.DISPLACEMENT') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.cylynder" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_DISPLACEMENT')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.COLOR') }}
                                </b-td>
                                <b-td>
                                    <b-form-select 
                                        v-model="isForm.color" 
                                        :options="listColor"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_COLOR') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option :value="-1">
                                            {{ $t('APP.OPTION_OTHER') }}
                                        </b-form-select-option>
                                    </b-form-select>

                                    <b-form-input 
                                        v-show="isForm.color === -1"
                                        class="mt-2"
                                        v-model="otherColor"
                                        :placeholder="$t('APP.PLACEHOLDER_PLEASE_INPUT')" 
                                    />
                                </b-td>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.CAR_TYPE') }}
                                </b-td>
                                <b-td>
                                    <b-form-select 
                                        v-model="isForm.carType" 
                                        :options="listCarType"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_COLOR') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option :value="-1">
                                            {{ $t('APP.OPTION_OTHER') }}
                                        </b-form-select-option>
                                    </b-form-select>

                                    <b-form-input 
                                        v-show="isForm.carType === -1"
                                        class="mt-2"
                                        v-model="otherCarType"
                                        :placeholder="$t('APP.PLACEHOLDER_PLEASE_INPUT')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.SEIZURE') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.seizure" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_SEIZURE')" 
                                    />
                                </b-td>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.MORTGAGE') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.mortgage" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_MORTGAGE')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.PRESENTATION_NUMBER') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.presentationNumber"
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_PRESENTATION_NUMBER')" 
                                    />
                                </b-td>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.STORAGE_LOCATION') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.storageLocation" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_STORAGE_LOCATION')" 
                                    />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" xs="12" sm="12" md="12" lg="12" xl="5">
                    <b-table-simple
                        bordered
                        no-border-collapse
                    >
                        <b-tbody>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.CONTACT') }}
                                </b-td>
                                <b-td class="td-contact">
                                    <b-form-input 
                                        :value="profile.phone_number" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_CONTACT')"
                                        disabled
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.NAME') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        :value="profile.name" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_NAME')"
                                        disabled
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.AFFILIATED_COMPANY') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        :value="profile.company_name" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_AFFILIATED_COMPANY')"
                                        disabled
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.BUSINESS_ADDRESS') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        :value="profile.company_address" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_BUSINESS_ADDRESS')"
                                        disabled
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.PARKING_LOCATION') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.parkingLocation" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_PARKING_LOCATION')" 
                                    />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import {
    getFilterCategoriesList,
    getListColor,
    getListFuleType,
    getListGearBox,
    getListCarType,
    getAllModelCar
} from '@/api/modules/Home';

import { getValueInArrObj } from '@/utils/helper';

import { generateSelect } from '@/utils/helper';

export default {
    name: 'InputBasicInfor',
    props: {
        oldForm: {
            type: Object,
            default: function() {
                return {
                    price: null,
                    categories: null,
                    model: null,
                    model_detail: null,
                    licensePlate: null,
                    year: null,
                    distanceDriven: null,
                    fuelType: null,
                    gearbox: null,
                    cylynder: null,
                    color: null,
                    carType: null,
                    seizure: null,
                    mortgage: null,
                    presentationNumber: null,
                    storageLocation: null,
                    contact: null,
                    saller: null,
                    employeeId: null,
                    affiliatedCompany: null,
                    businessAddress: null,
                    parkingLocation: null,

                    otherCategories: '',
                    otherModel: '',
                    otherFuelType: '',
                    otherColor: '',
                    otherGearBox: '',
                    otherCarType: '',
                }
            }
        },
    },
    data() {
        return {
            isForm: {
                price: null,
                categories: null,
                model: null,
                model_detail: null,
                rating: null,
                licensePlate: null,
                year: null,
                distanceDriven: null,
                fuelType: null,
                gearbox: null,
                cylynder: null,
                color: null,
                carType: null,
                seizure: null,
                mortgage: null,
                presentationNumber: null,
                storageLocation: null,
                contact: null,
                saller: null,
                employeeId: null,
                affiliatedCompany: null,
                businessAddress: null,
                parkingLocation: null,
            },

            listCategories: [],
            listModelCar: [],
            listModelDetail: [],
            listRating: [],

            listColor: [],
            listFuelType: [],
            listGearBox: [],
            listCarType: [],

            otherCategories: '',
            otherModel: '',
            otherFuelType: '',
            otherColor: '',
            otherGearBox: '',
            otherCarType: '',

            listModel: {},
            optionModel: []
        }
    },
    computed: {
        profile() {
            return this.$store.getters.profile; 
        }
    },
    watch: {
        oldForm: {
            handler: function() {
                this.isForm = this.oldForm;

                if (this.oldForm.model_name) {
                    this.listModelCar = getValueInArrObj(this.listCategories, this.oldForm.categories, "category_name", "category_detail");
                    this.isForm.model_name = this.oldForm.model_name;
                }

                if (this.oldForm.model_detail) {
                    this.listModelDetail = getValueInArrObj(this.listModelCar, this.oldForm.model_name, "model_name", "model_detail");
                    this.isForm.model_detail = this.oldForm.model_detail;
                }

                if (this.oldForm.rating) {
                    this.listRating = getValueInArrObj(this.listModelDetail, this.oldForm.model_detail, "detail_name", "rating");
                    this.isForm.rating = this.oldForm.rating;
                }
            },
            deep: true,
        },
        isForm: {
            handler: function() {
                if (JSON.stringify(this.isForm) !== JSON.stringify(this.oldForm)) {
                    this.$emit('isForm', this.isForm);
                }
            },
            deep: true,
        },
        otherCategories() {
            this.$emit('otherCategories', this.otherCategories);
        },
        otherFuelType() {
            this.$emit('otherFuelType', this.otherFuelType);
        },
        otherColor() {
            this.$emit('otherColor', this.otherColor);
        },
        otherGearBox() {
            this.$emit('otherGearBox', this.otherGearBox);
        },
        otherCarType() {
            this.$emit('otherCarType', this.otherCarType);
        },
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            this.handleGetListCategories();
            this.handleGetAllModelCar();
            this.handleGetListColor();
            this.handleGetListFuleType();
            this.handleGetListGearBox();
            this.handleGetListCarType();
        },
        async handleGetListCategories() {
            try {
                const { status_code, data } = await getFilterCategoriesList();

                if (status_code === 200) {
                    this.listCategories = data;
                } else {
                    this.listCategories = [];
                }
            } catch (err) {
                this.listCategories = [];
                console.log(err);
            }
        },
        onSelectCategories() {
            if (this.isForm.categories) {
                this.isForm.model_name = null;
                this.listModelCar = getValueInArrObj(this.listCategories, this.isForm.categories, "category_name", "category_detail");

                this.isForm.model_detail = null;
                this.listModelDetail = [];

                this.isForm.rating = null;
                this.listRating = [];
            } else {
                this.isForm.model_name = null;
                this.listModelCar = [];

                this.isForm.model_detail = null;
                this.listModelDetail = [];

                this.isForm.rating = null;
                this.listRating = [];
            }
        },
        onSelectModel() {
            if (this.isForm.model_name) {
                this.isForm.model_detail = null;
                this.listModelDetail = getValueInArrObj(this.listModelCar, this.isForm.model_name, "model_name", "model_detail");

                this.isForm.rating = null;
                this.listRating = [];
            } else {
                this.isForm.model_detail = null;
                this.listModelDetail = [];

                this.isForm.rating = null;
                this.listRating = [];
            }
        },
        onSelectModelDetail() {
            if (this.isForm.model_detail) {
                this.isForm.rating = null;
                this.listRating = getValueInArrObj(this.listModelDetail, this.isForm.model_detail, "detail_name", "rating");
            } else {
                this.isForm.rating = null;
                this.listRating = [];
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
        async handleGetListCarType() {
            try {
                const { status_code, data } = await getListCarType();

                if (status_code === 200) {
                    this.listCarType = generateSelect(data, true);
                } else {
                    this.listCarType = [];
                }
            } catch (err) {
                this.listCarType = [];
                console.log(err);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.title-content {
    font-size: 22px;
    font-weight: 600;
}

td.title-car-infor {
    font-weight: 600;
    background-color: $concrete;
    color: $mine-shaft;
    text-align: center;
    vertical-align: middle;

    width: 100px;
}

td {
    font-weight: 500;
    vertical-align: middle;
    padding: 10px;
    height: 80px;
}

.td-price {
    span {
        font-size: 25px;
        font-weight: bold;
        color: $alizarin-crimson;
    }
}

.td-contact {
    font-size: 25px;
    font-weight: bold;
}
</style>