import axios from '@/plugins/axios'

export const state = () => ({
  products: [],
  filters: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  FETCH_LIST({ commit }, filers) {
    axios
      .post('/products', filers)
      .then((res) => {
        commit('SET_PRODUCTS', [...res.data].splice(0, 3))
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })

    // eslint-disable-next-line no-unused-vars
    // const { list, filters, count, type } = await this.$axios.$get(
    //   `${process.env.baseUrl}/goods.json`
    // )
    // const sorted = [...list].sort((a, b) => {
    //   const first = a.name.charAt(0).toLowerCase()
    //   const second = b.name.charAt(0).toLowerCase()
    //   if (first < second) {
    //     return -1
    //   }
    //   if (first > second) {
    //     return 1
    //   }
    //   return 0
    // })
    // eslint-disable-next-line no-console
    // console.log(filters)
    // commit('SET_GOODS', sorted)
    // commit('SET_FILTERS', filters)
  },
}

export const getters = {
  PRODUCTS_LIST: (s) => s.products,
  PRODUCTS_FILTERS: (s) => s.filters,
}
