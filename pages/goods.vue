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
          <label class="catalog__label">
            <Multiselect
              v-model="selectedVal"
              :options="options"
              :multiple="true"
              :searchable="false"
              placeholder="Базовый вкус"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              @input="setSelected"
            >
              <template
                slot="selection"
                slot-scope="{ values, search, isOpen }"
              >
                <span
                  v-if="values.length && !isOpen"
                  class="multiselect__single"
                >
                  Базовый вкус ({{ values.length }})
                </span>
                <span v-if="isOpen">Базовый вкус</span>
              </template>
            </Multiselect>
          </label>
          <!--          <label class="catalog__label">-->
          <!--            <select-->
          <!--              class="catalog__label_item select2-multiple"-->
          <!--              data-placeholder="Базовый вкус"-->
          <!--              name=""-->
          <!--              multiple-->
          <!--            >-->
          <!--              <option value="1">Базовый вкус 1</option>-->
          <!--              <option value="2">Базовый вкус 2</option>-->
          <!--              <option value="3">Базовый вкус 3</option>-->
          <!--            </select>-->
          <!--          </label>-->

          <!--          <label class="catalog__label">-->
          <!--            <v-select :options="options"></v-select>-->
          <!--          </label>-->

          <!--          <label class="catalog__label">-->
          <!--            <select-->
          <!--              class="catalog__label_item select2-multiple"-->
          <!--              data-placeholder="Оттенок вкуса"-->
          <!--              name="name_2"-->
          <!--              multiple-->
          <!--            >-->
          <!--              <option value="1">Оттенок вкуса 1</option>-->
          <!--              <option value="2">Оттенок вкуса 2</option>-->
          <!--              <option value="3">Оттенок вкуса 3</option>-->
          <!--            </select>-->
          <!--          </label>-->
          <!--          <label class="catalog__label">-->
          <!--            <select-->
          <!--              class="catalog__label_item select2-multiple"-->
          <!--              data-placeholder="Ноты вкуса"-->
          <!--              name="name_2"-->
          <!--              multiple-->
          <!--            >-->
          <!--              <option value="1">Ноты вкуса</option>-->
          <!--              <option value="2">Ноты вкуса</option>-->
          <!--              <option value="3">Ноты вкуса</option>-->
          <!--            </select>-->
          <!--          </label>-->
          <!--          <label class="catalog__label">-->
          <!--            <select-->
          <!--              class="catalog__label_item select2-multiple"-->
          <!--              data-placeholder="Тип вкуса"-->
          <!--              name="name_2"-->
          <!--              multiple-->
          <!--            >-->
          <!--              <option value="1">Тип вкуса</option>-->
          <!--              <option value="2">Тип вкуса</option>-->
          <!--              <option value="3">Тип вкуса</option>-->
          <!--            </select>-->
          <!--          </label>-->
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
        <h3>Select filter: {{ selectedVal }}</h3>
        <br />
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
              v-for="item in goodsFilter(list)"
              :key="item.name"
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
import Multiselect from 'vue-multiselect'

export default {
  name: 'Goods',
  components: { ItemGoods, UserNav, Tobacco, Multiselect },
  async fetch({ store }) {
    if (store.getters['goods/goods'].length === 0) {
      await store.dispatch('goods/fetch')
    }
  },
  data() {
    return {
      lastLetter: {}, // abcdefghijklmnopqrstuvwxyz
      options: ['first', 'second', 'third'],
      selectedVal: [],
      basic: ['first', 'second', 'third'],
      isOpenFilters: false,
    }
  },
  computed: {
    list() {
      return this.$store.getters['goods/goods']
    },
    alphabet() {
      return 'abcdefghijklmnopqrstuvwxyz'.split('')
    },
  },
  methods: {
    letterTitle(letter) {
      return letter.toUpperCase() + '' + letter.toLowerCase()
    },
    check(letter) {
      const check = this.lastLetter[letter.toLowerCase()] === undefined
      this.lastLetter[letter.toLowerCase()] = 0
      return check
    },
    setSelected(value) {
      // eslint-disable-next-line no-console
      console.log('setSelected', value)
      this.selectedVal = value
    },
    goodsFilter(list) {
      // eslint-disable-next-line no-console
      // console.log('selectedVal: ' + this.selectedVal)
      const filtered = list.filter((item) => {
        const is = this.selectedVal.every((word) => {
          return item.taste.basic.includes(word)
        })
        return is
      })
      // eslint-disable-next-line no-console
      // console.log(filtered)

      return filtered
    },
  },
  head: {
    title: 'FiXmoke - Каталог бренду',
  },
}
</script>
