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
          <b-nav-item href="#" v-for="route in listRoute" :key="route.value">
            <router-link
            :to="route.path"
            class="item-route"
          >
            {{ $t(route.text) }}
          </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-img
              @click="goToLink(profile.link_facebook)"
              :src="require('@/assets/images/facebook.png')"
              v-bind="{
                width: 25,
                height: 25
              }"
              class="icon-social"
            />

            <b-img
              @click="goToLink(profile.link_messenger)"
              :src="require('@/assets/images/messager.png')"
              v-bind="{
                width: 25,
                height: 25
              }"
              class="icon-social"
            />

            <b-img
              @click="goToLink(profile.link_zalo)"
              :src="require('@/assets/images/zalo.png')"
              v-bind="{
                width: 25,
                height: 25
              }"
              class="icon-social"
            />
          </b-nav-item>

          <b-nav-item-dropdown right>
            <template #button-content>
              <flag :iso="convertFlagLanguage()" class="pulldown-lang" />
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
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import CONSTANTS from '@/constants';
import Toast from '@/toast';
import { getProfilePublic } from '@/api/modules/Home';

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
      keyword: '',

      profile: {
        link_facebook: '',
        link_messenger: '',
        link_zalo: '',
      }
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language; 
    },
  },
  created () {
    this.initData();
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
    async initData() {
      await this.handleGetProfile();
    },
    async handleGetProfile() {
      try {
        const { status_code, data } = await getProfilePublic();

        if (status_code === 200) {
          this.profile.phone_number = data.phone_number;
          this.profile.company_address = data.company_address;
          this.profile.email = data.email;
          this.profile.map = data.company_map;
          this.profile.company_name = data.company_name;
        }
      } catch (err) {
        console.log(err);
      }
    },
    goToLink(link) {
      window.open(link, '_blank');
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
    },
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

  a.nav-link {
    a {
      padding: 10px;
      text-decoration: none;
      color: $scorpion;
      text-transform: capitalize;
      font-weight: 600;
    }

    a.item-route {
      text-align: center;
      min-width: 100px;

      &:hover {
        color: $mine-shaft;
      }
    }

    .router-link-active {
      font-weight: bold;
      opacity: 1;
      color: $international-orange;
    }
  }

  .pulldown-lang {
    margin-left: 10px;
  }
}

::v-deep .text-lang {
  margin-left: 10px;
  font-weight: 500;
  color: $scorpion;
}

@media only screen and (max-width: 991px) {
  .item-route {
    text-align: left !important;
  }
}

.icon-social {
  margin-left: 10px;
}
</style>