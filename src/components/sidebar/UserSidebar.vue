<template>
  <sidebar :profile="loggedUser">
    <section>
      <p class="label"><strong>{{ $t('dashboard.user.account.details') }}:</strong></p>
      <p>Logged in using {{ loggedUser.loginVia }}</p>
      <p>Member since {{ loggedUser.registrationDate }}</p>
    </section>
  </sidebar>
</template>

<script>
import { mapGetters } from 'vuex'

import Sidebar from '@/components/utils/Sidebar'
import SidebarSection from '@/components/utils/SidebarSection'

export default {
  components: {
    Sidebar,
    SidebarSection
  },
  computed: {
    ...mapGetters([
      'loggedUser'
    ])
  }
}
</script>

<style>

</style>
