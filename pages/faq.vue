<template>
  <div class="grid">
    <div class="grid__left">
      <div class="faq__title">Центр поддержки FiXmoke</div>
      <ul class="faq__menu">
        <Item
          v-for="(section, i) in sections"
          :key="section.name"
          :section="section"
          :index="i"
        />
      </ul>
    </div>

    <NuxtChild :key="$route.params.id" :sections="sections" />
  </div>
</template>

<script>
import Item from '@/components/faq/item'
import axios from 'axios'

export default {
  name: 'Faq',
  components: { Item },
  async asyncData({ error }) {
    try {
      const { data } = await axios.get(`${process.env.VUE_APP_API}/faq.json`)
      return data
    } catch (e) {
      error({ message: 'Faq.json not found', statusCode: 404 })
    }
  },
  data() {
    return {
      apiLink: process.env.VUE_APP_API,
    }
  },
  head: {
    title: 'FiXmoke - Центр поддержки',
  },
}
</script>
