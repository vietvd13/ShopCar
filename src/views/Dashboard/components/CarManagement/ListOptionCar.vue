<template>
    <div class="list-option-car">
        <p class="title-content">
            {{ $t('SHOP_CAR.DETAIL_CAR.TITLE_VEHICLE_OPTIONS_AND_DETAILS') }}
        </p>

        <b-row>
            <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                <label for="exterior">
                    {{ $t('DASHBOARD.CAR.FORM.CAR_OPTION_EXTERIOR') }}
                </label>
                <HandleOption 
                    :type="'exterior'"
                    :items="exterior"
                    @add="handleAddOption"
                    @remove="handleRemoveOption"
                />
            </b-col>

            <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                <label for="guts">
                    {{ $t('DASHBOARD.CAR.FORM.CAR_OPTION_GUTS') }}
                </label>
                <HandleOption
                    :type="'guts'"
                    :items="guts"
                    @add="handleAddOption"
                    @remove="handleRemoveOption"
                />
            </b-col>

            <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                <label for="safety">
                    {{ $t('DASHBOARD.CAR.FORM.CAR_OPTION_SAFETY') }}
                </label>
                <HandleOption
                    :type="'safety'"
                    :items="safety"
                    @add="handleAddOption"
                    @remove="handleRemoveOption"
                />
            </b-col>

            <b-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                <label for="convenience">
                    {{ $t('DASHBOARD.CAR.FORM.CAR_OPTION_CONVENIENCE') }}
                </label>
                <HandleOption
                    :type="'convenience'"
                    :items="convenience"
                    @add="handleAddOption"
                    @remove="handleRemoveOption"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import HandleOption from './HandleOptions.vue';

export default {
    name: 'ListOptionCar',
    components: {
        HandleOption,
    },
    props: {
        exterior: {
            type: Array,
            default: function() {
                return [];
            }
        },
        guts: {
            type: Array,
            default: function() {
                return [];
            }
        },
        safety: {
            type: Array,
            default: function() {
                return [];
            }
        },
        convenience: {
            type: Array,
            default: function() {
                return [];
            }
        },
    },
    methods: {
        handleAddOption(item) {
            this.$emit('add', item);
        },
        handleRemoveOption(item) {
            this.$emit('remove', item);
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
</style>