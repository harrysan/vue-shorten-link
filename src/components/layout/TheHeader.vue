<template>
  <header>
    <nav>
      <h2><router-link to="/"> Shorten Link</router-link></h2>
      <h2><router-link to="feedback">Feedback</router-link></h2>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 80%;
  height: 3 rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 50rem;
}

header a {
  text-decoration: none;
  display: inline-block;
  background-color: goldenrod;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

/* a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
} */

h2 {
  margin: 0;
}

h2 a {
  color: darkslategray;
  margin: 1rem 0;
}

h2 a:hover,
h2 a:active,
h2 a.router-link-active {
  color: black;
}

header nav {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
