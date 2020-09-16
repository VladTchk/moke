<template>
  <header class="header" :class="{ big: isBigMenu }">
    <nuxt-link to="/" class="header__logo">
      <img src="@/assets/img/logo.png" alt="logo" class="header__logo_first" />
      <img
        src="@/assets/img/logo2.png"
        alt="logo"
        class="header__logo_second"
      />
    </nuxt-link>

    <div class="header__middle">
      <button class="header__search" type="button" @click="showSearch">
        <svg class="icon">
          <use xlink:href="#search" />
        </svg>
      </button>
      <button class="header__toggle" type="button" @click="showMenu">
        <svg class="icon">
          <use xlink:href="#menu" />
        </svg>
      </button>
    </div>

    <div class="header__bottom">
      <a class="header__back" @click="$router.go(-1)">
        <svg class="icon">
          <use xlink:href="#left" />
        </svg>
        ВЕРНУТЬСЯ
      </a>
    </div>
    <Search />
  </header>
</template>

<script>
import Search from '@/components/layouts/Search.vue'

export default {
  name: 'Header',
  components: {
    Search,
  },
  computed: {
    isBigMenu() {
      return this.$route.name === 'goods'
    },
  },
  methods: {
    showSearch() {
      this.$root.$emit('showSearch')
    },
    showMenu() {
      this.$root.$emit('showMenu')
    },
  },
}
</script>
