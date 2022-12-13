<template>
    <div class="list-collaborators-home" id="tab-collaborators-home">
        <TitleContent>{{ $t('SHOP_CAR.HOME.COLLABORATORS.TITLE') }}</TitleContent>

        <div class="list-collaborators-home__list">
            <b-row>
                <b-col 
                    cols="6" xs="6" sm="6" md="4" lg="3" xl="2" 
                    v-for="(collaborator, idx) in items" 
                    :key="idx"
                >
                    <CardCollaborators 
                        :avatar="collaborator.image"
                        :fullname="collaborator.staff_name"
                        :phone="collaborator.sns_phone"
                        :kakaotalk="collaborator.sns_kakaotalk"
                        :zalo="collaborator.sns_zalo"
                        :messager="collaborator.sns_messager"
                    />
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { getAllCollaborators } from '@/api/modules/Home';
import TitleContent from './components/TitleContent.vue';
import CardCollaborators from './components/CardCollaborators.vue';

export default {
    name: 'AllCollaborators',
    components: {
        TitleContent,
        CardCollaborators,
    },
    data() {
        return {
            items: [],
        }
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            setLoading(true);

            await this.handleGetAllCollaborators();

            setLoading(false);
        },
        async handleGetAllCollaborators() {
            try {
                const { status_code, data } = await getAllCollaborators();

                if (status_code === 200) {
                    this.items = data;
                } else {
                    this.items = [];
                }
            } catch (err) {
                this.items = [];
                console.log(err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.list-collaborators-home {
    margin-top: 10px;
}
</style>