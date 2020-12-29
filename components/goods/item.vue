<template>
  <div class="catalog__goods">
    <div class="catalog__name">
      <span>id:{{ item.id }} {{ item.name_1 }} </span>
      <!--      <span>-->
      <!--        <small>{{ item.taste.basic }}</small>-->
      <!--      </span>-->
    </div>

    <!--    <div v-for="mod of details.trade_offers" :key="mod.code">-->
    <!--      id: {{ mod.id }},-->
    <!--      name: {{ mod.name.replace(item.name_1, '') }}-->
    <!--    </div>-->

    <div class="catalog__select">
      <label
        v-for="(mod, i) of details.trade_offers"
        :key="mod.name"
        class="catalog__select_item"
      >
        <input
          type="radio"
          :name="'goods_1' + uniqNames"
          :checked="i === currentSize"
          @change="currentSize = i"
        />
        <span>{{ mod.name.replace(item.name_1, '') }}</span>
      </label>
    </div>

    <div class="catalog__price">{{ price }} ₽</div>

    <!--    <div class="catalog__select">-->
    <!--      <label-->
    <!--        v-for="(info, i) in item.variations"-->
    <!--        :key="i"-->
    <!--        class="catalog__select_item"-->
    <!--      >-->
    <!--        <input-->
    <!--          type="radio"-->
    <!--          :name="'goods_1' + uniqNames"-->
    <!--          :checked="i === currentSize"-->
    <!--          @change="currentSize = i"-->
    <!--        />-->
    <!--        <span>{{ info.size }}</span>-->
    <!--      </label>-->
    <!--    </div>-->

    <!--    <div class="catalog__select">-->
    <!--      <label-->
    <!--        v-for="(info, i) in item.variations[0].set"-->
    <!--        :key="info.set"-->
    <!--        class="catalog__select_item"-->
    <!--      >-->
    <!--        <input-->
    <!--          type="radio"-->
    <!--          :name="'goods_2' + uniqNames"-->
    <!--          :checked="i === currentSet"-->
    <!--          @change="currentSet = i"-->
    <!--        />-->
    <!--        <span>{{ info.name }}</span>-->
    <!--      </label>-->
    <!--    </div>-->

    <!--    <div v-show="currentCount > 0" class="catalog__count count">-->
    <!--      <button class="count__minus" type="button" @click="removeCount">-->
    <!--        <svg class="icon">-->
    <!--          <use xlink:href="#minus" />-->
    <!--        </svg>-->
    <!--      </button>-->
    <!--      <label class="count__label">-->
    <!--        <input-->
    <!--          type="text"-->
    <!--          class="count__input"-->
    <!--          :value="currentCount"-->
    <!--          readonly-->
    <!--        />-->
    <!--      </label>-->
    <!--      <button class="count__plus" type="button" @click="addCount">-->
    <!--        <svg class="icon">-->
    <!--          <use xlink:href="#plus" />-->
    <!--        </svg>-->
    <!--      </button>-->
    <!--    </div>-->

    <!--    <button-->
    <!--      v-show="currentCount <= 0"-->
    <!--      class="catalog__buy"-->
    <!--      type="button"-->
    <!--      @click="addCount"-->
    <!--    >-->
    <!--      В корзину-->
    <!--    </button>-->

    <!--    <div class="catalog__price">{{ price }} ₽</div>-->
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentSize: 0,
      details: {
        brand_id: 0,
        category_id: 0,
        code: '0',
        created_at: '0',
        deleted_at: null,
        description: null,
        id: 0,
        meta_description: null,
        meta_keywords: null,
        meta_title: null,
        name_1: '',
        name_2: '',
        slug: '',
        sorting: 0,
        store_id: '',
        trade_offers: [
          {
            name: '',
            price: '0',
            product_id: 0,
            sorting: 0,
          },
        ],
        updated_at: '',
      },
    }
  },
  computed: {
    uniqNames() {
      return Math.random()
    },
    price() {
      return this.details.trade_offers[this.currentSize].price

      // const size = this.currentSize
      // const set = this.currentSet
      // const price = this.item.variations[size].set[set].price
      // return Math.max(1, this.currentCount) * price
    },
    // currentCount() {
    //   return this.counts[this.currentSize][this.currentSet]
    // },
  },
  mounted() {
    axios
      .get(`/product/${this.item.id}`)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('res.data)', res.data)
        this.details = res.data
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    // const size = this.item.variations.length
    // this.counts = [...Array(size)].map(() => new Array(size).fill(0))
  },
  methods: {
    // addCount() {
    //   this.counts[this.currentSize][this.currentSet] += 1
    //   this.counts = [...this.counts]
    //   this.$store.commit('cart/SET_CART', {
    //     item: this.item,
    //     counts: this.counts,
    //   })
    // },
    // removeCount() {
    //   this.counts[this.currentSize][this.currentSet] -= 1
    //   this.counts = [...this.counts]
    //   const goodsLength = this.counts.flat().filter((item) => item > 0)
    //   if (goodsLength.length > 0) {
    //     this.$store.commit('cart/SET_CART', {
    //       item: this.item,
    //       counts: this.counts,
    //     })
    //   } else {
    //     this.$store.commit('cart/DECREMENT_CART', this.item.id)
    //   }
    // },
  },
}
</script>
