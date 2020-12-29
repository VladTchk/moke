import axios from '@/plugins/axios'

export const state = () => ({
  user: {},
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  UPDATE_USER(state, data) {
    state.user = {
      ...state.user,
      ...data,
    }
  },
}

export const actions = {
  FETCH_USER({ commit }) {
    axios
      .get('/user')
      .then((res) => {
        commit('SET_USER', res.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  UPDATE_USER({ commit }, form) {
    axios
      .post('/user', form)
      .then((res) => {
        commit('UPDATE_USER', res.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
}

export const getters = {
  USER: (s) => s.user,
}
