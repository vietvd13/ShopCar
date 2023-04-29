<template>
    <div class="banner-managment">
        <div class="banner-management__preview text-center">
            <div class="show-image">
                <b-img 
                    :src="handlePreviewBanner()"
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
                        @click="onClickUploadImage()"
                    >
                        {{ $t('APP.PREVIEW') }}
                    </b-button>
                </b-col>

                <b-col>
                    <b-button
                        class="btn-app"
                        @click="handleEditBanner()"
                    >
                        {{ $t('APP.UPDATE_BANNER') }}
                    </b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { getBanner, postEditBanner } from '@/api/modules/Dashboard';
import { postImage } from '@/api/modules/Upload';
import Toast from '@/toast';

export default {
    name: 'BannerManagement',
    data() {
        return {
            type: 'API',
            urlBanner: '',
            fileBanner: null,
            previewImage: null,
        }
    },
    computed: {
        domainImage() {
            return import.meta.env.VITE_URL_IMAGE; 
        }
    },
    watch: {
        fileBanner() {
            if (this.fileBanner) {
                this.previewImage = URL.createObjectURL(this.fileBanner);
                this.type = 'UPLOAD';
            }
        }
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            setLoading(true);

            await this.handleGetBanner();

            setLoading(false);
        },
        async handleGetBanner() {
            try {
                const { status_code, data } = await getBanner();
                this.type = 'API';

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
        onClickUploadImage() {
            this.$refs.banner.$el.click();
        },
        handlePreviewBanner() {
            if (this.type === 'API') {
                return `${this.domainImage}${this.urlBanner}`;
            }

            if (this.type === 'UPLOAD') {
                return this.previewImage;
            }

            return '';
        },
        async uploadBanner() {
            try {
                const BANNER = this.fileBanner;

                const { status_code, data } = await postImage(BANNER);

                if (status_code === 200) {
                    return data.image;
                }

                return null;
            } catch (err) {
                console.log(err);

                return null;
            }
        },
        async handleEditBanner() {
            try {
                setLoading(true);

                let BANNER = null;

                if (this.type === 'API') {
                    BANNER = this.urlBanner;
                }

                if (this.type === 'UPLOAD') {
                    BANNER = await this.uploadBanner();
                }

                const BODY = {
                    image: BANNER
                }

                const { status_code } = await postEditBanner(BODY);

                
                if (status_code === 200) { 
                    Toast.success(this.$t('TOAST_MESSAGE.UPDATE_BANNER_SUCCESS'));
                } else {
                    Toast.warning(this.$t('TOAST_MESSAGE.UPDATE_BANNER_ERROR'));
                }
                
                await this.handleGetBanner();

                setLoading(false);
            } catch (err) {
                await this.handleGetBanner();

                Toast.warning(this.$t('TOAST_MESSAGE.UPDATE_BANNER_ERROR'));

                setLoading(false);
                console.log(err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.banner-management {
    &__preview {
        margin-bottom: 10px;

        .show-image {
            max-height: 370px;

            img {
                object-fit: scale-down;
                max-height: 370px;
            }

            #import-banner {
                display: none;
            }
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