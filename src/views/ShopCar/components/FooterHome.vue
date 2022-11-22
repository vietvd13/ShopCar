<template>
    <div class="footer-home">
        <div class="content-lang">
            <div class="main-content">
                <b-col>
                    <b-row>
                        <b-col>
                            <div
                                :class="{'item-lang': true, 'active-lang': lang === CONSTANTS.VALUE.LANGUAGE_VIETNAMESE}"
                                @click="setLanguage(CONSTANTS.VALUE.LANGUAGE_VIETNAMESE)"
                            >
                                {{ $t('LANGUAGES.VIETNAMESE') }}
                            </div>
                        </b-col>
                        <b-col>
                            <div
                                :class="{'item-lang': true, 'active-lang': lang === CONSTANTS.VALUE.LANGUAGE_ENGLISH}"
                                @click="setLanguage(CONSTANTS.VALUE.LANGUAGE_ENGLISH)"
                            >
                                {{ $t('LANGUAGES.ENGLISH') }}
                            </div>
                        </b-col>
                        <b-col>
                            <div
                                :class="{'item-lang': true, 'active-lang': lang === CONSTANTS.VALUE.LANGUAGE_KOREAN}"
                                @click="setLanguage(CONSTANTS.VALUE.LANGUAGE_KOREAN)"
                            >
                                {{ $t('LANGUAGES.KOREAN') }}
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
import CONSTANTS from '@/constants';
import Toast from '@/toast';

export default {
    name: 'FooterHome',
    computed: {
        lang() {
            return this.$store.getters.language; 
        }
    },
    data() {
        return {
            CONSTANTS
        }
    },
    methods: {
        setLanguage(language = CONSTANTS.VALUE.LANGUAGE_KOREAN) {
            if (this.lang !== language) {
                this.$store.dispatch('app/setLanguage', language)
                    .then(() => {
                        this.$i18n.locale = language;

                        Toast.success(this.$t('TOAST_MESSAGE.CHANGE_LANGUAGE_SUCCESS'));
                    })
                    .catch(() => {
                        Toast.warning(this.$t('TOAST_MESSAGE.CHANGE_LANGUAGE_ERROR'))
                    })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.footer-home {
    width: 100%;
    background-color: $mine-shaft;
    color: $white;
    padding: 5px;

    .content-lang {
        .item-lang {
            padding: 5px 0;

            text-align: center;
            font-weight: 600;
            cursor: pointer;
        }

        .active-lang {
            color: $white;
        }
    }
}
</style>