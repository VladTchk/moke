<template>
  <Fragment>
    <button
      v-for="(item, i) in list"
      :key="item.body + item.id"
      class="order__address order__row-2"
      :class="{ active: item.is_main }"
      type="button"
      @click="editAddress(i)"
    >
      {{ item.body }}
      <svg class="icon">
        <use xlink:href="#check" />
      </svg>
    </button>
    <button
      v-if="count > list.length"
      class="order__add order__row-2"
      type="button"
      @click="addAddress"
    >
      <svg class="icon">
        <use xlink:href="#plus" />
      </svg>
    </button>
    <AddressForm
      v-if="isOpenAddedForm"
      :key="0"
      :edit="false"
      @closeForm="closeForm"
    />
    <AddressForm
      v-if="isOpenEditForm"
      :key="currentItem.id"
      :item="currentItem"
      @closeForm="closeForm"
    />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import AddressForm from '@/components/profile/address-form'

export default {
  name: 'Address',
  components: { Fragment, AddressForm },
  async fetch() {
    await this.$store.dispatch('address/FETCH_ADDRESS')
    await this.$store.dispatch('address/FETCH_MAX')
  },
  data() {
    return {
      isOpenAddedForm: false,
      isOpenEditForm: false,
      indexItem: 0,
    }
  },
  computed: {
    list() {
      return this.$store.getters['address/ADDRESS']
    },
    count() {
      return this.$store.getters['address/COUNT']
    },
    currentItem() {
      return this.list[this.indexItem]
    },
  },
  methods: {
    closeForm() {
      this.isOpenEditForm = false
      this.isOpenAddedForm = false
    },
    addAddress() {
      this.isOpenEditForm = false
      this.isOpenAddedForm = !this.isOpenAddedForm
    },
    editAddress(index) {
      if (!(this.indexItem !== index && this.isOpenEditForm)) {
        this.isOpenEditForm = !this.isOpenEditForm
      }

      this.isOpenAddedForm = false
      this.indexItem = index
    },
  },
}
</script>
