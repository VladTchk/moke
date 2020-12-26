<template>
  <div class="grid">
    <div class="grid__left">
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex _</a>
      <br />
      <button type="button" @click.stop="openForm">Войти</button>
      <!--      <br />-->
      <!--      <button type="button" @click="check">check</button>-->
      <!--      <br />-->
      <!--      {{ token }}-->
      <!--      <br />-->
      <!--      {{ info }}-->
    </div>
  </div>
</template>

<script>
// import axios from '@/plugins/axios'

export default {
  data() {
    return {
      info: '',
    }
  },
  computed: {
    // token() {
    //   return this.$store.getters['auth/GET_TOKEN']
    // },
  },
  methods: {
    openForm() {
      console.log('openForm')
      this.$store.dispatch('auth/TOGGLE_FORM', true)
    },
    // check() {
    //   axios
    //     .get('/auth/profile')
    //     .then((res) => {
    //       // eslint-disable-next-line no-console
    //       console.log('/auth/profile', res)
    //       this.info = res.data
    //     })
    //     .catch((error) => {
    //       // eslint-disable-next-line no-console
    //       console.log('/auth/profile', error)
    //     })
    //     .finally(() => {
    //       // eslint-disable-next-line no-console
    //       console.log('end')
    //     })
    // },
  },
}
</script>
