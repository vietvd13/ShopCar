<template>
    <div class="import-image-car">
        <p class="title-content">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_IMAGE') }}
        </p>

        <b-row>
            <b-col
                cols="12" xs="12" sm="12" md="12" lg="6"
            >
                <div
                    class="display-image-preview mb-xs-2 mb-sm-2 mb-lg-0"
                    :style="`height: ${handleSizePreview()}px;`"
                >
                    <b-img-lazy
                        :src="primary_image"
                        :blank-src="require('@/assets/images/noimage.webp')"
                        fluid
                        alt="Primary Image Car"
                        v-bind="{
                            height: 400,
                            width: 'auto'
                        }"
                    />
                </div>
            </b-col>

            <b-col
                cols="12" xs="12" sm="12" md="12" lg="6"
            >
                    <div class="zone-import-image">
                        <b-form-file
                            plain
                            :ref="`${refName}`"
                            v-model="filesImport"
                            multiple
                            accept="image/*"
                        />
                        <b-button
                            block
                            class="btn-app"
                            @click="onClickImport"
                        >
                            {{ $t('APP.IMPORT_IMAGE') }}
                        </b-button>
                    </div>
                    <div 
                        class="zone-images"
                        v-if="items.length"
                    >
                        <div 
                            class="list-image"
                            :style="`height: calc(${handleSizePreview()}px - 41px);`"
                        >
                            <draggable
                                :list="items"
                            >
                                <div
                                    v-for="(image, idx) in items"
                                    :key="idx"
                                    class="item-image"
                                >
                                    <b-img
                                        :src="handleViewImage(image.type_import, image.url)"
                                        @click="onClickImage(image)"
                                    />
                                    <div class="btn-remove-image">
                                        <b-button
                                            variant="danger"
                                            @click="onClickRemove(idx)"
                                            size="sm"
                                        >
                                            {{ $t('APP.DELETE') }}
                                        </b-button>
                                    </div>
                                </div>
                            </draggable>
                        </div>
                    </div>
                    <div 
                        v-else
                        class="no-images"
                        :style="`height: calc(${handleSizePreview()}px - 41px);`"
                    >
                        {{ $t('APP.NO_DATA') }}
                    </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    name: 'ImportImageCar',
    components: {
        draggable,
    },
    props: {
        refName: {
            type: String,
            required: false,
            default: 'importImage'
        },
        items: {
            type: Array,
            required: false,
            default: () => {
                return [];
            }
        }
    },
    computed: {
        domainImage() {
            return import.meta.env.VITE_URL_IMAGE;
        }
    },
    watch: {
        filesImport: {
            handler: function() {
                const len = this.filesImport.length;
                let idx = 0;

                while (idx < len) {
                    const FILE = {
                        url: this.filesImport[idx],
                        type_import: 'new',
                    }

                    this.$emit('import', FILE);

                    idx++;
                }

                this.$refs[this.refName].reset();
            },
            deep: true,
        }
    },
    data() {
        return {
            primary_image: require('@/assets/images/noimage.webp'),
            idx_primary_image: null,
            filesImport: null,
        }
    },
    methods: {
        onClickImport() {
            this.$refs[this.refName].$el.click();
        },
        handleViewImage(type, image) {
            if (type === 'old') {
                return `${this.domainImage}${image}`
            }

            if (type === 'new') {
                return this.convertFile2Image(image);
            }

            return '';
        },
        onClickImage(image) {
            if (image.type_import === 'old') {
                this.primary_image = `${this.domainImage}${image.url}`
            }

            if (image.type_import === 'new') {
                this.primary_image = this.convertFile2Image(image.url);
            }
        },
        onClickRemove(idx) {
            this.$emit('remove', idx);
        },
        convertFile2Image(file) {
            if (file) {
                return URL.createObjectURL(file);
            }

            return '';
        },
        handleSizePreview() {
            const SIZE = this.$store.getters.sizeScreen.type;
            const MAP_SIZE = {
                xl: 400,
                lg: 280,
                md: 280,
                sm: 280,
                xs: 280,
            };

            return MAP_SIZE[SIZE];
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.import-image-car {
    .title-content {
        font-size: 22px;
        font-weight: 600;
    }

    .zone-import-image {
        input {
            display: none;
        }

        button {
            border-radius: 0;
        }
    }

    .zone-images {
        border: 1px solid $porcelain;

        .list-image {
            margin: 5px 0;
            overflow-y: scroll;

            div {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;

                .item-image {
                    width: 110px;
                    margin: 5px;
                    cursor: pointer;

                    img {
                        height: auto;
                        width: 110px;
                    }

                    button {
                        width: 100%;
                        border-radius: 0;
                    }
                }
            }
        }
    }

    .no-images {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $porcelain;
    }
}

.display-image-preview {
    display: flex;
    justify-content: center;
}
</style>