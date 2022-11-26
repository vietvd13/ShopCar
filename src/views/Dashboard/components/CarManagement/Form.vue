<template>
    <div class="form-car">
        <div class="form-car__title">
            <label for="">
                {{ $t('DASHBOARD.CAR.FORM.TITLE_CAR') }}
            </label>
            <b-form-input 
                v-model="isForm.title" 
                :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_TITLE_CAR')" 
            />
        </div>

        <div class="form-car__images">
            <ImportImageCar 
                @import="handleImportImage"
                :items="isForm.images"
            />
        </div>

        <div class="form-car__basic-infor">

        </div>

        <div class="form-car__options">
            <ListOptionCar 
                :exterior="isForm.exterior"
                :guts="isForm.guts"
                :safety="isForm.safety"
                :convenience="isForm.convenience"
                @add="handleAddOption"
                @remove="handleRemoveOption"
            />
        </div>
    </div>
</template>

<script>
import ImportImageCar from './ImportImageCar.vue';
import ListOptionCar from './ListOptionCar.vue';

export default {
    name: 'FormCar',
    components: {
        ImportImageCar,
        ListOptionCar
    },
    props: {
        oldForm: {
            type: Object,
            default: function() {
                return {

                }
            }
        },
    },
    data() {
        return {
            isForm: {
                title: '',

                images: [],

                exterior: [],
                guts: [],
                safety: [],
                convenience: []
            }
        }
    },
    methods: {
        handleImportImage(file) {
            (this.isForm.images).push(file);
        },
        handleAddOption(item) {
            this.isForm[item.type].push(item.value);
        },
        handleRemoveOption(item) {
            this.isForm[item.type].splice(item.index, 1);
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.form-car {
    &__title,
    &__images {
        margin-bottom: 10px;
    }
}
</style>