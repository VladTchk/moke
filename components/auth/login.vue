<template>
  <Fragment>
    <div class="auth__head">
      <div class="auth__head_icon">
        <svg class="icon">
          <use xlink:href="#profile" />
        </svg>
      </div>
      <button class="auth__close" type="button" @click="closeAuth">
        <svg class="icon">
          <use xlink:href="#login" />
        </svg>
      </button>
    </div>

    <Fragment v-if="isAuthPhone">
      <div class="auth__title">
        Войти или
        <a href="#" class="" @click.stop="openReq">создать</a>
        профиль
      </div>
      <form class="auth__form" @submit.prevent="submitPhone">
        <label class="auth__label">
          <span class="auth__text">Контактный телефон</span>
          <inputMask
            v-model="numberTel"
            class="auth__input"
            mask="+7 ### ### ## ##"
            type="tel"
            placeholder="+7"
          />
        </label>
        <button
          class="auth__btn btn"
          :disabled="numberTel.length !== 10"
          type="submit"
        >
          Получить код
        </button>
        <button class="auth__login" type="button" @click="toggleMethod">
          Войти по паролю
        </button>
      </form>
    </Fragment>

    <Fragment v-if="!isAuthPhone">
      <div class="auth__title">Войти по паролю</div>
      <div class="auth__text">
        Для входа по телефону используйте 7ХХХХХХХХХХ
      </div>
      <form class="auth__form" @submit.prevent="submitLogin">
        <label class="auth__label">
          <input
            v-model="login"
            class="auth__input"
            type="text"
            placeholder="Email или телефон"
          />
        </label>
        <label class="auth__label">
          <input
            v-model="password"
            class="auth__input"
            type="password"
            placeholder="Пароль"
          />
        </label>
        <button class="auth__login" type="button" @click="toggleMethod">
          Забыли пароль?
        </button>
        <button
          class="auth__btn btn"
          :disabled="login.length < 8 || password.length < 8"
          type="submit"
        >
          Войти
        </button>
        <button class="auth__login" type="button" @click="toggleMethod">
          Войти по коду из СМС
        </button>
      </form>
    </Fragment>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { TheMask } from 'vue-the-mask'

export default {
  name: 'Login',
  components: {
    inputMask: TheMask,
    Fragment,
  },
  data() {
    return {
      numberTel: '',
      numberCode: '',
      isAuthPhone: false,
      login: 'romanu417@gmail.com',
      password: 'romanu417',
      // login: '',
      // password: '',
    }
  },
  methods: {
    closeAuth(e) {
      e.preventDefault()
      this.$root.$emit('closeAuth')
    },
    openReq(e) {
      e.preventDefault()
      this.$root.$emit('openAuth', 'registration')
    },
    submitPhone(e) {
      e.preventDefault()
      if (this.numberTel.length === 10) {
        this.isDone = true
      } else if (this.numberTel.length !== 10) {
        this.showLoginError({ title: 'Телефон', message: 'Слишком короткий' })
      }
      return false
    },
    submitLogin() {
      const form = {
        login: this.login,
        password: this.password,
        validator: 'permanent',
      }
      this.$store.dispatch('auth/AUTH', form)
      // if (this.numberTel.length === 10) {
      //   this.isDone = true
      // } else if (this.numberTel.length !== 10) {
      //   this.showLoginError({ title: 'Телефон', message: 'Слишком короткий' })
      // }
      // return false
    },
    toggleMethod() {
      this.isAuthPhone = !this.isAuthPhone
    },
  },
  notifications: {
    showLoginError: {
      title: 'Error',
      message: 'Failed',
      type: 'error',
    },
  },
}
</script>
