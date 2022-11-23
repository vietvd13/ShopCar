<template>
    <div class="all-happy-moment">
        <div class="all-happy-moment__content">
            <TitleContent>{{ $t('SHOP_CAR.HOME.CUSTOMER_FEEDBACK.TITLE') }}</TitleContent>

            <b-row>
                <b-col 
                    cols="6" xs="6" sm="6" md="4" lg="3" xl="2" 
                    v-for="feedback in items" 
                    :key="feedback._id"
                >
                    <CardFeedBack
                        :id="feedback._id"
                        :image="feedback.primary_image"
                        :writer="feedback.writer"
                        :feedback="feedback.content"
                    />
                </b-col>
            </b-row>
        </div>

        <div class="all-happy-moment__pagination">
            <b-pagination
                v-model="pagination.current_page"
                :total-rows="pagination.total"
                :per-page="pagination.per_page"
                align="center"
                pills
                size="sm"
            />
        </div>
    </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { getListHappyMoment } from '@/api/modules/Home';
import TitleContent from './components/TitleContent.vue';
import CardFeedBack from './components/CardFeedback.vue';

export default {
    name: 'AllHappyMoment',
    components: {
        TitleContent,
        CardFeedBack,
    },
    data() {
        return {
            items: [],
            pagination: {
                current_page: 1,
                per_page: 10,
                total: 0,
            }
        }
    },
    computed: {
        isCurrentPage() {
            return this.pagination.current_page; 
        },
    },
    watch: {
        isCurrentPage() {
            this.handleGetListHappyMoment();
        },
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            setLoading(true);

            await this.handleGetListHappyMoment();

            setLoading(false);
        },
        async handleGetListHappyMoment() {
            try {
                setLoading(true);

                const BODY = {
                    limit: this.pagination.per_page,
                    page: this.pagination.current_page,
                };

                const { status_code, data, pagination } = await getListHappyMoment(BODY);

                if (status_code === 200) {
                    this.items = data;
                    this.pagination.current_page = pagination.current_page;
                    this.pagination.per_page = pagination.per_page;
                    this.pagination.total = pagination.total;
                } else {
                    this.items.length = 0;
                }

                setLoading(false);
            } catch (err) {
                setLoading(false);

                console.log(err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.all-happy-moment {
    &__content {
        margin-bottom: 10px;
    }
}
</style>