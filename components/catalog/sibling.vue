<template>
  <Fragment>
    <ul v-if="getList.length > 0" class="list__goods">
      <li
        v-for="item in getList"
        :key="item.id"
        class="list__goods_item"
        :style="{ backgroundImage: `url(${item.background})` }"
      >
        <div v-if="item.icon_url" class="list__goods_title">
          <img
            v-if="item.icon_url"
            :src="item.icon_url"
            :alt="item.title"
            width="30"
          />
        </div>
        <a
          :href="item.url"
          :class="{
            list__goods_title: !item.icon_url,
            list__goods_size: item.icon_url,
          }"
        >
          {{ item.title }}
        </a>

        <div v-if="item.prefilters" class="list__goods_size">
          <span
            v-for="(sib, index) in item.prefilters"
            :key="sib.name + sib.url"
          >
            {{ index === 0 ? '' : '/' }}
            <a :href="sib.url">{{ sib.name }}</a>
          </span>
        </div>
        <div v-if="false" class="list__goods_info">
          <span>{{ item.pcount }} товаров</span>
          <span>{{ item.tocount }} модификаций</span>
        </div>
      </li>
    </ul>
    <div v-else class="list__goods_title">
      <div>Нет банеров для бренда №{{ $route.query.brand }}</div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'Sibling',
  components: { Fragment },
  props: {
    category: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: '',
    },
  },
  computed: {
    getList() {
      return this.$store.getters['categories/SIBLING_LIST']
    },
  },
  mounted() {
    this.$store.dispatch('categories/FETCH_SIBLING', {
      brand: this.$route.query.brand,
      category: this.$route.params.id,
    })
  },
}
</script>
