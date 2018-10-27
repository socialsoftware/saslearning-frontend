import client from './Client'

const activities = [
  {
    id: 0,
    title: '1st Delivery',
    document: {
      id: 0,
      title: 'A Continuous Integration System'
    },
    metaModel: {
      id: 0,
      title: 'Scenario-Based Analysis of Software Architecture'
    },
    team: {
      id: 0,
      name: 'AS18_01',
      members: [{
        name: 'David Duarte',
        avatar: 'https://fenix.tecnico.ulisboa.pt/user/photo/ist168505'
      }, {
        name: 'António Rito Silva',
        avatar: undefined
      }]
    },
    annotations: 23,
    progress: 60
  },
  {
    id: 1,
    title: '2nd Delivery',
    document: {
      id: 0,
      title: 'A Continuous Integration System'
    },
    annotations: 10,
    progress: 20
  }
]

async function getProfile () {
  const response = await client.get('/profile')
  return { user: response.data }
}

async function clearProfile () {
  return client.get('logout')
}

async function listActivities () {
  return { activities }
}

async function getActivityById () {
  return { activity: undefined }
}

export default {
  clearProfile, getActivityById, getProfile, listActivities
}
