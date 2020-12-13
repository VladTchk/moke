<template>
  <Fragment>
    <template v-if="!isDone">
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
      <div class="auth__title">Регистрация</div>
      <form class="auth__form" @submit="submitReq">
        <label class="auth__label">
          <input
            ref="nameInput"
            v-model="name"
            type="text"
            class="auth__input"
            placeholder="Имя"
          />
        </label>
        <label class="auth__label">
          <input
            v-model="email"
            type="email"
            class="auth__input"
            placeholder="Email"
          />
        </label>
        <label class="auth__label">
          <inputMask
            v-model="numberTel"
            class="auth__input"
            mask="+7 ### ### ## ##"
            type="tel"
            placeholder="Телефон"
          />
        </label>
        <label class="auth__label">
          <input
            v-model="password"
            type="password"
            class="auth__input"
            placeholder="Пароль"
          />
        </label>
        <button class="auth__btn btn" :disabled="hasErrors" type="submit">
          Зарегистрироваться
        </button>
        <div class="auth__poly auth__text">
          <svg class="icon">
            <use xlink:href="#correct" />
          </svg>
          <span>
            Согласен с условиями
            <br />
            <a href="#" class="auth__poly_link">Публичной офферты</a>
          </span>
        </div>
      </form>
    </template>
    <template v-else>
      <div class="auth__head">
        <div class="auth__head_icon">
          <svg class="icon">
            <use xlink:href="#back" />
          </svg>
        </div>
        <button class="auth__close" type="button" @click="closeAuth">
          <svg class="icon">
            <use xlink:href="#login" />
          </svg>
        </button>
      </div>
      <div class="auth__title">Письмо отправлено</div>
      <div class="auth__text">Не забудьте проерить папку СПАМ :)</div>
      <div class="auth__text">
        Если возникли трудности напишите нам на почту
        <br />
        <a href="mailto:help@fixmoke.ru">help@fixmoke.ru</a>
      </div>
      <div class="auth__text">
        или позвоните по телефону
        <br />
        <a href="tel:+74951553777">+7 495 155 37 77</a>
      </div>
    </template>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { TheMask } from 'vue-the-mask'

export default {
  name: 'Registration',
  components: {
    inputMask: TheMask,
    Fragment,
  },
  data() {
    return {
      hasErrors: false,
      numberTel: '',
      name: '',
      email: '',
      password: '',
      isDone: false,
    }
  },
  methods: {
    closeAuth() {
      this.$root.$emit('closeAuth')
    },
    submitReq(e) {
      e.preventDefault()
      this.hasErrors = false
      if (
        this.name.length >= 2 &&
        this.email.length >= 8 &&
        this.numberTel.length === 10 &&
        this.password.length >= 8
      ) {
        this.isDone = true
      } else {
        this.hasErrors = true
        if (this.name.length < 2) {
          this.showLoginError({ title: 'Имя', message: 'Слишком короткое' })
        }
        if (this.email.length < 8) {
          this.showLoginError({ title: 'Email', message: 'Слишком короткий' })
        }
        if (this.numberTel.length !== 10) {
          this.showLoginError({ title: 'Телефон', message: 'Слишком короткий' })
        }
        if (this.password.length < 8) {
          this.showLoginError({ title: 'Пароль', message: 'Слишком короткий' })
        }
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
