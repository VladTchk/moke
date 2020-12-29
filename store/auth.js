import axios from '@/plugins/axios'

export const state = () => ({
  isOpenForm: false,
  token: localStorage.getItem('access_token') || null,
  expires: 0,
})

export const mutations = {
  SET_AUTH(state, data) {
    state.token = data.token
    state.expires = data.expires_in
  },
  SET_FORM_STATE(state, data) {
    state.isOpenForm = data
  },
}

export const actions = {
  TOGGLE_FORM({ commit }, data) {
    commit('SET_FORM_STATE', data)
  },
  AUTH({ commit }, form) {
    axios
      .post('/auth/login', form)
      .then((res) => {
        localStorage.setItem('access_token', res.data.token)
        commit('SET_AUTH', res.data)
        commit('SET_FORM_STATE', false)
        // eslint-disable-next-line no-console
        console.log('login')
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
}

export const getters = {
  GET_TOKEN: (s) => s.token,
  IS_OPEN_FORM: (s) => s.isOpenForm,
  IS_LOGGED_IN: (s) => s.token !== null,
}
