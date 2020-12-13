import axios from '@/plugins/axios'

export const state = () => ({
  brands: [],
})

export const mutations = {
  SET_BRANDS(state, brands) {
    state.brands = brands
  },
}

export const actions = {
  async FETCH({ commit }) {
    try {
      const { data } = await axios.get('/brands')
      commit('SET_BRANDS', data.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}

export const getters = {
  BRANDS_LIST: (s) => s.brands,
}
