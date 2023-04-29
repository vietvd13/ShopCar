<template>
    <div class="car-buying-insurance">
        <div class="car-buying-insurance__header">
            <TitleContent>
                {{ $t('SHOP_CAR.CAR_BUYING_POLICY.TITLE') }}
            </TitleContent>
        </div>

        <b-card>
            <template v-if="file.length">
                <b-img-lazy
                    v-for="(image, idx) in file"
                    :key="idx"
                    :src="`${domainImage}${image}`"
                    :blank-src="require('@/assets/images/noimage.webp')"
                    fluid
                    :alt="image"
                    class="display-image"
                />
            </template>

            <template v-else>
                <b-row>
                    <b-col class="text-center">
                        <span>{{ $t('APP.NO_DATA') }}</span>
                    </b-col>
                </b-row>
            </template>
        </b-card>
    </div>
</template>

<script>
import TitleContent from './components/TitleContent.vue';
import { getFilePDFInsurance } from '@/api/modules/Home';
import { setLoading } from '@/utils/setLoading';

export default {
    name: 'ShopCarInsurance',
    components: {
        TitleContent,
    },
    computed: {
        domainImage() {
            return import.meta.env.VITE_URL_IMAGE;
        }
    },
    data() {
        return {
            file: []
        }
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            setLoading(true);
            await this.handleGetFilePDFInsurance();
            setLoading(false);
        },
        async handleGetFilePDFInsurance() {
            try {
                const { status_code, data } = await getFilePDFInsurance();

                if (status_code === 200) {
                    if (Array.isArray(data.file)) {
                        this.file = data.file;
                    } else {
                        this.file = [];
                    }
                } else {
                    this.file = [];
                }
            } catch (err) {
                this.file = [];
                console.log(err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.car-buying-insurance {
    margin-bottom: 10px;

    &__header {
        margin-bottom: 10px;
    }

    .display-image {
        width: 100%;
    }
}
</style>