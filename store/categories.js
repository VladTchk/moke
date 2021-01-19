import axios from '@/plugins/axios'

export const state = () => ({
  categories: [],
  sibling: [],
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_SIBLING(state, sibling) {
    state.sibling = sibling
  },
}

export const actions = {
  FETCH({ commit }) {
    axios
      .get('/categories-tree')
      .then((res) => {
        commit('SET_CATEGORIES', res.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.log)
  },
  FETCH_SIBLING({ commit }, { brand, category }) {
    axios
      .get('/categories/banners', {
        params: {
          brands: brand,
          categories: category,
        },
      })
      .then((res) => {
        commit('SET_SIBLING', res.data)
      })
      // eslint-disable-next-line no-console
      .catch(console.log)
  },
}

export const getters = {
  CATEGORIES_LIST: (s) => s.categories,
  SIBLING_LIST: (s) => s.sibling,
}
