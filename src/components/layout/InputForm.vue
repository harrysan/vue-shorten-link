<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="inputurl">Input URL</label>
        <input
          type="text"
          id="inputurl"
          v-model.trim="inputUrl"
          placeholder="some url ex: http://google.com"
        />
      </div>
      <base-button>Generate</base-button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      inputUrl: "",
    };
  },
  methods: {
    submitForm() {
      const passUrl = this.inputUrl;
      this.$emit("save-data", passUrl);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  height: 2rem;
}

input:focus,
textarea:focus {
  background-color: #f2f0f5;
  outline: none;
  border-color: #3d008d;
}
</style>
