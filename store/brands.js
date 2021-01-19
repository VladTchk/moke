import axios from '@/plugins/axios'

export const state = () => ({
  brands: [],
})

export const mutations = {
  SET_BRANDS(state, brands) {
    state.brands = brands
  },
  CLEAN_BRANDS(state) {
    state.brands = []
  },
}

export const actions = {
  FETCH({ commit }, { categories }) {
    commit('CLEAN_BRANDS')
    const url = categories === '0' ? '/brands' : `/brands/${categories}`
    axios
      .get(url)
      .then((res) => {
        commit('SET_BRANDS', res.data.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  CLEAN({ commit }) {
    commit('CLEAN_BRANDS')
  },
}

export const getters = {
  BRANDS_LIST: (s) => s.brands,
}
