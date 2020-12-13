<template>
  <ul class="list__menu">
    <li v-for="item in brandsList" :key="item.letter" class="list__item">
      <div class="list__letter">{{ item.letter.toUpperCase() }}</div>
      <ul class="list__maker">
        <li v-for="brand in item.brands" :key="brand.name">
          <a :href="`#${brand.id}`" class="list__maker_link"
            >{{ brand.name }}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Brands',
  async fetch() {
    if (this.$store.getters['catalog/BRANDS_LIST'].length === 0) {
      await this.$store.dispatch('catalog/FETCH')
    }
  },
  computed: {
    brandsList() {
      return this.$store.getters['catalog/BRANDS_LIST']
    },
  },
}
</script>
