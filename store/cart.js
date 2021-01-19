import axios from '@/plugins/axios'

export const state = () => ({
  info: { items: [] },
  count: 0,
  price: 0,
})

export const mutations = {
  SET_CART: (state, obj) => {
    state.info = obj
    state.count = state.info.items.reduce((acc, item) => acc + item.quantity, 0)
    state.price = state.info.items.reduce((acc, item) => acc + item.amount, 0)
  },
}

export const actions = {
  UPDATE_CART({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('cart')
        .then((res) => {
          commit('SET_CART', res.data)
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  ADD_ITEM({ commit, dispatch }, id) {
    return new Promise((resolve, reject) => {
      axios
        .post('cart/add-item', { id })
        .then((res) => {
          dispatch('UPDATE_CART')
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  DECREMENT_ITEM({ commit, dispatch }, id) {
    return new Promise((resolve, reject) => {
      axios
        .post('cart/drop-item', { id })
        .then((res) => {
          dispatch('UPDATE_CART')
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export const getters = {
  CART_INFO: (s) => s.info,
  CART_LIST: (s) => s.info.items,
  CART_COUNT: (s) => s.count,
  CART_PRICE: (s) => s.price,
}
