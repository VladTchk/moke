export const state = () => ({
  goods: [],
})

export const mutations = {
  setGoods(state, goods) {
    state.goods = goods
  },
}

export const actions = {
  async fetch({ commit }) {
    const { list } = await this.$axios.$get(
      `${process.env.VUE_APP_API}/goods.json`
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
    commit('setGoods', sorted)
  },
}

export const getters = {
  goods: (s) => s.goods,
}
