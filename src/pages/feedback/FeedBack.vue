<template>
  <div>
    <base-card>
      <h3>Got a feedback ? Please let us know</h3>
      <form @submit.prevent="sendEmail">
        <div class="form-control">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            v-model.trim="name"
          />
        </div>
        <div class="form-control">
          <label for="message">Message</label>
          <input
            type="text"
            id="message"
            placeholder="Input your message here"
            v-model.trim="message"
          />
        </div>
        <base-button>Send</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

export default {
  setup() {
    const name = ref("");
    const message = ref("");

    async function sendEmail() {
      // code fragment
      // var data = {
      //   service_id: process.env.VUE_APP_SERVICE_ID,
      //   template_id: process.env.VUE_APP_TEMPLATE_ID,
      //   user_id: process.env.VUE_APP_PUBLIC_KEY,
      //   // accessToken: process.env.VUE_APP_PRIVATE_KEY,
      //   template_params: {
      //     username: "James",
      //     "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      //   },
      // };

      var templateParams = {
        name: name.value,
        message: message.value,
      };

      console.log(process.env.VUE_APP_PUBLICKEY);

      const info = emailjs.init({
        publicKey: process.env.VUE_APP_PUBLIC_KEY,
      });
      console.log(info);

      await emailjs
        .send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          templateParams
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );

      // const response = await fetch(
      //   `https://api.emailjs.com/api/v1.0/email/send`,
      //   {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //   }
      // );

      // const responseData = await response.json();
      // if (!response.ok) {
      //   const error = new Error(
      //     responseData.message || "Failed to send request."
      //   );
      //   throw error;
      // }

      // console.log(responseData);
    }

    return { name, message, sendEmail };
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
