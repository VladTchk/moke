<template>
  <div class="grid">
    <div class="grid__left">
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex _</a>
      <br />
      <button type="button" @click.stop="openForm">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: '',
    }
  },
  methods: {
    openForm() {
      this.$store.dispatch('auth/TOGGLE_FORM', true)
    },
  },
}
</script>
