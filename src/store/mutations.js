import * as types from './mutation-types'

export default {
  [types.RECEIVED_PROFILE] (state, { user }) {
    state.loggedUser = user
  },
  [types.CLEAR_PROFILE] (state) {
    state.loggedUser = undefined
  },

  [types.RECEIVED_DOCUMENTS] (state, { documents }) {
    state.documents = documents
  },
  [types.RECEIVED_DOCUMENT] (state, { document }) {
    state.document = document
  },

  [types.RECEIVED_MODELS] (state, { models }) {
    state.models = models
  },
  [types.RECEIVED_MODEL] (state, { model }) {
    state.model = model
  },

  [types.RECEIVED_ACTIVITIES] (state, { activities }) {
    state.activities = activities
  },
  [types.RECEIVED_ACTIVITY] (state, { activity }) {
    state.activity = activity
  },

  [types.RECEIVED_TEAMS] (state, { teams }) {
    state.teams = teams
  },
  [types.RECEIVED_TEAM] (state, { team }) {
    state.team = team
  }
}
