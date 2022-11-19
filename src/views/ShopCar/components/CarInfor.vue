<template>
    <div class="car-infor">
        <b-card>
            <p class="title-content">
                {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_BASIC_INFOR') }}
            </p>

            <div class="content-infor">
                <b-row>
                    <b-col cols="12" xs="12" sm="12" md="12" lg="12">
                        <b-row>
                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.YEAR') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ year }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.FUEL_TYPE') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ fuelType }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.COLOR') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ color }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.LICENSE_PLATE') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ licensePlate }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.FORECLOSURE_MORTGAGE') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ foreclosureMortgage }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.NON_PAYMENT_OF_TAX') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ nonpPaymentOfTax }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.ACCIDENT') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ accident }}
                                    </b-col>
                                </b-row> 
                            </b-col>

                            <b-col cols="12" xs="12" sm="12" md="12" lg="6">
                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.FIRST_REGISTRATION_DATE') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ firstRegistrationDate }}
                                    </b-col>
                                </b-row> 
                                
                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.GEARBOX') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ gearbox }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.DISTANCE_DRIVEN') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ distanceDriven }} km
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.VEHICLE_IDENTIFICATION_NUMBER') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ vehicleIdentificationNumber }}
                                    </b-col>
                                </b-row> 

                                <b-row class="mb-2">
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.MODEL_NAME') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ modelName }}
                                    </b-col>
                                </b-row> 

                                <b-row>
                                    <b-col cols="5">
                                        <span class="title-text">
                                            {{ $t('SHOP_CAR.DETAIL_CAR.PRESENTATION_NUMBER') }}:
                                        </span>
                                    </b-col>

                                    <b-col cols="7">
                                        {{ presentationNumber }}
                                    </b-col>
                                </b-row> 
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'CarInfor',
    props: {
        year: {
            type: String,
            default: '' 
        },
        fuelType: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        licensePlate: {
            type: String,
            default: ''
        },
        foreclosureMortgage: {
            type: String,
            default: '' 
        },
        nonpPaymentOfTax: {
            type: String,
            default: '',
        },
        accident: {
            type: String,
            default: '',   
        },
        firstRegistrationDate: {
            type: String,
            default: '',   
        },
        gearbox: {
            type: String,
            default: '',   
        },
        distanceDriven: {
            type: Number,
            default: 0, 
        },
        vehicleIdentificationNumber: {
            type: String,
            default: '', 
        },
        modelName: {
            type: String,
            default: '',  
        },
        presentationNumber: {
            type: String,
            default: '', 
        }
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

    .title-text {
        font-weight: 600;
    }
}
</style>