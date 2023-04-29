<template>
    <div class="box-card-model-car">
        <div class="box-card-model-car__title">
            {{ title }}
        </div>

        <div class="box-card-model-car__content">
            <template v-if="items.length">
                <div 
                    v-for="(item, idx) in items"
                    :key="`model-car-${idx + 1}`"
                    :class="handleActiveClass(item)"
                    @click="onClickModel(item)"
                >
                    {{ item.model_name }}
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
    name: "CardListModelCarDashboard",
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
            selected: this.$store.getters.isFilterDashboard.models,
        }
    },
    computed: {
        seletecdStore() {
            return this.$store.getters.isFilterDashboard.models;
        }
    },
    watch: {
        seletecdStore(newValue, oldValue) {
            if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
                this.selected = this.$store.getters.isFilterDashboard.models;
            }
        }
    },
    methods: {
        onClickModel(item) {
            if (item) {
                this.selected = item;
                this.$emit("onSelect", item);

                return;
            }
            
            this.selected = null;
            this.$emit("onSelect", null);
        },
        handleActiveClass(item) {
            if (this.selected) {
                if (this.selected.model_name === item.model_name) {
                    return "item-model-car box-model-active";
                }
            }

            return "item-model-car";
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.box-card-model-car {
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

        .item-model-car {
            border-bottom: 1px solid $silver-chalice;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 14px;

            &:hover {
                background-color: $background-athens-gray;
            }
        }

        .item-model-car.box-model-active {
            background-color: $international-orange;
            color: $white;
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