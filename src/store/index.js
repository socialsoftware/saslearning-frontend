import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  loggedUser: undefined,

  documents: [],
  document: undefined,

  models: [],
  model: undefined
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
