<template>
    <div class="box-card-rating-car">
        <div class="box-card-rating-car__title">
            {{ title }}
        </div>

        <div class="box-card-rating-car__content">
            <template v-if="items.length">
                <b-form-checkbox-group
                    id="filter-rating"
                    v-model="selected"
                    name="filter-rating"
                    stacked
                    @change="onClickModel"
                >
                    <b-form-checkbox 
                        v-for="(item, idx) in items"
                        :key="`rating-${idx + 1}`"
                        :value="item"
                    >
                        {{ item }}
                    </b-form-checkbox>
                </b-form-checkbox-group>
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
    name: 'CardListRating',
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
            selected: this.$store.getters.isFilter.rating,
        }
    },
    computed: {
        seletecdStore() {
            return this.$store.getters.isFilter.rating;
        },
        actionRating() {
            return this.$store.getters.actionRating;
        }
    },
    watch: {
        seletecdStore(newValue, oldValue) {
            if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
                this.selected = this.$store.getters.isFilter.rating;
            }
        },
        actionRating() {
            this.selected = [];
        }
    },
    methods: {
        onClickModel(item) {
            if (item) {
                this.selected = item;
                this.$emit("onSelect", item);

                return;
            }
            
            this.selected = [];
            this.$emit("onSelect", []);
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.box-card-rating-car {
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
        height: 213px;

        overflow: hidden;
        overflow-y: scroll;

        #filter-rating {
            padding: 5px 10px;

            ::v-deep label {
                font-weight: normal !important;
                font-size: 14px;
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