import axios from '@/plugins/axios'

export const state = () => ({
  products: [],
  filters: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
    state.filters = products
  },
  SET_FILTERED(state, products) {
    state.filters = products
  },
}

export const actions = {
  FETCH_LIST({ commit }, filers) {
    axios
      .post('/products', filers)
      .then((res) => {
        commit('SET_PRODUCTS', [...res.data].splice(0, 4))
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
  FILTER_LIST({ commit, state }, typeSort) {
    const list = [...state.products]

    const sortPopular = (a, b) => a.sorting - b.sorting

    const sortPrice = (a, b) =>
      parseInt(b.tradeOffers[0].price) - parseInt(a.tradeOffers[0].price)

    const sortABS = (a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    }

    switch (typeSort) {
      case 'popular':
        list.sort(sortPopular)
        break
      case 'price':
        list.sort(sortPrice)
        break
      case 'abc':
        list.sort(sortABS)
        break
      // case 'new':
      // list.sort(sortABS)
      // break
    }

    commit('SET_FILTERED', list)
  },
}

export const getters = {
  PRODUCTS_LIST: (s) => s.products,
  PRODUCTS_FILTERS: (s) => s.filters,
}
