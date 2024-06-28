<template>
  <div>
    <ul>
      <li>
        <div class="li-item">
          <h5 v-if="hasData">(Original Url)</h5>
          <h4 v-else>{{ result.originalUrl }}</h4>
        </div>
      </li>
      <li>
        <div class="li-item">
          <h5 v-if="hasData">(Result were display here)</h5>
          <h4 v-else>
            {{ result.shortLink
            }}<span @click="copyText"
              ><i
                class="fa fa-clipboard link-icon"
                :class="{ selClass: isCopied }"
                aria-hidden="true"
              ></i
              ><span v-if="isCopied">(Copied to clipboard!)</span></span
            >
          </h4>
          <h5>(Shorten Url)</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["result"],
  setup(props) {
    const hasData = computed(() => props.result.shortLink == "");
    const isCopied = ref(false);

    function copyText() {
      navigator.clipboard.writeText(props.result.shortLink);
      isCopied.value = true;

      setTimeout(() => {
        isCopied.value = false;
      }, 3000);
    }

    return { isCopied, hasData, copyText };
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
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1rem;
}

.li-item {
  justify-content: space-between;
  display: flex;
}

.link-icon {
  cursor: pointer;
  margin-left: 1rem;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
}

.selClass {
  border: solid rgb(236, 206, 128) 1px;
  background-color: white;
}
</style>
