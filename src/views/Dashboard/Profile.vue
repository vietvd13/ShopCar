<template>
  <div class="profile container">
    <div class="mx-3">
      <b-tabs content-class="mt-3">
        <b-tab :title="$t('DASHBOARD.PROFILE.INFOR')">
          <div class="profile card">
            <div class="card-body font-normal">
              <div>
                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.FULLNAME") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="fullname"
                      :placeholder="$t('DASHBOARD.PROFILE.FULLNAME')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.DOB") }}</h6>
                  </b-col>
                  <b-col>
                    <b-form-datepicker
                      :disabled="!is_edit"
                      v-model="dob"
                      :value="dob"
                    ></b-form-datepicker>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.EMAIL") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="email"
                      readonly
                      :placeholder="$t('DASHBOARD.PROFILE.EMAIL')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.PHONE") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="phone"
                      :placeholder="$t('DASHBOARD.PROFILE.PHONE')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.GENDER.LABEL") }}</h6>
                  </b-col>
                  <b-col>
                    <b-form-select
                      :disabled="!is_edit"
                      value="male"
                      v-model="gender"
                    >
                      <option value="male">
                        {{ $t("DASHBOARD.PROFILE.GENDER.MALE") }}
                      </option>
                      <option value="female">
                        {{ $t("DASHBOARD.PROFILE.GENDER.FEMALE") }}
                      </option>
                    </b-form-select>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.ADDRESS_MAIL_NOTI") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="email_noti"
                      :placeholder="$t('DASHBOARD.PROFILE.ADDRESS_MAIL_NOTI')"
                    ></b-input>
                  </b-col>
                </b-row>
              </div>
            </div>

            <div class="card-header header-elements-sm-inline">
              <h6 class="card-title font-normal font-superBold m-0">
                {{ $t("DASHBOARD.PROFILE.SETTINGS.OTHER") }}
              </h6>
            </div>
            <div class="card-body font-normal">
              <div>
                <div>
                  <div class="row d-block align-items-center d-sm-flex mb-2">
                    <div class="col-4 col-md-2 py-2">
                      <h6>{{ $t("LANGUAGES.LANGUAGES") }}</h6>
                    </div>
                    <b-col>
                      <b-form-select :disabled="!is_edit" v-model="language">
                        <option value="vi">
                          {{ $t("LANGUAGES.VIETNAMESE") }}
                        </option>
                        <option value="en">
                          {{ $t("LANGUAGES.ENGLISH") }}
                        </option>
                        <option value="kr">{{ $t("LANGUAGES.KOREAN") }}</option>
                      </b-form-select>
                    </b-col>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-4">
                  <b-button
                    variant="outlined"
                    class="mr-2 border"
                    id="btn-cancel"
                    @click="handleCancelChange"
                  >
                    {{ $t("DASHBOARD.PROFILE.SETTINGS.CANCEL") }}
                  </b-button>
                  <b-button
                    v-if="is_edit"
                    :disabled="is_process"
                    class="btn-app"
                    @click="handleSave"
                  >
                    {{ $t("DASHBOARD.PROFILE.SETTINGS.SAVE") }}
                  </b-button>
                  <b-button v-else class="btn-app" @click="handleChange">
                    {{ $t("DASHBOARD.PROFILE.SETTINGS.CHANGE") }}
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab :title="$t('DASHBOARD.PROFILE.COMPANY_INFOR')">
          <div class="profile card">
            <div class="card-body font-normal">
              <div>
                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.COMPANY.NAME") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="company_name"
                      :placeholder="$t('DASHBOARD.PROFILE.COMPANY.NAME')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.COMPANY.ADDRESS") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="company_address"
                      :placeholder="$t('DASHBOARD.PROFILE.COMPANY.ADDRESS')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.COMPANY.MAP") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="company_map"
                      :placeholder="$t('DASHBOARD.PROFILE.COMPANY.MAP')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.COMPANY.LINK_KAKAO") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="link_kakao"
                      :placeholder="$t('DASHBOARD.PROFILE.COMPANY.LINK_KAKAO')"
                    ></b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.COMPANY.LINK_FACEBOOK") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="link_facebook"
                      :placeholder="
                        $t('DASHBOARD.PROFILE.COMPANY.LINK_FACEBOOK')
                      "
                    ></b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>{{ $t("DASHBOARD.PROFILE.COMPANY.LINK_ZALO") }}</h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="link_zalo"
                      :placeholder="$t('DASHBOARD.PROFILE.COMPANY.LINK_ZALO')"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3 d-block align-items-center d-sm-flex">
                  <b-col cols="4" md="2">
                    <h6>
                      {{ $t("DASHBOARD.PROFILE.COMPANY.LINK_MESSENGER") }}
                    </h6>
                  </b-col>
                  <b-col>
                    <b-input
                      :disabled="!is_edit"
                      v-model="link_messenger"
                      :placeholder="
                        $t('DASHBOARD.PROFILE.COMPANY.LINK_MESSENGER')
                      "
                    ></b-input>
                  </b-col>
                </b-row>

                <div class="d-flex justify-content-end mt-4">
                  <b-button
                    variant="outlined"
                    class="mr-2 border"
                    id="btn-cancel"
                    @click="handleCancelChange"
                  >
                    {{ $t("DASHBOARD.PROFILE.SETTINGS.CANCEL") }}
                  </b-button>
                  <b-button
                    v-if="is_edit"
                    :disabled="is_process"
                    class="btn-app"
                    @click="handleSave"
                  >
                    {{ $t("DASHBOARD.PROFILE.SETTINGS.SAVE") }}
                  </b-button>
                  <b-button v-else class="btn-app" @click="handleChange">
                    {{ $t("DASHBOARD.PROFILE.SETTINGS.CHANGE") }}
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab :title="$t('DASHBOARD.PROFILE.CHANGEPASSWORD')">
          <b-row class="mb-3 d-block align-items-center d-sm-flex">
            <b-col cols="4" md="2">
              <h6>{{ $t("DASHBOARD.PROFILE.OLDPASSWORDS") }}</h6>
            </b-col>
            <b-col>
              <b-input-group class="mt-3">
                <template #append>
                  <b-input-group-text
                    @click="handleShowOldPassword"
                    class="password-handle"
                  >
                    <i v-if="is_show_old" class="fal fa-eye"></i>
                    <i v-else class="far fa-eye-slash"></i>
                  </b-input-group-text>
                </template>
                <b-input
                  v-model="old_password"
                  :type="is_show_old ? 'text' : 'password'"
                  :placeholder="$t('DASHBOARD.PROFILE.OLDPASSWORDS')"
                >
                </b-input>
              </b-input-group>
            </b-col>
          </b-row>

          <b-row class="mb-3 d-block align-items-center d-sm-flex">
            <b-col cols="4" md="2">
              <h6>{{ $t("DASHBOARD.PROFILE.NEWPASSWORDS") }}</h6>
            </b-col>
            <b-col>
              <b-input-group class="mt-3">
                <template #append>
                  <b-input-group-text
                    @click="handleShowNewPassword"
                    class="password-handle"
                  >
                    <i v-if="is_show_new" class="fal fa-eye"></i>
                    <i v-else class="far fa-eye-slash"></i>
                  </b-input-group-text>
                </template>
                <b-input
                  v-model="new_password"
                  :type="is_show_new ? 'text' : 'password'"
                  :placeholder="$t('DASHBOARD.PROFILE.NEWPASSWORDS')"
                >
                </b-input>
              </b-input-group>
            </b-col>
          </b-row>

          <b-row class="mb-3 justify-content-end mt-4">
            <b-button variant="outlined" class="mr-2 border" id="btn-cancel">
              {{ $t("DASHBOARD.PROFILE.SETTINGS.CANCEL") }}
            </b-button>
            <b-button
              :disabled="is_process"
              class="btn-app"
              @click="handleChangePassword"
            >
              {{ $t("DASHBOARD.PROFILE.SETTINGS.SAVE") }}
            </b-button>
          </b-row>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Toast from "@/toast";
import CONSTANTS from "@/constants";
import {
  postChangePassword,
  postChangeUserInfor,
  postUserInfor,
} from "@/api/modules/Auth";

export default {
  name: "ProfilePage",
  data() {
    return {
      dob: new Date(),
      CONSTANTS,
      language: this.$store.getters.language,
      is_show_old: false,
      is_show_new: false,
      old_password: "",
      new_password: "",
      fullname: "",
      email: "",
      email_noti: "",
      phone: "",
      company_address: "",
      company_name: "",
      company_map: "",
      link_kakao: "",
      link_messenger: "",
      link_facebook: "",
      link_zalo: "",
      gender: "male",
      is_process: false,
      is_edit: false,
    };
  },

  created() {
    this.getProfile();
  },

  methods: {
    setLanguage(language = language) {
      if (this.lang !== language) {
        this.$store
          .dispatch("app/setLanguage", language)
          .then(() => {
            this.$i18n.locale = language;

            Toast.success(this.$t("TOAST_MESSAGE.CHANGE_LANGUAGE_SUCCESS"));
          })
          .catch(() => {
            Toast.warning(this.$t("TOAST_MESSAGE.CHANGE_LANGUAGE_ERROR"));
          });
      }
    },

    async handleSave() {
      this.is_process = true;
      if (this.language !== this.$store.getters.language) {
        this.setLanguage(this.language);
      }

      try {
        const BODY = {
          phone: this.phone,
          fullname: this.fullname,
          dob: this.dob,
          gender: this.gender,
          email_noti: this.email_noti,
          company_name: this.company_name,
          company_address: this.company_address,
          company_map: this.company_map,
          link_kakao: this.link_kakao,
          link_messenger: this.link_messenger,
          link_facebook: this.link_facebook,
          link_zalo: this.link_zalo,
        };
        const response = await postChangeUserInfor(BODY);
        if (response.status) {
          Toast.success(this.$t("TOAST_MESSAGE.CHANGE_PROFILE_SUCCESS"));
        } else {
          Toast.warning(response.message);
        }
        this.getProfile();
      } catch (error) {
        Toast.warning(this.$t("TOAST_MESSAGE.CHANGE_PROFILE_ERROR"));
      }
      this.is_process = false;
      this.is_edit = false;
    },

    handleShowOldPassword() {
      this.is_show_old = !this.is_show_old;
    },

    handleShowNewPassword() {
      this.is_show_new = !this.is_show_new;
    },

    handleChange() {
      this.is_edit = true;
    },

    handleCancelChange() {
      if (this.is_edit) {
        this.getProfile();
      }
      this.is_edit = false;
    },

    async handleChangePassword() {
      this.is_process = true;
      try {
        const BODY = {
          old_password: this.old_password,
          new_password: this.new_password,
        };
        const response = await postChangePassword(BODY);
        if (response.status) {
          Toast.success(this.$t("TOAST_MESSAGE.CHANGE_PASSWORD_SUCCESS"));

          this.$router.push({ name: "HomeShopCar" });
        } else {
          Toast.warning(response.message);
        }
      } catch (error) {
        Toast.warning(this.$t("TOAST_MESSAGE.CHANGE_LANGUAGE_ERROR"));
      }
      this.is_process = false;
    },

    async getProfile() {
      try {
        const response = await postUserInfor({});
        if (response.status) {
          this.fullname = response.data.name;
          this.email = response.data.email;
          this.email_noti = response.data.email_notification;
          this.phone = response.data.phone_number;
          this.gender = response.data.gender;
          this.dob = new Date(response.data.dob);
          this.company_name = response.data.company_name;
          this.company_address = response.data.company_address;
          this.company_map = response.data.company_map;
          this.link_kakao = response.data.link_kakao;
          this.link_messenger = response.data.link_messenger;
          this.link_facebook = response.data.link_facebook;
          this.link_zalo = response.data.link_zalo;

          await this.$store.dispatch("auth/setProfile", response.data);
        } else {
          Toast.warning(this.$t("TOAST_MESSAGE.GET_PROFILE_ERROR"));
        }
      } catch (error) {
        Toast.warning(this.$t("TOAST_MESSAGE.GET_PROFILE_ERROR"));
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
>
