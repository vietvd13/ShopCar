<template>
    <div class="import-performance-check">
        <p class="title-content">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_PERFORMANCE_CHECK') }}
        </p>

        <div class="import-file">
            <b-form-file
                v-model="fileImport"
                :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_IMPORT_PERFORMANCE_CHECK')"
                :drop-placeholder="$t('APP.DROP_FILE')"
                :browse-text="$t('APP.DROP_FILE')"
                accept="application/pdf"
            />
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
            }
        },
        fileImport: {
            handler: function() {
                this.$emit('file', {
                    url: this.fileImport,
                    type: 'new',
                });
                this.filePreview = {
                    type: 'new',
                    url: this.fileImport
                }
            }
        }
    },
    data() {
        return {
            fileImport: null,
            filePreview: null,
        }
    },
    methods: {
        handleViewPdf() {
            if (this.filePreview) {
                if (this.filePreview.type === 'new') {
                    return URL.createObjectURL(this.filePreview.url);
                } 

                if (this.fileImport.type === 'old') {
                    return `${this.domainPDF}${this.filePreview.url}`;
                }
            }

            return '';
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
        margin-top: 10px;
    }

    .view-pdf {
        width: 100%;
        height: 500px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
}
</style>