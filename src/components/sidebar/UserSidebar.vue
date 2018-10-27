<template>
  <sidebar
    v-if="loggedUser"
    :profile="profile()">
    <section>
      <p class="label"><strong>{{ $t('dashboard.user.account.details') }}:</strong></p>
      <p>Logged in using {{ loggedUser.login_via }}</p>
      <p>Member since {{ loggedUser.registration_date }}</p>
    </section>
  </sidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Sidebar from '@/components/utils/Sidebar'

export default {
  components: {
    Sidebar
  },
  computed: {
    ...mapGetters([
      'loggedUser'
    ])
  },
  created () {
    this.fetchProfile()
  },
  methods: {
    ...mapActions([
      'fetchProfile'
    ]),
    profile () {
      return {
        name: this.loggedUser.display_name,
        avatar: this.loggedUser.avatar
      }
    }
  }
}
</script>
