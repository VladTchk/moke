<template>
  <Fragment>
    <div v-for="item in list" :key="item" class="order__address order__row-2">
      109341, Москва, Нижняя Красносельская, 35с49, 408
    </div>
    <button class="order__add order__row-2" type="button" @click="addAddress">
      <svg class="icon">
        <use xlink:href="#plus" />
      </svg>
    </button>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'Address',
  components: { Fragment },
  computed: {
    list() {
      return []
    },
  },
  methods: {
    addAddress() {},
  },
}
</script>
