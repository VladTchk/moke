<template>
  <div class="grid">
    <div class="grid__left grid__left-fix">
      <ul class="grid__nav">
        <li class="grid__nav_item">
          <a href="#" class="grid__nav_link active">Каталог</a>
        </li>
        <li class="grid__nav_item">
          <a href="#" class="grid__nav_link">Табак</a>
        </li>
        <li class="grid__nav_item">
          <a href="#" class="grid__nav_link">Кальяны</a>
        </li>
        <li class="grid__nav_item">
          <a href="#" class="grid__nav_link">Аксессуары</a>
        </li>
        <li class="grid__nav_item">
          <a href="#" class="grid__nav_link">Уголь</a>
        </li>
      </ul>

      <Brands />
    </div>

    <div class="grid__right">
      <div class="order__top grid__top">
        <UserNav />
      </div>

      <ul class="list__goods">
        <li class="list__goods_item">
          <div class="list__goods_title">DARKSIDE</div>
          <div class="list__goods_size">30гр / 100гр / 250гр</div>
          <div class="list__goods_info">
            <span>10 товаров</span>
            <span>7 модификаций</span>
          </div>
        </li>

        <li v-for="i in 12" :key="i" class="list__goods_item">
          <div class="list__goods_title">DARKSIDE {{ i }}</div>
          <div class="list__goods_size">30гр / 100гр / 250гр</div>
          <div class="list__goods_info">
            <span>10 товаров</span>
            <span>7 модификаций</span>
          </div>
        </li>
        <li class="list__goods_item">
          <div class="list__goods_title">DARKSIDE АКСЕССУАРЫ</div>
          <div class="list__goods_size">30гр / 100гр / 250гр</div>
          <div class="list__goods_info">
            <span>10 товаров</span>
            <span>7 модификаций</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
import Brands from '@/components/catalog/brands'
export default {
  name: 'Catalog',
  components: { Brands, UserNav },
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
