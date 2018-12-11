<template>
  <div class="wrapper">
    <AppHeader />

    <main class="content-page">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "content-page"
    "footer";
  height: 100%;

  .content-page {
    grid-area: content-page;
    padding: 8rem 10rem;
  }
}
</style>
