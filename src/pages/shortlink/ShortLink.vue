<template>
  <div>
    <base-card>
      <input-form @save-data="generateLink"></input-form>
    </base-card>
    <base-card>
      <h4>Result</h4>
      <the-result :result="responseReturn"></the-result>
    </base-card>
  </div>
</template>

<script>
import InputForm from "../../components/layout/InputForm.vue";
import TheResult from "../../components/layout/TheResult.vue";

import { reactive } from "vue";

export default {
  components: { TheResult, InputForm },
  setup() {
    const responseReturn = reactive({
      originalUrl: "",
      key: "",
      shortLink: "",
    });

    async function generateLink(inputUrl) {
      try {
        const newRequest = {
          url: inputUrl,
        };

        const response = await fetch(`https://shrtlnk.dev/api/v2/link`, {
          method: "POST",
          body: JSON.stringify(newRequest),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-key": process.env.VUE_APP_API_KEY,
          },
        });

        const responseData = await response.json();
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to send request."
          );
          throw error;
        }

        (responseReturn.originalUrl = responseData.url),
          (responseReturn.key = responseData.key),
          (responseReturn.shortLink = responseData.shrtlnk);
        //   console.log(responseReturn);
      } catch (error) {
        console.log("error");
      }
    }

    return { generateLink, responseReturn };
  },
};
</script>

<style scoped></style>
