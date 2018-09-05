import * as types from './mutation-types'
import ProfileAPI from '@/api/ProfileAPI'

export const fetchUser = ({ commit }, { username }) => {
  return ProfileAPI.getUser({ username })
    .then(({user}) => {
      commit(types.RECEIVED_USER, { user })
    })
    .catch((err) => {
      console.log(err)
    })
}
