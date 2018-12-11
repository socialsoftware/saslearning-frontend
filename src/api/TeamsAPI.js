const teams = [{
  id: 0,
  name: 'AS18_01',
  activities: 2,
  members: [{
    username: 'ist168505',
    name: 'David Duarte',
    avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a',
    role: 'administrator'
  }, {
    username: 'ars',
    name: 'António Rito Silva',
    avatar: undefined,
    role: 'administrator'
  }]
}, {
  id: 1,
  name: 'AS18_02',
  activities: 3,
  members: [{
    username: 'joana.romao',
    name: 'Joana Romão',
    avatar: undefined,
    role: 'administrator'
  }, {
    username: 'vera.antonia',
    name: 'Vera Antónia',
    avatar: undefined,
    role: 'member'
  }, {
    username: 'francisco.fernandes',
    name: 'Francisco Fernandes',
    avatar: undefined,
    role: 'member'
  }, {
    username: 'sandro.santos',
    name: 'Sandro Santos',
    avatar: undefined,
    role: 'member'
  }, {
    username: 'ist168505',
    name: 'David Duarte',
    avatar: undefined,
    role: 'member'
  }]
}, {
  id: 3,
  name: 'AS18_03',
  activities: 2,
  members: [{
    username: 'ist168505',
    name: 'David Duarte',
    avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a',
    role: 'administrator'
  }]
}, {
  id: 4,
  name: 'AS18_04',
  activities: 2,
  members: [{
    username: 'ist168505',
    name: 'David Duarte',
    avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a',
    role: 'administrator'
  }]
}, {
  id: 5,
  name: 'AS18_05',
  activities: 2,
  members: [{
    username: 'ist168505',
    name: 'David Duarte',
    avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a',
    role: 'administrator'
  }]
}, {
  id: 6,
  name: 'AS18_06',
  activities: 2,
  members: [{
    username: 'ist168505',
    name: 'David Duarte',
    avatar: 'http://0.gravatar.com/avatar/b3d4d4e01083702eff68a830884f3d4a',
    role: 'administrator'
  }]
}]

async function getTeamsForUser ({ username }) {
  return {
    teams: teams.filter(team =>
      team.members.map(member => member.username).includes(username)
    ).map((team) => {
      return {
        id: team.id,
        name: team.name,
        role: getRoleByUsername(team.members, username)
      }
    })
  }
}

function getRoleByUsername (members, username) {
  return members.find(member => member.username === username).role
}

async function getTeamById ({ id }) {
  return { team: teams.filter(team => team.id === id)[0] }
}

export default {
  getTeamById, getTeamsForUser
}
