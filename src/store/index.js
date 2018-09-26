import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18N from 'vuex-i18n'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import setupI18N from '@/i18n'

Vue.use(Vuex)

const state = {
  loggedUser: undefined,
  documents: [],
  document: undefined
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

Vue.use(VuexI18N.plugin, store)
setupI18N(Vue)

export default store
