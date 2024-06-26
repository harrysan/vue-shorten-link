<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Courier New", Courier, monospace;
}

body {
  margin: 0;
}
</style>

// TODO: fix input bar when url is too long // TODO: add transition // TODO:
change base color // TODO: add feedback page
