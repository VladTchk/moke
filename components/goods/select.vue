<template>
  <label class="catalog__label">
    <Multiselect
      v-model="selectedVal"
      :options="list"
      :multiple="true"
      :searchable="false"
      :placeholder="title"
      :close-on-select="false"
      :preserve-search="true"
      @input="setSelected"
    >
      <template slot="selection" slot-scope="{ values, search, isOpen }">
        <span v-if="values.length && !isOpen" class="multiselect__single">
          Базовый вкус ({{ values.length }})
        </span>
        <span v-if="isOpen">Базовый вкус</span>
      </template>
    </Multiselect>
  </label>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'Select',
  components: { Multiselect },
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default() {
        return ['']
      },
    },
  },
  data() {
    return {
      selectedVal: [],
    }
  },
  methods: {
    setSelected(value) {
      // eslint-disable-next-line no-console
      console.log('setSelected', value)
      this.selectedVal = value
    },
  },
}
</script>
