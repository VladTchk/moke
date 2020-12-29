import axios from '@/plugins/axios'

export const state = () => ({
  maxCount: 3,
  address: [],
})

export const mutations = {
  SET_ADDRESS(state, address) {
    state.address = address
  },
  SET_MAX(state, count) {
    state.maxCount = count
  },
}

export const actions = {
  FETCH_ADDRESS({ commit }) {
    axios
      .get('/user/address')
      .then((res) => {
        commit('SET_ADDRESS', res.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  FETCH_MAX({ commit }) {
    axios
      .get('/maxaddresscount')
      .then((res) => {
        commit('SET_MAX', res.data.max_address_count)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  ADD_ADDRESS({ commit, dispatch }, form) {
    axios
      .post('/user/address', form)
      .then((res) => {
        dispatch('FETCH_ADDRESS')
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  UPDATE_ADDRESS({ commit, dispatch }, { form, id }) {
    axios
      .put(`/user/address/${id}`, form)
      .then((res) => {
        dispatch('FETCH_ADDRESS')
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  DELETE_ADDRESS({ commit, dispatch }, id) {
    axios
      .delete(`/user/address/${id}`)
      .then((res) => {
        dispatch('FETCH_ADDRESS')
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
}

export const getters = {
  ADDRESS: (s) => s.address,
  COUNT: (s) => s.maxCount,
}
