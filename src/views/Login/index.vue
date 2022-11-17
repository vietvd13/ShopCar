<template>
  <div class="login-page">
    <b-container fluid>
      <div class="form-login">
        <b-row align-h="center">
          <b-col cols="12" xs="12" sm="12" md="8" lg="6" xl="4">
            <div class="title-login">
              <span>{{ $t('DASHBOARD.LOGIN.TITLE') }}</span>
            </div>

            <div class="item-form">
              <label for="input-email">{{ $t('DASHBOARD.LOGIN.EMAIL') }}</label>
              <b-form-input 
                id="input-email"
                v-model="Account.email"
                @keyup.enter="handleLogin"
              />
            </div>

            <div class="item-form">
              <label for="input-password">{{ $t('DASHBOARD.LOGIN.PASSWORD') }}</label>
              <b-form-input
                id="input-password"
                type="password"
                v-model="Account.password"
                @keyup.enter="handleLogin"
              />
            </div>

            <div class="submit-login">
              <b-button 
                class="btn-app btn-login"
                @click="handleLogin"
              >
                {{ $t('DASHBOARD.LOGIN.LOGIN') }}
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import Toast from '../../toast';
import { validEmail, validPassword } from '../../utils/validate';
import { setLoading } from '../../utils/setLoading';
import { postLogin } from '../../api/modules/Auth';

export default {
  name: 'LoginApp',
  data() {
    return {
      Account: {
        email: 'vuducviet0131@gmail.com',
        password: '123456',
      }
    }
  },
  methods: {
    handleLogin() {
      if (validEmail(this.Account.email) && validPassword(this.Account.password)) {
        this.submitAccout();
      } else {
        Toast.warning(this.$t('TOAST_MESSAGE.VALIDATE_ACCOUNT_LOGIN'));
      }
    },
    async submitAccout() {
      try {
        setLoading(true);

        const BODY = {
          email: this.Account.email,
          password: this.Account.password
        };

        const { status_code, access_token, refresh_token, user } = await postLogin(BODY);

        if (status_code === 200) {
          this.$store.dispatch('auth/setToken', access_token)
          .then(() => {
            this.$store.dispatch('auth/setRefreshToken', refresh_token)
              .then(() => {
                this.$store.dispatch('auth/setAsyncRoutes')
                  .then(() => {
                    this.$store.dispatch('auth/setProfile', user)
                      .then(() => {
                        this.$router.push({ name: 'Dashboard' });
                      })
                  })
              })
          }).catch(() => {
            Toast.warning(this.$t('TOAST_MESSAGE.LOGIN_ERROR'));
          })
        } else {
          Toast.warning(this.$t('TOAST_MESSAGE.LOGIN_ERROR'));
        }

        setLoading(false);
      } catch (err) {
        Toast.warning(this.$t('TOAST_MESSAGE.LOGIN_ERROR'));
        
        setLoading(false);
        console.log(err);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.login-page {
  height: 100vh;
  overflow: hidden;

  .form-login {
    margin-top: 15%;

    .title-login {
      font-size: 25px;
      margin-bottom: 25px;
      text-align: center;
    }

    .item-form {
      margin-bottom: 15px;
    }

    .submit-login {
      margin-top: 10%;
      text-align: center;

      .btn-login {
        min-width: 150px;
      }
    }
  }
}
</style>