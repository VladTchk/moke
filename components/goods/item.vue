<template>
  <div class="catalog__goods">
    <div class="catalog__name">
      <span>{{ item.name }}</span>
    </div>

    <div class="catalog__select">
      <label
        v-for="(value, key) of tradeOffers"
        :key="key"
        class="catalog__select_item"
      >
        <input
          type="radio"
          :name="`goods_${uniqNames}`"
          :checked="key === currentWeight"
          @change="changeWeight(key)"
        />
        <span>{{ key }}</span>
      </label>
    </div>

    <div class="catalog__select">
      <label
        v-for="(value, key) of currentLineList"
        :key="key"
        class="catalog__select_item"
      >
        <input
          type="radio"
          :name="`goods_${currentWeight}_${uniqNames}`"
          :checked="key === currentLine"
          @change="changeLine(key)"
        />
        <span>{{ key }}</span>
      </label>
    </div>

    <div v-show="currentCount > 0" class="catalog__count count">
      <button class="count__minus" type="button" @click="removeCount">
        <svg class="icon">
          <use xlink:href="#minus" />
        </svg>
      </button>
      <label class="count__label">
        <input
          type="text"
          class="count__input"
          :value="currentCount"
          readonly
        />
      </label>
      <button class="count__plus" type="button" @click="addCount">
        <svg class="icon">
          <use xlink:href="#plus" />
        </svg>
      </button>
    </div>
    <!--    currentOffers.id-->
    <!--    :disabled="!currentOffers.id"-->
    <button
      v-show="currentCount <= 0"
      :disabled="currentId === 0"
      class="catalog__buy"
      type="button"
      @click="addCount"
    >
      В корзину
    </button>

    <div class="catalog__price">{{ currentPrice }}</div>
  </div>
</template>

<script>
// import axios from '@/plugins/axios'

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
      currentWeight: '',
      currentLine: '',
      // price: 0,
      details: {
        // brand_id: 0,
        // category_id: 0,
        // code: '0',
        // created_at: '0',
        // deleted_at: null,
        // description: null,
        // id: 0,
        // meta_description: null,
        // meta_keywords: null,
        // meta_title: null,
        // name_1: '',
        // name_2: '',
        // slug: '',
        // sorting: 0,
        // store_id: '',
        // trade_offers: [
        //   {
        //     id: 0,
        //     name: '',
        //     price: '0',
        //     product_id: 0,
        //     sorting: 0,
        //   },
        // ],
        // updated_at: '',
      },
    }
  },
  computed: {
    uniqNames() {
      return Math.trunc(Math.random() * 1000)
    },
    tradeOffers() {
      return this.filterProps(this.item.tradeOffers)
    },
    currentLineList() {
      return this.tradeOffers[this.currentWeight]
    },
    currentOffers() {
      if (this.currentWeight && this.currentLine) {
        return this.tradeOffers[this.currentWeight][this.currentLine]
      }
      return null
    },
    currentId() {
      return this.currentOffers ? this.currentOffers.id : 0
    },
    currentPrice() {
      return this.currentOffers
        ? `${Math.trunc(+this.currentOffers.price)} ₽`
        : ''
      // : Object.values(Object.values(this.tradeOffers)[0])[0].price
    },
    currentCount() {
      return 0
    },
    price2() {
      return 0

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
    // axios
    //   .get(`/product/${this.item.id}`)
    //   .then((res) => {
    //     // eslint-disable-next-line no-console
    //     console.log('res.data)', res.data)
    //     this.details = {
    //       ...res.data,
    //     }
    //   })
    //   .catch((error) => {
    //     // eslint-disable-next-line no-console
    //     console.log(error)
    //   })
    // const size = this.item.variations.length
    // this.counts = [...Array(size)].map(() => new Array(size).fill(0))
  },
  methods: {
    changeWeight(key) {
      this.currentWeight = key
    },
    changeLine(key) {
      this.currentLine = key
    },
    filterProps(arr) {
      const newObj = {}
      arr.forEach((item, idx) => {
        const obj2 = {}
        item.properties.forEach((props) => {
          if (props.name === 'Линейка') {
            obj2.line = props.value
          }
          if (props.name === 'Вес (граммы)') {
            obj2.weight = props.value
          }
        })
        if (!newObj[obj2.weight]) {
          newObj[obj2.weight] = {}
        }
        newObj[obj2.weight][obj2.line] = {
          id: item.id,
          price: item.price,
          count: 0,
        }

        if (idx === 0) {
          this.currentWeight = obj2.weight
          this.currentLine = obj2.line
        }
      })

      return newObj
    },
    addCount() {
      const id = this.currentOffers.id
      this.$store
        .dispatch('cart/ADD_ITEM', id)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log('res', res)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error)
        })

      alert(`Добавлен товар с id: ${id}`)
      //   this.counts[this.currentSize][this.currentSet] += 1
      //   this.counts = [...this.counts]
      //   this.$store.commit('cart/SET_CART', {
      //     item: this.item,
      //     counts: this.counts,
      //   })
    },
    removeCount() {
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
    },
  },
}
</script>
