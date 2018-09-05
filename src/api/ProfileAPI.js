const user = {
  username: 'joana.romao',
  avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=214b5beac96f7d680a19b3836b28ccc3&auto=format&fit=crop&w=500&q=60',
  name: 'Joana Romão',
}
async function getUser (username) {
  return { user }
}

export default {
  getUser
}
