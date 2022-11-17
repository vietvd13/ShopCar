<template>
    <div class="banner-managment">
        <div class="banner-management__preview text-center">
            <div class="show-image">
                <b-img 
                    :src="`${domainImage}${urlBanner}`"
                    fluid
                    thumbnail 
                />

                <b-form-file 
                    v-model="fileBanner" 
                    id="import-banner"
                    plain
                    ref="banner"
                />
            </div>
        </div>

        <div class="banner-management__update text-center">
            <b-row>
                <b-col>
                    <b-button
                        class="btn-app"
                        @click="previewImage()"
                    >
                        {{ $t('APP.PREVIEW') }}
                    </b-button>
                </b-col>

                <b-col>
                    <b-button
                        class="btn-app"
                        @click="uploadBanner()"
                    >
                        {{ $t('APP.UPDATE_BANNER') }}
                    </b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { 
    getBanner
} from '@/api/modules/Dashboard';

export default {
    name: 'BannerManagement',
    data() {
        return {
            urlBanner: '',
            fileBanner: null
        }
    },
    computed: {
        domainImage() {
            return process.env.VUE_APP_URL_IMAGE; 
        }
    },
    created () {
        this.handleGetBanner();
    },
    methods: {
        async handleGetBanner() {
            try {
                const { status_code, data } = await getBanner();

                if (status_code === 200) {
                    this.urlBanner = data;
                } else {
                    this.urlBanner = '';
                }
            } catch (err) {
                this.urlBanner = '';
                console.log(err);
            }
        },
        previewImage() {
            this.$refs.banner.$el.click();
        },
        async uploadBanner() {

        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.banner-management {
    &__preview {
        margin-bottom: 10px;

        #import-banner {
            display: none;
        }
    }

    &__update {
        button {
            min-width: 200px;
            margin-bottom: 10px;
        }
    }
}
</style>