const user = {
  username: 'joana.romao',
  avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=214b5beac96f7d680a19b3836b28ccc3&auto=format&fit=crop&w=500&q=60',
  name: 'Joana Romão'
}

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
        avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a'
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

async function getUser (username) {
  return { user }
}

async function listActivities () {
  return { activities }
}

async function getActivityById () {
  return { activity: undefined }
}

export default {
  getActivityById, getUser, listActivities
}
