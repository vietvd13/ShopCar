<template>
    <div class="car-saller-infor">
        <b-card>
            <p class="title-content">
                {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_SALLER_INFOR') }}
            </p>

            <div class="content-infor">
                <b-row>
                    <b-col cols="3" xs="3" sm="3" md="3" lg="3" class="text-center">
                        <b-img-lazy
                            :src="require('@/assets/images/noimage.webp')"
                            :blank-src="require('@/assets/images/noimage.webp')"
                            fluid
                            thumbnail
                            class="saller-avatar"
                            alt="Saller Avatar"
                            v-bind="{
                                height: 400,
                                width: 'auto'
                            }"
                        />
                    </b-col>

                    <b-col cols="9" xs="9" sm="9" md="9" lg="9" align-self="center">
                        <b-row class="mb-2">
                            <b-col cols="5" xs="5" sm="5" md="5" lg="3">
                                <span class="text-title">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.NAME') }}:
                                </span>
                            </b-col>

                            <b-col cols="7" xs="7" sm="7" md="7" lg="7">
                                {{ fullname }}
                            </b-col>
                        </b-row>

                        <b-row class="mb-2">
                            <b-col cols="5" xs="5" sm="5" md="5" lg="3">
                                <span class="text-title">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.CONTACT') }}:
                                </span>
                            </b-col>

                            <b-col cols="7" xs="7" sm="7" md="7" lg="7">
                                {{ phone }}
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col cols="5" xs="5" sm="5" md="5" lg="3">
                                <span class="text-title">
                                    {{ $t('SHOP_CAR.DETAIL_CAR.EMPLOYEE_ID') }}:
                                </span>
                            </b-col>

                            <b-col cols="7" xs="7" sm="7" md="7" lg="7">
                                {{ employeeId }}
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
    name: 'SallerInfor',
    props: {
        fullname: {
            type: String,
            default: ''
        },
        phone: {
            type: String,
            default: ''
        },
        employeeId: {
            type: String,
            default: '',
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.car-saller-infor {
    margin-bottom: 10px;

    .title-content {
        font-size: 22px;
        font-weight: 600;
    }

    .content-infor {
        .saller-avatar {
            height: 144px;
            width: 94px;

            object-fit: cover;
        }

        .text-title {
            font-weight: bold;
        }
    }
}
</style>