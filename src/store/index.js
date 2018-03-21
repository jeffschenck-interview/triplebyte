import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import tasks from '@/store/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    tasks,
  },
  plugins: [
    createPersistedState(),
  ],
})
