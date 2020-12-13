export const state = () => ({
  auth: [],
})

export const mutations = {
  setFaqs(state, faqs) {
    state.auth = faqs
  },
}

export const actions = {
  async fetch({ commit }) {
    const { sections } = await this.$axios.$get(
      `${process.env.VUE_APP_API}/faq.json`
    )
    commit('setFaqs', sections)
  },
}

export const getters = {
  auth: (s) => s.auth,
}
