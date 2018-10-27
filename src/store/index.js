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
  model: undefined,

  activities: [],
  activity: undefined,

  teams: [{
    id: 0,
    name: 'AS18_01',
    activities: 2,
    members: [{
      name: 'David Duarte',
      avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a'
    }, {
      name: 'António Rito Silva',
      avatar: undefined
    }]
  }, {
    id: 1,
    name: 'AS18_02',
    activities: 3,
    members: [{
      name: 'Joana Romão',
      avatar: undefined
    }, {
      name: 'Vera Antónia',
      avatar: undefined
    }, {
      name: 'Francisco Fernandes',
      avatar: undefined
    }, {
      name: 'Sandro Santos',
      avatar: undefined
    }]
  }, {
    id: 2,
    name: 'AS18_03',
    activities: 1,
    members: [{
      name: 'Joana Romão',
      avatar: undefined
    }, {
      name: 'Vera Antónia',
      avatar: undefined
    }, {
      name: 'Francisco Fernandes',
      avatar: undefined
    }, {
      name: 'Sandro Santos',
      avatar: undefined
    }]
  }, {
    id: 3,
    name: 'AS18_04',
    activities: 4,
    members: [{
      name: 'Joana Romão',
      avatar: undefined
    }, {
      name: 'Vera Antónia',
      avatar: undefined
    }, {
      name: 'Francisco Fernandes',
      avatar: undefined
    }, {
      name: 'Sandro Santos',
      avatar: undefined
    }]
  }]
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
