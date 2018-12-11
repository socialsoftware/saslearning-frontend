import * as types from './mutation-types'

import ProfileAPI from '@/api/ProfileAPI'
import DocumentsAPI from '@/api/DocumentsAPI'
import ModelsAPI from '@/api/ModelsAPI'
import TeamsAPI from '@/api/TeamsAPI'

export const fetchProfile = ({ commit }) => {
  return ProfileAPI.getProfile()
    .then(({ user }) => {
      commit(types.RECEIVED_PROFILE, { user })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const clearProfile = ({ commit }) => {
  return ProfileAPI.clearProfile()
    .then(() => {
      commit(types.CLEAR_PROFILE)
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

export const fetchTeams = ({ commit }, { username }) => {
  return TeamsAPI.getTeamsForUser({ username })
    .then(({ teams }) => {
      commit(types.RECEIVED_TEAMS, { teams })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchTeam = ({ commit }, { id }) => {
  return TeamsAPI.getTeamById({ id })
    .then(({ team }) => {
      commit(types.RECEIVED_TEAM, { team })
    })
    .catch((err) => {
      console.log(err)
    })
}
// export const fetchActivity = ({ commit }, { id }) => {
//   return ProfileAPI.
// }
