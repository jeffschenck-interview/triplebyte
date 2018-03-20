import Vue from 'vue'
import Vuex from 'vuex'
import interviews from '@/store/interviews'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    interviews,
  },
})
