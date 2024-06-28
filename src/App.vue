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

TODO: add transition // TODO:
change base color // TODO: feedback email not working // TODO: add readme md to create env file // TODO: clear input afer generate // TODO: env file after 1st line not work
