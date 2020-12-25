<template>
  <Fragment>
    <ul v-if="getList.length > 0" class="list__goods">
      <li v-for="item in getList" :key="item.id" class="list__goods_item">
        <div class="list__goods_title">{{ item.name }}</div>
        <div v-if="item.prefilters" class="list__goods_size">
          <span v-for="(sib, index) in item.prefilters" :key="sib.url">
            <a :href="sib.url">{{ sib.name }}</a>
            {{ index === 0 ? '/' : '' }}
          </span>
        </div>
        <div class="list__goods_info">
          <span>{{ item.pcount }} товаров</span>
          <span>{{ item.tocount }} модификаций</span>
          <!--          <span v-if="item.prefilters">-->
          <!--            <a v-for="sib in item.prefilters" :key="sib.url" :href="sib.url">{{-->
          <!--              sib.name-->
          <!--            }}</a>-->
          <!--          </span>-->
        </div>
      </li>
    </ul>
    <!--    <div v-else class="list__goods_title">-->
    <!--      <div>Нет товара для бренда №{{ $route.query.brand }}</div>-->
    <!--    </div>-->
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
