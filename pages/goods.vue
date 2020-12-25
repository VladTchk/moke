<template>
  <div class="catalog">
    <div class="catalog__top">
      <a href="#modal-filter" class="catalog__info js-popup">
        <img src="@/assets/img/tabak_3.png" alt="img" />
      </a>

      <form
        id="modal-filter"
        action="#"
        method="get"
        class="modals modals-filter mfp-hide zoom-anim-dialog"
      >
        <div class="modals-filter__head">
          <div class="order__title">Выберите 1 или несколько брендов</div>
          <div class="modals-filter__nav">
            <div class="modals-filter__items">
              <a href="#" class="modals-filter__link">Adalya</a>
              <a href="#" class="modals-filter__link">DARKSIDE</a>
            </div>
            <button class="modals-filter__reset" type="reset">
              Очистить все
            </button>
          </div>
        </div>

        <div class="modals-filter__list">
          <label v-for="i in 3" :key="i" class="modals-filter__label">
            <input type="checkbox" />
            <span>Adalya {{ i }}</span>
          </label>
        </div>
        <button class="modals-filter__submit" type="button">ПРИМЕНИТЬ</button>
      </form>

      <div class="catalog__wr">
        <div class="catalog__sort">
          <label class="catalog__slide">
            <input type="checkbox" />
            <span></span>
          </label>

          <div class="catalog__selected">50гр</div>
          <div class="catalog__selected">100гр</div>
          <div class="catalog__selected">250гр</div>
          <div class="catalog__selected">Base</div>
          <div class="catalog__selected">Core</div>
          <div class="catalog__selected">Rare</div>
          <!--          <div class="catalog__select">-->
          <!--            <label v-for="i in 3" :key="i" class="catalog__select_item">-->
          <!--              <input type="radio" :name="'goods_'" :checked="i === 0" />-->
          <!--              <span>dd {{ i }}</span>-->
          <!--            </label>-->
          <!--          </div>-->
        </div>
        <div class="catalog__filter" :class="{ active: isOpenFilters }">
          <SelectGoods
            v-for="item in goodsFilters"
            :key="item.title"
            :type="item.type"
            :title="item.title"
            :name="item.name"
            :list="item.list"
          />
        </div>
      </div>

      <div class="catalog__lang">
        <button class="catalog__lang_btn active" type="button">En</button>
        <button class="catalog__lang_btn" type="button">Ru</button>
      </div>
      <button
        class="catalog__toggle"
        type="button"
        @click="isOpenFilters = !isOpenFilters"
      >
        <svg class="icon">
          <use xlink:href="#filter" />
        </svg>
      </button>

      <div class="catalog__action">
        <UserNav />
      </div>
    </div>

    <div class="catalog__main">
      <ul class="catalog__aside">
        <li v-for="item in alphabet" :key="item">
          <a :href="'#' + letterTitle(item[0])" class="catalog__letter">
            {{ letterTitle(item[0]) }}
          </a>
        </li>
      </ul>

      <div class="catalog__middle">
        <template v-if="cartCount === -1">
          <small>{{ cartList }}</small>
          <br />
        </template>
        <div class="catalog__sorting">
          <div class="catalog__sorting_title">Сортировать по:</div>
          <button
            class="catalog__sorting_btn"
            :class="{ active: sortType === 'popular' }"
            type="button"
            @click="sortType = 'popular'"
          >
            популярности
          </button>
          <button
            class="catalog__sorting_btn"
            :class="{ active: sortType === 'price' }"
            type="button"
            @click="sortType = 'price'"
          >
            цене
          </button>
          <button
            class="catalog__sorting_btn"
            :class="{ active: sortType === 'new' }"
            type="button"
            @click="sortType = 'new'"
          >
            новинкам
          </button>
          <button
            class="catalog__sorting_btn"
            :class="{ active: sortType === 'abc' }"
            type="button"
            @click="sortType = 'abc'"
          >
            алфавиту
          </button>

          <button class="catalog__sorting_filter" type="button">
            <svg class="icon">
              <use xlink:href="#sort" />
            </svg>
          </button>
        </div>

        <!--        <h3>Select filter: {{ selectedVal }}</h3>-->
        <!--        <br />-->
        <!--        <div-->
        <!--          v-for="item in alphabet"-->
        <!--          :key="item"-->
        <!--          style="display: inline-block; margin: 0 2.5rem 1.5rem 0"-->
        <!--        >-->
        <!--          <h5>{{ item }}</h5>-->
        <!--        </div>-->
        <div class="catalog__list">
          <div class="catalog__item">
            <!--              <div-->
            <!--                v-if="check(item.name[0])"-->
            <!--                :id="letterTitle(item.name[0])"-->
            <!--                :key="item.desc"-->
            <!--                class="catalog__title"-->
            <!--              >-->
            <!--                {{ letterTitle(item.name[0]) }}-->
            <!--              </div>-->
            <ItemGoods
              v-for="item in goodsFilter(productsList)"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>

      <Tobacco />
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
import ItemGoods from '@/components/goods/item'
import Tobacco from '@/components/goods/tobacco'
import SelectGoods from '@/components/goods/select'

export default {
  name: 'Goods',
  components: { ItemGoods, UserNav, Tobacco, SelectGoods },
  async fetch() {
    await this.$store.dispatch('products/FETCH_LIST')
  },
  // async fetch({ store }) {
  //   if (store.getters['goods/GOODS_LIST'].length === 0) {
  //     await store.dispatch('goods/FETCH')
  //   }
  // },
  data() {
    return {
      lastLetter: {}, // abcdefghijklmnopqrstuvwxyz
      isOpenFilters: true,
      sortType: 'new',
    }
  },
  computed: {
    productsList() {
      return this.$store.getters['products/PRODUCTS_LIST']
    },
    // goodsList() {
    //   return this.$store.getters['goods/GOODS_LIST']
    // },
    goodsFilters() {
      return []
      // return this.$store.getters['goods/GOODS_FILTERS']
    },
    // cartList() {
    //   return this.$store.getters['cart/CART_LIST']
    // },
    cartList() {
      return []
    },
    cartCount() {
      return []
    },
    // cartCount() {
    //   return this.$store.getters['cart/CART_COUNT']
    // },
    alphabet() {
      return 'abcdefghijklmnopqrstuvwxyz'.split('')
    },
  },
  methods: {
    letterTitle(letter) {
      return letter.toUpperCase() + '' + letter.toLowerCase()
    },
    // check(letter) {
    //   const check = this.lastLetter[letter.toLowerCase()] === undefined
    //   this.lastLetter[letter.toLowerCase()] = 0
    //   return check
    // },
    goodsFilter(list) {
      // eslint-disable-next-line no-console
      // console.log('selectedVal: ' + this.selectedVal)

      // const filtered = list.filter((item) => {
      //   const is = this.selectedVal.every((word) => {
      //     return item.taste.basic.includes(word)
      //   })
      //   return is
      // })

      // eslint-disable-next-line no-console
      // console.log(filtered)

      // return filtered
      return list
    },
  },
  head: {
    title: 'FiXmoke - Каталог бренду',
  },
}
</script>
