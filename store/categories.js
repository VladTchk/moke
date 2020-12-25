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
  async FETCH({ commit }) {
    try {
      const { data } = await axios.get('/categories-tree')
      commit('SET_CATEGORIES', data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  async FETCH_SIBLING({ commit }, { brand, category }) {
    // const url = category
    //   ? `/categories/${brand}/${category}`
    //   : `/categories/${brand}`
    const url = `/categories/${brand}${category ? `/${category}` : ''}`
    try {
      const { data } = await axios.get(url)
      commit('SET_SIBLING', data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}

export const getters = {
  CATEGORIES_LIST: (s) => s.categories,
  SIBLING_LIST: (s) => s.sibling,
}
