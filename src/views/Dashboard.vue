<template>
  <div class="main-content">
    <div class="content-header">
      <div class="title">
        <h1>{{ $t('dashboard.title') }}</h1>
        <p>{{ $t('dashboard.description') }}</p>
      </div>
    </div>

    <div class="content two-column">
      <user-sidebar/>
      <dashboard-content/>
    </div>
  </div>
</template>

<script>
import DashboardContent from '@/components/DashboardContent'
import UserSidebar from '@/components/sidebar/UserSidebar'

export default {
  components: {
    DashboardContent,
    UserSidebar
  }
}
</script>

<style lang="scss">
.two-column {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  grid-template-areas:
    "sidebar dashboard";

  padding-right: 1.5rem;
}
</style>
