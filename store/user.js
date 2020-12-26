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
        // eslint-disable-next-line no-console
        console.log(res)
        commit('SET_USER', res.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  UPDATE_USER({ commit }, form) {
    axios
      .post('/user', form)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('user_p', res.data)
        commit('UPDATE_USER', res.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
}

export const getters = {
  USER: (s) => s.user,
}
