<template>
    <div class="box-card">
        <div class="box-card__title">
            {{ title }}
        </div>

        <div class="box-card__content">
            <template v-if="items.length">
                <b-col>
                    <b-row>
                        <b-col
                            class="no-padding"
                            v-for="(item, idx) in items"
                            :key="`box-card-${idx}`"
                            cols="4"
                            xs="4"
                            sm="3"
                            md="2"
                            lg="3"
                            xl="6"
                            @click="handleOnClick(item)"
                        >
                            <div :class="handleActiveClass(item)">
                                <img :src="item.image" :alt="item.category_name">
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
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
    name: "CardListCategories",
    props: {
        title: {
            type: String,
            default: () => {
                return "Title box card"
            }
        },
        items: {
            type: Array,
            default: () => {
                return [];
            }
        },
    },
    data() {
        return {
            selected: this.$store.getters.isFilter.categories,
        }
    },
    computed: {
        seletecdStore() {
            return this.$store.getters.isFilter.categories;
        }
    },
    watch: {
        seletecdStore(newValue, oldValue) {
            if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
                this.selected = this.$store.getters.isFilter.categories;
            }
        }
    },
    methods: {
        handleOnClick(item) {
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
                if (this.selected._id === item._id) {
                    return "box-card-content__image box-active";
                }
            }

            return "box-card-content__image";
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.box-card {
    width: 100%;
    height: 100%;
    border: 1px solid $silver-chalice;

    &__title {
        padding: 5px;
        text-align: center;
        background-color: $athens-gray;
        font-weight: bold;
    }

    &__content {
        height: 230px;

        overflow: hidden;
        overflow-y: scroll;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        border-top: 1px solid $silver-chalice;
        border-left: 1px solid $silver-chalice;

        .box-card-content__image {
            display: flex;
            align-items: center;
            justify-content: center;

            border-bottom: 1px solid $silver-chalice;
            border-right: 1px solid $silver-chalice;

            padding: 5px 0;

            cursor: pointer;

            &:hover {
                background-color: $background-athens-gray;
            }
        }

        .box-card-content__image.box-active {
            background-color: $international-orange;
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

.no-padding {
    padding: 0;
}
</style>