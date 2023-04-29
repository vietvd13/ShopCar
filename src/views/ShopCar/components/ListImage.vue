<template>
    <div id="tab-car-images">
        <MenuDetailCar :tab-active="'tab-car-images'" />
        <b-card>
            <p class="title-content">
                {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_IMAGE') }}
            </p>
            <b-row>
                <b-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="6"
                    lg="6"
                    v-for="image in items"
                    :key="image"
                >
                    <b-img-lazy
                        fluid
                        :src="`${domainImage}${image}`"
                        :blank-src="require('@/assets/images/noimage.webp')"
                        v-bind="{
                            height: 300,
                            width: 'auto'
                        }"
                        class="mb-4"
                    />
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import MenuDetailCar from '@/components/MenuDetailCar.vue';

export default {
    name: 'ListImage',
    components: {
        MenuDetailCar,
    },
    props: {
        items: {
            type: Array,
            default: function() {
                return []
            }
        },
    },
    computed: {
        domainImage() {
            return import.meta.env.VITE_URL_IMAGE;
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

img {
    height: auto;
    width: 100%;
}
</style>