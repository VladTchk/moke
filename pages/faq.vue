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

    <NuxtChild :key="$route.params.id" />
  </div>
</template>

<script>
import Item from '@/components/faq/item'
// import axios from 'axios

export default {
  loading: false,
  name: 'Faq',
  // transition: {
  //   name: 'fade',
  // },
  components: { Item },
  // async asyncData({ error }) {
  //   try {
  //     const { data } = await axios.get(`${process.env.VUE_APP_API}/faq.json`)
  //     return data
  //   } catch (e) {
  //     error({ message: 'Faq.json not found', statusCode: 404 })
  //   }
  // },

  async fetch({ store }) {
    if (store.getters['faq/FAGS_LIST'].length === 0) {
      await store.dispatch('faq/FETCH')
    }
    // try {
    //   const { data } = await axios.get('http://fixmoke.ru/api/faq/', {})
    // console.dir(data)
    // } catch (e) {
    // console.log(e)
    // }
  },
  computed: {
    sections() {
      return this.$store.getters['faq/FAGS_LIST']
    },
  },
  head: {
    title: 'FiXmoke - Центр поддержки',
  },
}
</script>
