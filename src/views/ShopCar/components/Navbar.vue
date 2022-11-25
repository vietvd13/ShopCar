<template>
  <b-navbar toggleable="lg" sticky>
    <b-container>
      <b-navbar-brand
        href="#"
        @click="goToRoute('HomeShopCar')"
      >
        <i class="fas fa-home-lg-alt" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template #default>
          <i class="custom-icon-toggle fas fa-bars" />
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            v-for="route in listRoute"
            :key="route.value"
            :to="route.path"
            class="item-route"
          >
            {{ $t(route.text) }}
          </router-link>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <flag  :iso="convertFlagLanguage()" />
            <span class="text-lang">
              {{ $t(convertTextLanguage()) }}
            </span>
          </template>

          <b-dropdown-item 
            href="#"
            @click="setLanguage(CONSTANTS.VALUE.LANGUAGE_VIETNAMESE)"
          >
            <flag iso="vn" /> 
            <span class="text-lang">
              {{ $t('LANGUAGES.VIETNAMESE') }}
            </span>
          </b-dropdown-item>

          <b-dropdown-item 
            href="#"
            @click="setLanguage(CONSTANTS.VALUE.LANGUAGE_ENGLISH)"
          >
            <flag iso="us" />
            <span class="text-lang">
              {{ $t('LANGUAGES.ENGLISH') }}
            </span>
          </b-dropdown-item>

          <b-dropdown-item 
            href="#"
            @click="setLanguage(CONSTANTS.VALUE.LANGUAGE_KOREAN)"
          >
            <flag iso="kr" />
            <span class="text-lang">
              {{ $t('LANGUAGES.KOREAN') }}
            </span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import CONSTANTS from '@/constants';
import Toast from '@/toast';

export default {
  name: 'NavbarShop',
  data() {
    return {
      CONSTANTS,
      
      listRoute: [
        {
          value: 'VEHICLE_LIST',
          text: 'SHOP_CAR.HOME.CATEGORIES.VEHICLE_LIST',
          path: '/shop-car/list',
        },
        {
          value: 'CAR_BUYING_POLICY',
          text: 'SHOP_CAR.HOME.CATEGORIES.CAR_BUYING_POLICY',
          path: '/shop-car/car-buying-policy',
        },
        {
          value: 'INSURANCE',
          text: 'SHOP_CAR.HOME.CATEGORIES.INSURANCE',
          path: '/shop-car/insurance',
        },
        {
          value: 'CONTACT',
          text: 'SHOP_CAR.HOME.CATEGORIES.CONTACT',
          path: '/shop-car/contact',
        },
      ],
      keyword: ''
    }
  },
  computed: {
    lang() {
        return this.$store.getters.language; 
    }
  },
  methods: {
    goToRoute(name) {
      if (name) {
        const CURRENT_NAME = this.$route.name;

        if (CURRENT_NAME !== name) {
          this.$router.push({ name });
        }
      }
    },
    convertFlagLanguage() {
      const LANG = this.$store.getters.language;

      const LIBRARY = {
        'vi': 'vn',
        'en': 'us',
        'kr': 'kr'
      }

      return LIBRARY[LANG] || '';
    },
    convertTextLanguage() {
      const LANG = this.$store.getters.language;

      const LIBRARY = {
        'vi': 'LANGUAGES.VIETNAMESE',
        'en': 'LANGUAGES.ENGLISH',
        'kr': 'LANGUAGES.KOREAN'
      }

      return LIBRARY[LANG] || '';
    },
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

.navbar {
  background-color: $white;
  padding: 0.5rem;

  z-index: 99999;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .navbar-brand {
    margin-right: 0;
    color: $international-orange;

    &:hover {
      color: $international-orange;
    }

    &:focus {
      color: $international-orange;
    }
  }

  .custom-icon-toggle {
    color: $scorpion;
    font-size: 25px;
  }

  a {
    padding: 10px;
    text-decoration: none;
    color: $scorpion;
    text-transform: capitalize;
    font-weight: 600;
  }

  .item-route {
    text-align: center;
    min-width: 100px;
    transition: 0.2s all ease-in-out 0s;

    &:hover {
      transform: scale(1.1);
      color: $mine-shaft;
    }
  }

  .router-link-active {
    font-weight: bold;
    opacity: 1;
    color: $international-orange;
  }
}

::v-deep .text-lang {
  margin-left: 10px;
  font-weight: 500;
  color: $scorpion;
}
</style>