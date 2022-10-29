import Vue from 'vue';
import VueI18n from 'vue-i18n';

import viLocale from './subs/vi';
import enLocale from './subs/en';
import krLocale from './subs/kr';

import { getLanguage } from '../utils/getLang';

Vue.use(VueI18n);

const messages = {
  vi: viLocale,
	en: enLocale,
	kr: krLocale,
};

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
});

export default i18n;