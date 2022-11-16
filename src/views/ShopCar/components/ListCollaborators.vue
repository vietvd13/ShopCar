<template>
    <div class="list-collaborators-home">
        <TitleContent>{{ $t('SHOP_CAR.HOME.COLLABORATORS.TITLE') }}</TitleContent>

        <div class="list-collaborators-home__list">
            <b-row>
                <b-col 
                    cols="6" xs="6" sm="6" md="6" lg="3" xl="3" 
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

        <div class="show-more text-right">
            {{ $t('APP.TEXT_VIEW_MORE') }}
        </div>
    </div>
</template>

<script>
import TitleContent from './TitleContent.vue';
import CardCollaborators from '../components/CardCollaborators.vue';

export default {
    name: 'ListCollaboratorsHome',
    components: {
        TitleContent,
        CardCollaborators
    },
    props: {
        items: {
            type: Array,
            default: () => {
                return [];
            }
        },
    },
    computed: {
        domainImage() {
            return process.env.VUE_APP_URL_IMAGE;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.list-collaborators-home {
    .show-more {
        margin-bottom: 5px;
        color: $main;
        font-weight: 600;
        cursor: pointer;
    }
}
</style>