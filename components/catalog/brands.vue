<template>
  <ul class="list__menu">
    <li v-for="item in brandsList" :key="item.letter" class="list__item">
      <div class="list__letter">{{ item.letter.toUpperCase() }}</div>
      <ul class="list__maker">
        <li v-for="brand in item.brands" :key="brand.name">
          <nuxt-link
            :to="`${$route.path}?brand=${brand.id}`"
            class="list__maker_link"
            active-class="active"
            exact
            @click.native="updateSibling"
          >
            {{ brand.name }}
          </nuxt-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Brands',
  props: {
    categories: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    await this.$store.dispatch('brands/FETCH', {
      categories: this.categories,
    })
  },
  computed: {
    brandsList() {
      return this.$store.getters['brands/BRANDS_LIST']
    },
  },
  watch: {
    brandsList() {
      if (this.brandsList.length !== 0) {
        this.$nuxt.$loading.finish()
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  methods: {
    updateSibling() {
      // eslint-disable-next-line no-console
      console.log('updateSibling')

      this.$store.dispatch('categories/FETCH_SIBLING', {
        brand: this.$route.query.brand,
        category: this.$route.params.id,
      })
    },
  },
}
</script>
