<template>
    <div id="tab-car-infor" >
        <MenuDetailCar :tab-active="'tab-car-infor'" />
        <div class="car-infor">
            <b-card>
                <p class="title-content">
                    {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_BASIC_INFOR') }}
                </p>
                <div class="content-infor">
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
                                            <span>{{ formatPrice(price) }}</span> 만원
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.LICENSE_PLATE') }}
                                        </b-td>
                                        <b-td>
                                            {{ licensePlate }}
                                        </b-td>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.YEAR') }}
                                        </b-td>
                                        <b-td>
                                            {{ year }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.DISTANCE_DRIVEN') }}
                                        </b-td>
                                        <b-td>
                                            {{ distanceDriven }}
                                        </b-td>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.FUEL_TYPE') }}
                                        </b-td>
                                        <b-td>
                                            {{ fuelType }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.TRANSMISSION') }}
                                        </b-td>
                                        <b-td>
                                            {{ gearbox }}
                                        </b-td>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.DISPLACEMENT') }}
                                        </b-td>
                                        <b-td>
                                            {{ cylynder }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.COLOR') }}
                                        </b-td>
                                        <b-td>
                                            {{ color }}
                                        </b-td>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.CAR_TYPE') }}
                                        </b-td>
                                        <b-td>
                                            {{ carType }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.SEIZURE') }}
                                        </b-td>
                                        <b-td>
                                            {{ seizure }}
                                        </b-td>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.MORTGAGE') }}
                                        </b-td>
                                        <b-td>
                                            {{ mortgage }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.PRESENTATION_NUMBER') }}
                                        </b-td>
                                        <b-td>
                                            {{ presentationNumber }}
                                        </b-td>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.STORAGE_LOCATION') }}
                                        </b-td>
                                        <b-td>
                                            {{ storageLocation }}
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                        {{ profile }}
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
                                            {{ profile.phone_number }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.NAME') }}
                                        </b-td>
                                        <b-td>
                                            {{ profile.name }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.AFFILIATED_COMPANY') }}
                                        </b-td>
                                        <b-td>
                                            {{ profile.company_name }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.BUSINESS_ADDRESS') }}
                                        </b-td>
                                        <b-td>
                                            {{ profile.company_address }}
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="title-car-infor">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.PARKING_LOCATION') }}
                                        </b-td>
                                        <b-td>
                                            {{ parkingLocation }}
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
import { formatPrice } from '@/utils/helper';
import MenuDetailCar from '@/components/MenuDetailCar.vue';

export default {
    name: 'CarInfor',
    components: {
        MenuDetailCar,
    },
    props: {
        price: {
            type: [String, Number],
            default: 0,
        },
        licensePlate: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: '' 
        },
        distanceDriven: {
            type: Number,
            default: 0, 
        },
        fuelType: {
            type: String,
            default: ''
        },
        gearbox: {
            type: String,
            default: ''
        },
        cylynder: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        carType: {
            type: String,
            default: '',
        },
        seizure: {
            type: String,
            default: '',
        },
        mortgage: {
            type: String,
            default: '', 
        },
        presentationNumber: {
            type: String,
            default: '', 
        },
        storageLocation: {
            type: String,
            default: '',
        },
        contact: {
            type: String,
            default: '',
        },
        saller: {
            type: String,
            default: '',
        },
        employeeId: {
            type: String,
            default: '',
        },
        affiliatedCompany: {
            type: String,
            default: '',
        },
        businessAddress: {
            type: String,
            default: '',
        },
        parkingLocation: {
            type: String,
            default: '',
        }
    },
    computed: {
        profile() {
            return this.$store.getters.profile; 
        }
    },
    methods: {
        formatPrice
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.car-infor {
    margin-bottom: 10px;

    .title-content {
        font-size: 22px;
        font-weight: 600;
    }

    .title-car-infor {
        font-weight: 600;
        background-color: $concrete;
        color: $mine-shaft;
        text-align: center;
        vertical-align: middle;

        width: 110px;
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
}
</style>