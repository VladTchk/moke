<template>
  <form class="search" :class="{ active: isActive }" action="#" method="get">
    <button class="search__close" type="button" @click="closeSearch">
      &times;
    </button>
    <div class="search__content">
      <div class="search__top">
        <label class="search__label">
          <input
            ref="search__input"
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
      body: document.querySelector('body'),
    }
  },
  mounted() {
    this.$root.$on('showSearch', () => {
      this.body.classList.add('overflow')
      this.isActive = true
      this.body.addEventListener('keydown', this.keyCheck)
    })
  },
  methods: {
    closeSearch() {
      this.body.classList.remove('overflow')
      this.isActive = false
      this.body.removeEventListener('keydown', this.keyCheck)
    },
    keyCheck(e) {
      if (e.keyCode === 27) {
        this.closeSearch()
      }
    },
  },
}
</script>
