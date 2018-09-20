import * as types from './mutation-types'
import ProfileAPI from '@/api/ProfileAPI'
import DocumentsAPI from '@/api/DocumentsAPI'

export const fetchUser = ({ commit }, { username }) => {
  return ProfileAPI.getUser({ username })
    .then(({ user }) => {
      commit(types.RECEIVED_USER, { user })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchDocuments = ({ commit }) => {
  return DocumentsAPI.listDocuments()
    .then(({ documents }) => {
      commit(types.RECEIVED_DOCUMENTS, { documents })
    })
    .catch((err) => {
      console.log(err)
    })
}