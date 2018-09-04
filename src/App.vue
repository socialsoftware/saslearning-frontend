<template>
  <div
    id="app"
    class="wrapper">

    <app-header/>

    <main class="content">
      <router-view/>
    </main>

    <app-footer/>

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
html, body {
  height: 100%;
  box-sizing: border-box;
}

html {
  background-color: $light-gray-300;
  font-size: 62.5%;
}

body {
  color: #45555F;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 160%;
  font-family: "Source Sans Pro", Helvetica, Helvetica Neue, Arial;
}

h1 {
  font-size: 3rem;
}

.content {
  grid-area: content;
  padding: 8rem 10rem;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "content"
    "footer";
  height: 100%;
  // grid-template-columns: repeat(12, [col-start] 1fr);
  // grid-gap: 72px;
  // grid-template-columns: repeat(12, 1fr);
  // grid-template-rows:
}
</style>
