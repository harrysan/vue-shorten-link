<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: rgb(236, 206, 128);
  border: 1px solid rgb(236, 206, 128);
  color: #150122;
  cursor: pointer;
  /* border-radius: 30px; */
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(233, 170, 13);
  border-color: rgb(233, 170, 13);
  color: black;
}
</style>
