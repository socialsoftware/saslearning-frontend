import * as types from './mutation-types'
import ProfileAPI from '@/api/ProfileAPI'
import DocumentsAPI from '@/api/DocumentsAPI'
import ModelsAPI from '@/api/ModelsAPI'

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

export const fetchDocument = ({ commit }, { id }) => {
  return DocumentsAPI.getDocument({ id })
    .then(({ document }) => {
      commit(types.RECEIVED_DOCUMENT, { document })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchModels = ({ commit }) => {
  return ModelsAPI.listModels()
    .then(({ models }) => {
      commit(types.RECEIVED_MODELS, { models })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchModel = ({ commit }, { id }) => {
  return ModelsAPI.getModel({ id })
    .then(({ model }) => {
      commit(types.RECEIVED_MODEL, { model })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchActivities = ({ commit }) => {
  return ProfileAPI.listActivities()
    .then(({ activities }) => {
      commit(types.RECEIVED_ACTIVITIES, { activities })
    })
    .catch((err) => {
      console.log(err)
    })
}

// export const fetchActivity = ({ commit }, { id }) => {
//   return ProfileAPI.
// }
