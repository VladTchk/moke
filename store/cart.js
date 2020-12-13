export const state = () => ({
  list: {},
  count: 0,
})

export const mutations = {
  // addGoods(state, list) {
  //   state.list = list
  // },
  // removeGoods(state, list) {
  //   state.list = list
  // },
  SET_CART: (state, { item, counts }) => {
    const newList = { ...state.list }
    newList[item.id] = { item, counts }
    state.list = newList
    state.count = Object.keys(newList).length
  },
  DECREMENT_CART: (state, id) => {
    const newList = { ...state.list }
    delete newList[id]
    state.list = { ...newList }
    state.count = Object.keys(newList).length
    // eslint-disable-next-line no-console
    console.dir(newList)
    // eslint-disable-next-line no-console
    console.dir(Object.keys(newList))
    // Зменшити кількість або видалити
    // if (state.cart[index].quantity > 1) {
    //   state.cart[index].quantity--
    // }
  },
}

export const getters = {
  CART_LIST: (s) => s.list,
  CART_COUNT: (s) => s.count,
}

export const actions = {
  ADD_TO_CART({ commit }, obj) {
    commit('SET_CART', obj)
  },
  DECREMENT_CART_ITEM({ commit }, id) {
    commit('DECREMENT_CART', id)
    // commit('DECREMENT_CART', index)
  },
}
