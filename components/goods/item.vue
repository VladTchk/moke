<template>
  <div class="catalog__goods">
    <div class="catalog__name">
      <span>{{ item.name }}</span>
    </div>
    <div class="catalog__select">
      <label
        v-for="(info, i) in item.variations"
        :key="i"
        class="catalog__select_item"
      >
        <input
          type="radio"
          :name="'goods_1' + uniqNames"
          :checked="i === currentSize"
          @change="currentSize = i"
        />
        <span>{{ info.size }}</span>
      </label>
    </div>

    <div class="catalog__select">
      <label
        v-for="(info, i) in item.variations[0].set"
        :key="info.set"
        class="catalog__select_item"
      >
        <input
          type="radio"
          :name="'goods_2' + uniqNames"
          :checked="i === currentSet"
          @change="currentSet = i"
        />
        <span>{{ info.name }}</span>
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

    <button
      v-show="currentCount <= 0"
      class="catalog__buy"
      type="button"
      @click="addCount"
    >
      В корзину
    </button>

    <div class="catalog__price">{{ price }} ₽</div>
  </div>
</template>

<script>
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
      counts: [[0]],
      currentSize: 0,
      currentSet: 0,
    }
  },
  computed: {
    uniqNames() {
      return Math.random()
    },
    price() {
      const size = this.currentSize
      const set = this.currentSet
      const price = this.item.variations[size].set[set].price
      return Math.max(1, this.currentCount) * price
    },
    currentCount() {
      return this.counts[this.currentSize][this.currentSet]
    },
  },
  mounted() {
    const size = this.item.variations.length
    this.counts = [...Array(size)].map(() => new Array(size).fill(0))
  },
  methods: {
    addCount() {
      this.counts[this.currentSize][this.currentSet] += 1
      this.counts = [...this.counts]
    },
    removeCount() {
      this.counts[this.currentSize][this.currentSet] -= 1
      this.counts = [...this.counts]
    },
  },
}
</script>
