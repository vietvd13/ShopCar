<template>
    <div class="box-card-detail-car">
        <div class="box-card-detail-car__title">
            {{ title }}
        </div>

        <div class="box-card-detail-car__content">
            <template v-if="items.length">
                <div 
                    v-for="(item, idx) in items"
                    :key="`detail-car-${idx + 1}`"
                    :class="handleActiveClass(item)"
                    @click="onClickCarDetail(item)"
                >
                    {{ item.detail_name }}
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
    name: "CardListDetailCarDashboard",
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
            selected: this.$store.getters.isFilterDashboard.car_details,
        }
    },
    computed: {
        seletecdStore() {
            return this.$store.getters.isFilterDashboard.car_details;
        }
    },
    watch: {
        seletecdStore(newValue, oldValue) {
            if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
                this.selected = this.$store.getters.isFilterDashboard.car_details;
            }
        }
    },
    methods: {
        onClickCarDetail(item) {
            if (item) {
                this.selected = item;
                this.$emit("onSelect", this.selected);

                return;
            }

            this.$emit("onSelect", null);
        },
        handleActiveClass(item) {
            if (this.selected) {
                if (this.selected.detail_name === item.detail_name) {
                    return "item-detail-car detail-car-active";
                }
            }

            return "item-detail-car";
        }
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
        height: 213px;

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
        }

        .item-detail-car.detail-car-active {
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