<template>
  <div v-click-outside="closeAuth" class="auth" :class="{ active: isOpenAuth }">
    <Login v-if="currentAuth === 'login'" />
    <Registration v-if="currentAuth === 'registration'" />
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import login from '@/components/auth/login'
import registration from '@/components/auth/registration'

export default {
  name: 'Auth',
  components: {
    login,
    registration,
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isOpenAuth: false,
      currentAuth: 'login',
      step: 2,
    }
  },
  mounted() {
    this.$root.$on('openAuth', (page) => {
      switch (page) {
        case 'registration':
          this.currentAuth = 'registration'
          break
        case 'login':
          this.currentAuth = 'login'
          break
        default:
          this.currentAuth = 'login'
      }
      this.openAuth()
    })
    this.$root.$on('closeAuth', () => {
      this.closeAuth()
    })
  },
  methods: {
    closeAuth() {
      this.isOpenAuth = false
    },
    openAuth() {
      this.isOpenAuth = true
    },
  },
}
</script>
