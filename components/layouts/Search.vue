<template>
  <form class="search" :class="{ active: isActive }" action="#" method="get">
    <button class="search__close" type="button" @click="closeSearch">
      &times;
    </button>
    <div class="search__content">
      <div class="search__top">
        <label class="search__label">
          <input
            type="text"
            class="search__input"
            placeholder="Поиск..."
            required
          />
        </label>
        <button class="search__submit" type="submit">
          <svg class="icon">
            <use xlink:href="#login" />
          </svg>
        </button>
      </div>
      <ul class="search__list">
        <li class="search__item">
          <a href="#" class="search__link">DARKSIDE Bananapapa</a>
        </li>
        <li class="search__item">
          <a href="#" class="search__link">DARKSIDE Bananapapa</a>
        </li>
        <li class="search__item">
          <a href="#" class="search__link">DARKSIDE Bananapapa</a>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.$root.$on('showSearch', () => {
      const body = document.querySelector('body')
      body.classList.add('overflow')
      this.isActive = true
    })
  },
  methods: {
    closeSearch() {
      const body = document.querySelector('body')
      body.classList.remove('overflow')
      this.isActive = false
    },
  },
}
</script>
