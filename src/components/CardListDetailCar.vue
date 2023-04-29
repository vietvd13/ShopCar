<template>
    <div class="box-card-detail-car">
        <div class="box-card-detail-car__title">
            {{ title }}
        </div>

        <div class="box-card-detail-car__content">
            <template v-if="items.length">
                <div class="box-list-checkbox">
                    <b-form-checkbox-group
                        id="filter-detail-card"
                        v-model="selected"
                        name="filter-detail-card"
                        @change="onCheckCarDetail"
                        stacked
                    >
                        <b-form-checkbox
                            v-for="(item, idx) in items"
                            :key="`car-detail-${idx + 1}`"
                            :value="item"
                        >
                            {{ item }}
                        </b-form-checkbox>
                    </b-form-checkbox-group>
                </div>
            </template>

            <template v-else>
                <div class="box-no-data text-no-data">
                    {{ $t('APP.NO_DATA') }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardListDetailCar",
    props: {
        title: {
            type: String,
            default: () => {
                return "Title box card";
            }
        },
        items: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            selected: this.$store.getters.isFilter.car_details,
        }
    },
    computed: {
        seletecdStore() {
            return this.$store.getters.isFilter.car_details;
        }
    },
    watch: {
        seletecdStore(newValue, oldValue) {
            if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
                this.selected = this.$store.getters.isFilter.car_details;
            }
        }
    },
    methods: {
        onCheckCarDetail() {
            if (Array.isArray(this.selected)) {
                this.$emit("onSelect", this.selected);

                return;
            }

            this.$emit("onSelect", []);
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.box-card-detail-car {
    width: 100%;
    height: 100%;
    border: 1px solid $silver-chalice;

    &__title {
        padding: 5px;
        text-align: center;
        background-color: $athens-gray;
        font-weight: bold;

        border-bottom: 1px solid $silver-chalice;
    }

    &__content {
        height: 230px;

        overflow: hidden;
        overflow-y: scroll;

        .item-detail-car {
            border-bottom: 1px solid $silver-chalice;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 14px;

            &:hover {
                background-color: $background-athens-gray;
            }

            &:last-child {
                border-bottom: none;
            }
        }

        .box-list-checkbox {
            padding: 10px;

            ::v-deep label {
                font-weight: normal !important;
            }
        }

        .box-no-data {
            text-align: center;
        }

        .text-no-data {
            color: $pale-sky;
            font-size: 14px;
            margin-top: 10px;
        }
    }
}
</style>