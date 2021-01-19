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
  FETCH({ commit }) {
    axios
      .get('/help/tree')
      .then((res) => {
        commit('SET_FAGS', res.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
}

export const getters = {
  FAGS_LIST: (s) => s.faqs,
}
