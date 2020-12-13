import axios from '@/plugins/axios'

export const state = () => ({
  faqs: [],
})

export const mutations = {
  SET_FAGS(state, faqs) {
    state.faqs = faqs
  },
}

export const actions = {
  async FETCH({ commit }) {
    try {
      const { data } = await axios.get('/help/tree')
      commit('SET_FAGS', data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}

export const getters = {
  FAGS_LIST: (s) => s.faqs,
}
