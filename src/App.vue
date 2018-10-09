<template>
  <router-view />
</template>

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
  -webkit-text-size-adjust: 100%;
}

h1 {
  font-size: 3rem;
}

h1,h2,h3 {
  margin: 0;
}

a {
  text-decoration: none;
  color: $dark;
  transition: all .2s ease-in-out;

  &:hover {
    color: $main-color;

    .svg-icon g path, .svg-icon polygon, .svg-icon rect, .svg-icon path {
      fill: $main-color;
    }
  }
}
</style>
