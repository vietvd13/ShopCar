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
                                        :options="listCategories"
                                    >
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                {{ $t('DASHBOARD.CAR.FORM.PLACEHOLDER_CATEGORIES') }}
                                            </b-form-select-option>
                                        </template>

                                        <b-form-select-option :value="-1">
                                            {{ $t('APP.OPTION_OTHER') }}
                                        </b-form-select-option>
                                    </b-form-select>

                                    <b-form-input 
                                        v-show="isForm.categories === -1"
                                        class="mt-2"
                                        v-model="otherCategories"
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_CATEGORIES')" 
                                    />
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
                                        v-model="isForm.contact" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_CONTACT')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.NAME') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.saller" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_NAME')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.EMPLOYEE_ID') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.employeeId" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_EMPLOYEE_ID')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.AFFILIATED_COMPANY') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.affiliatedCompany" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_AFFILIATED_COMPANY')" 
                                    />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="title-car-infor">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.BUSINESS_ADDRESS') }}
                                </b-td>
                                <b-td>
                                    <b-form-input 
                                        v-model="isForm.businessAddress" 
                                        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_BUSINESS_ADDRESS')" 
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
    getListCategories,
    getListColor,
    getListFuleType,
    getListGearBox,
    getListCarType
} from '@/api/modules/Home';
import { generateSelect } from '@/utils/helper';

export default {
    name: 'InputBasicInfor',
    data() {
        return {
            isForm: {
                price: null,
                categories: null,
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
            listColor: [],
            listFuelType: [],
            listGearBox: [],
            listCarType: [],

            otherCategories: '',
            otherFuelType: '',
            otherColor: '',
            otherGearBox: '',
            otherCarType: '',
        }
    },
    watch: {
        isForm: {
            handler: function() {
                this.$emit('isForm', this.isForm);
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
            this.handleGetListColor();
            this.handleGetListFuleType();
            this.handleGetListGearBox();
            this.handleGetListCarType();
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