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
  async FETCH({ commit }, { categories }) {
    commit('CLEAN_BRANDS')
    const url = categories === '0' ? '/brands' : `/brands/${categories}`

    try {
      const { data } = await axios.get(url)
      commit('SET_BRANDS', data.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  CLEAN({ commit }) {
    commit('CLEAN_BRANDS')
  },
}

export const getters = {
  BRANDS_LIST: (s) => s.brands,
}
