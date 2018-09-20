import * as types from './mutation-types'

export default {
  [types.RECEIVED_USER] (state, { user }) {
    state.loggedUser = user
  },
  [types.RECEIVED_DOCUMENTS] (state, { documents }) {
    state.documents = documents
  }
}