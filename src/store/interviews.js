export default {
  namespaced: true,
  state: {
    isHired: false,
  },
  actions: {
    updateIsHired ({commit}, isHired) {
      commit('setIsHired', isHired)
    },
  },
  mutations: {
    setIsHired (state, isHired) {
      state.isHired = isHired
    },
  },
}
