export const state = () => ({
  goods: [],
  filters: [],
})

export const mutations = {
  SET_GOODS(state, goods) {
    state.goods = goods
  },
  SET_FILTERS(state, filters) {
    state.filters = filters
  },
}

export const actions = {
  async FETCH({ commit }) {
    // eslint-disable-next-line no-unused-vars
    const { list, filters, count, type } = await this.$axios.$get(
      `${process.env.baseUrl}/goods.json`
    )
    const sorted = [...list].sort((a, b) => {
      const first = a.name.charAt(0).toLowerCase()
      const second = b.name.charAt(0).toLowerCase()
      if (first < second) {
        return -1
      }
      if (first > second) {
        return 1
      }
      return 0
    })
    // eslint-disable-next-line no-console
    console.log(filters)
    commit('SET_GOODS', sorted)
    commit('SET_FILTERS', filters)
  },
}

export const getters = {
  GOODS_LIST: (s) => s.goods,
  GOODS_FILTERS: (s) => s.filters,
}
