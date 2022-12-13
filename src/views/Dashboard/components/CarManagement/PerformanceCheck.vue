<template>
    <div class="import-performance-check">
        <p class="title-content">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_PERFORMANCE_CHECK') }}
        </p>

        <div class="import-file">
            <label for="import-pdf">{{ $t('APP.DROP_FILE') }}</label>
            <div class="zone-import">
                <b-form-file
                    id="import-pdf"
                    v-model="fileImport.url"
                    :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_IMPORT_PERFORMANCE_CHECK')"
                    :drop-placeholder="$t('APP.DROP_FILE')"
                    :browse-text="$t('APP.DROP_FILE')"
                    accept="application/pdf"
                />
            </div>
        </div>

        <div class="preview-import-file" :key="handleViewPdf()">
            <ViewPDF 
                :file="handleViewPdf()" 
                class="view-pdf"
            />
        </div>
    </div>
</template>

<script>
import ViewPDF from '@/components/ViewPDF.vue';

export default {
    name: 'ImportPerformanceCheck',
    components: {
        ViewPDF,
    },
    props: {
        oldFile: {
            type: Object,
            default: function() {
                return {
                    url: '',
                    type: ''
                }
            }
        },
    },
    computed: {
        domainPDF() {
            return process.env.VUE_APP_URL_IMAGE;
        },
    },
    watch: {
        oldFile: {
            handler: function() {
                this.filePreview = this.oldFile;
            },
            deep: true,
        },
        fileImport: {
            handler: function() {
                this.$emit('file', {
                    url: this.fileImport.url,
                    type: 'new',
                });
                this.filePreview = {
                    type: 'new',
                    url: this.fileImport
                }
            },
            deep: true,
        }
    },
    data() {
        return {
            fileImport: {
                type: '',
                url: [],
            },
            filePreview: {
                type: '',
                url: '',
            },
        }
    },
    methods: {
        handleViewPdf() {
            if (this.filePreview) {
                if (this.filePreview.type === 'new') {
                    return URL.createObjectURL(this.fileImport.url);
                } 

                if (this.filePreview.type === 'old') {
                    return `${this.domainPDF}${this.filePreview.url}`;
                }
            }

            return null;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.import-performance-check {
    .title-content {
        font-size: 22px;
        font-weight: 600;
    }

    .preview-import-file {
        margin-top: 5px;
    }

    .view-pdf {
        width: 100%;
        height: 500px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
}

.zone-import {
    display: none;
}
</style>