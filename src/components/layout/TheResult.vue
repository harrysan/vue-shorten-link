<template>
  <div>
    <ul>
      <li>
        <div class="li-item">
          <h5 v-if="hasData">(Result were display here)</h5>
          <h4 v-else>{{ result.originalUrl }}</h4>
          <h5 class="li-item-content">(Original Url)</h5>
        </div>
      </li>
      <li>
        <div class="li-item">
          <h5 v-if="hasData">(Result were display here)</h5>
          <h4 v-else class="li-item-content">{{ result.shortLink }}</h4>
          <h5 class="li-item-content">(Shorten Url)</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["result"],
  setup(props) {
    const hasData = computed(() => props.result.shortLink == "");

    return { hasData };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

.li-item h4 {
  padding: 0;
  display: inline;
  font-weight: normal;
}

.li-item {
  justify-content: space-between;
  display: flex;
}
</style>
