<template>
  <Sidebar
    v-if="loggedUser"
    :profile="profile()">
    <SidebarSection
      :items="teams"
      :all-items-link="{name: 'dashboard'}"
      title="dashboard.user.teams">
      <template slot-scope="team">
        <RouterLink :to="{ name: 'team', params: { id: team.id }}">
          {{ team.name }}
        </RouterLink>
        <p class="small">
          {{ $t(`teams.roles.${team.role}`) }}
        </p>
      </template>
    </SidebarSection>
    <section>
      <p class="label">
        <strong>{{ $t('dashboard.user.account.details') }}</strong>
      </p>
      <p>Logged in using {{ loggedUser.login_via }}</p>
      <p>Member since {{ loggedUser.registration_date }}</p>
    </section>
  </Sidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Sidebar from '@/components/sidebar/Sidebar'
import SidebarSection from '@/components/sidebar/SidebarSection'

export default {
  components: {
    Sidebar,
    SidebarSection
  },
  computed: {
    ...mapGetters([
      'loggedUser',
      'teams'
    ])
  },
  created () {
    this.fetchProfile()
      .then((result) => {
        this.fetchTeams({ username: this.loggedUser.username })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    ...mapActions([
      'fetchProfile',
      'fetchTeams'
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
