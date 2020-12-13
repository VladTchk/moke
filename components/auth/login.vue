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
    <div class="auth__title">
      Войти или
      <a href="#" class="" @click.stop="openReq">создать</a>
      профиль
    </div>
    <form class="auth__form" @submit="submitLogin">
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
      <button class="auth__login" type="button">Войти по паролю</button>
    </form>
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
      authMethod: 'phone',
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
    submitLogin(e) {
      e.preventDefault()
      if (this.numberTel.length === 10) {
        this.isDone = true
      } else if (this.numberTel.length !== 10) {
        this.showLoginError({ title: 'Телефон', message: 'Слишком короткий' })
      }
      return false
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
