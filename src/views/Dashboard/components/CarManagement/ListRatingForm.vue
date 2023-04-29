<template>
    <div class="list-rating">
        <div class="list-rating__title">
            <p class="title-content">Rating</p>
        </div>
        <div class="list-rating__content">
            <div class="card-list-rating">
                <div 
                    v-for="(item, idxRating) in rating"
                    :key="`rating-${idxRating + 1}`"
                >
                    <div class="item-rating mb-2">
                        <b-input-group :prepend="`${idxRating + 1}`">
                            <b-form-select
                                v-model="rating[idxRating]"
                            >
                                <b-form-select-option :value="null">{{ $t('APP.PLEASE_SELECT') }}</b-form-select-option>
                                <b-form-select-option
                                    v-for="(option, idxOption) in listSelect"
                                    :key="`rating-${idxRating + 1}-${idxOption + 1}`"
                                    :value="option"
                                    :disabled="handleDisableSelect(option)"
                                >
                                    {{ option }}
                                </b-form-select-option>
                            </b-form-select>

                            <b-input-group-append>
                                <b-button 
                                    variant="danger"
                                    @click="onClickDelete(idxRating)"
                                >
                                    <i class="fas fa-trash" />
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </div>
                </div>
            </div>
        </div>

        <div class="list-rating__action mt-2" v-if="listSelect.length">
            <div class="text-center">
                <b-button 
                    class="btn-app"
                    @click="onClickAdd()"
                    :disabled="this.rating.length >= 1"
                >
                    <i class="fas fa-plus-circle mr-2" />
                    {{ $t('APP.BUTTON_ADD') }}
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListRatingForm",
    props: {
        items: {
            type: Array,
            default: () => {
                return [];
            }
        },
        listSelect: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    watch: {
        rating() {
            this.$emit("change", this.rating);
        },
        listSelect() {
            this.rating.length = 0;
        }
    },
    data() {
        return {
            rating: []
        }
    },
    created () {
        this.rating = JSON.parse(JSON.stringify(this.items));
    },
    methods: {
        onClickAdd() {
            if (this.rating.length < 1) {
                this.rating.push(null);
            }
        },
        handleDisableSelect(item) {
            return this.rating.includes(item);
        },
        onClickDelete(idx) {
            if (idx >= 0 && idx <= this.rating.length) {
                this.rating.splice(idx, 1);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.list-rating {
    &__title {
        .title-content {
            font-size: 22px;
            font-weight: 600;
        }
    }

    &__content {
        .item-rating {
            padding: 1rem;
            border-radius: 0.25rem;
            border: 1px solid #00000020;
        }
    }
}
</style>