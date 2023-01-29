<template>
  <div>
    <form @submit.prevent="subscribe">
      <div>
        <label>
          Name*
          <input type="text" v-model="name" required />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </label>
      </div>
      <div>
        <label>
          Email Address
          <input type="email" v-model="email" />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </label>
      </div>
      <div>
        <label>
          Phone number
          <input type="tel" v-model="phone" />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        </label>
      </div>
      <div>
        <label class="special">
          <input type="checkbox" v-model="textMe" />
          Please text me
        </label>
      </div>
      <div v-if="isBotProtection" class="special2">
        <p>Please leave this field blank</p>
        <input type="text" v-model="botProtection" />
      </div>
      <div>
        <button type="submit">Subscribe now</button>
      </div>
    </form>
    <div v-if="message" class="success-message">{{ message }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      textMe: false,
      botProtection: "",
      isBotProtection: true,
      errors: {},
      message: "",
    };
  },
  methods: {
    async onSubmit() {
      // form submit logic
      this.message = "Form submitted successfully!";
    },
    subscribe() {
      this.errors = {};
      // Validate form fields
      if (!this.name) {
        this.errors.name = "Name is required";
      }
      if (!this.email) {
        this.errors.email = "Email is required";
      } else if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
      ) {
        this.errors.email = "Invalid email address";
      }
      if (!this.phone) {
        this.errors.phone = "Phone number is required";
      } else if (
        !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(this.phone)
      ) {
        this.errors.phone = "Invalid phone number";
      }
      if (this.botProtection) {
        this.errors.botProtection = "Please leave this field blank";
      }
      if (Object.keys(this.errors).length === 0) {
        axios
          .post("/api/subscribe", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            textMe: this.text,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
label {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  color: antiquewhite;
}
input[type="checkbox"] {
  width: 3%;
}
input {
  background-color: antiquewhite;
}
.special {
  flex-direction: inherit;
}
.special2 {
  visibility: hidden;
}
</style>
