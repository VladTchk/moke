<template>
  <div class="grid">
    <div class="grid__left grid__left-fix">
      <ul class="grid__nav">
        <li class="grid__nav_item">
          <nuxt-link
            :to="`/catalog`"
            class="grid__nav_link"
            active-class="---active"
            :class="{ active: $route.path === `/catalog` }"
            exact
          >
            Каталог
          </nuxt-link>
        </li>
        <li
          v-for="item in categoriesList"
          :key="item.id"
          class="grid__nav_item"
        >
          <nuxt-link
            :to="`/catalog/${item.id}`"
            class="grid__nav_link"
            active-class="---active"
            :class="{ active: $route.path === `/catalog/${item.id}` }"
            exact
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>

      <NuxtChild :id="$route.params.id" :key="$route.params.id" />
    </div>

    <div class="grid__right">
      <div class="order__top grid__top">
        <UserNav />
      </div>

      <Sibling
        v-if="$route.query.brand"
        :category="$route.params.id"
        :brand="$route.query.brand"
      />
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
import Sibling from '@/components/catalog/sibling'

export default {
  name: 'Catalog',
  components: { UserNav, Sibling },
  async fetch() {
    if (this.$store.getters['categories/CATEGORIES_LIST'].length === 0) {
      await this.$store.dispatch('categories/FETCH')
    }
  },
  data() {
    return {
      currentCategories: 0,
    }
  },
  computed: {
    categoriesList() {
      return this.$store.getters['categories/CATEGORIES_LIST']
    },
  },
  methods: {
    changeCategories(id) {
      this.currentCategories = id
    },
  },

  // async fetch({ store }) {
  //   if (store.getters['catalog/BRANDS_LIST'].length === 0) {
  //     await store.dispatch('catalog/FETCH')
  //   }
  // },
  // computed: {
  //   brandsList() {
  //     return this.$store.getters['catalog/BRANDS_LIST']
  //   },
  // },
  head: {
    title: 'FiXmoke - Каталог',
  },
}
</script>
