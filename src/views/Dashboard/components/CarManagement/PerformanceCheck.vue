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
    </div>
</template>

<script>
export default {
    name: 'ImportPerformanceCheck',
    watch: {
        fileImport: {
            handler: function() {
                this.$emit('file', {
                    url: this.fileImport,
                    type: 'new',
                });
            }
        }
    },
    data() {
        return {
            fileImport: null
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
}
</style>