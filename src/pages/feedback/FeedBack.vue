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
      <div class="response" v-if="isSend">
        Message successfuly send. Thanks for your feedback :) !
      </div>
    </base-card>
  </div>
</template>

<script>
import { ref } from "vue";
// import emailjs from "@emailjs/browser";

export default {
  setup() {
    const name = ref("");
    const message = ref("");
    const isSend = ref(false);

    async function sendEmail() {
      var template_params = {
        from_name: name.value,
        message: message.value,
        to_name: "Admin",
      };

      var data = {
        service_id: process.env.VUE_APP_SERVICEID,
        template_id: process.env.VUE_APP_TEMPLATEID,
        user_id: process.env.VUE_APP_PUBLICKEY,
        template_params: template_params,
        accessToken: process.env.VUE_APP_PRIVATEKEY,
      };

      try {
        await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        isSend.value = true;
        setTimeout(() => {
          isSend.value = false;
        }, 3000);

        name.value = "";
        message.value = "";
      } catch (error) {
        console.log(error);
      }
    }

    return { name, message, sendEmail, isSend };
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

.response {
  margin-top: 1rem;
}
</style>
