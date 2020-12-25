<template>
  <Fragment>
    <div id="nav">
      <nuxt-link to="/">Home</nuxt-link>
      |
      <nuxt-link to="/faq">Поддержка</nuxt-link>
      |
      <nuxt-link to="/profile">Пользиватель</nuxt-link>
      |
      <nuxt-link to="/catalog">Каталог</nuxt-link>
      |
      <nuxt-link to="/goods">Каталог фильтр</nuxt-link>
      |
      <nuxt-link to="/order">Оформление заказа</nuxt-link>
      |
      <nuxt-link to="/premium">Premium</nuxt-link>
      Loggin: {{ isAuth }}
      <br />
      <small
        ><small>{{ token }}</small></small
      >
    </div>

    <Sprite />
    <Background />
    <Nav />
    <div class="wrapper">
      <Header />
      <!-- Page Content -->
      <Nuxt />
      <!-- / Page Content  -->
      <Auth />
    </div>
  </Fragment>
</template>

<script>
import Sprite from '@/components/layouts/Sprite'
import Header from '@/components/layouts/Header'
import Nav from '@/components/layouts/Nav'
import Background from '@/components/layouts/Background'
import { Fragment } from 'vue-fragment'
import Auth from '@/components/layouts/Auth'

export default {
  name: 'Layout',
  components: {
    Auth,
    Sprite,
    Header,
    Nav,
    Background,
    Fragment,
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/IS_LOGGED_IN']
    },
    token() {
      return this.$store.getters['auth/GET_TOKEN']
    },
    local() {
      return localStorage.getItem('access_token')
    },
  },
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}

#nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(#fff, 0.9);
  padding: 0.3rem;
  z-index: 1000;
  flex-wrap: wrap;

  a {
    margin: 0 0.7rem;
    display: block;
  }
}
</style>
