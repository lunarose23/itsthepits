<template>
  <div>
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us20.list-manage.com/subscribe/post?u=e94dc23c62fffeb3dfe417944&amp;id=459753a5bb&amp;f_id=00bc67e6f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_self"
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div class="special">
            <div class="indicates-required">* indicates required</div>
            <div class="mc-field-group">
              <label for="mce-NAME">Name</label>
              <input type="text" value="" name="NAME" class="" id="mce-NAME" />
              <span id="mce-NAME-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">Email Address *</label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group size1of2">
              <label for="mce-PHONE">Phone Number </label>
              <input
                type="text"
                name="PHONE"
                class=""
                value=""
                id="mce-PHONE"
              />
              <span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group input-group">
              <strong>Please Text Me </strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="1"
                    name="group[6400][1]"
                    id="mce-group[6400]-6400-0"
                  />
                  <label for="mce-group[6400]-6400-0">Yes</label>
                </li>
              </ul>
              <span id="mce-group[6400]-HELPERTEXT" class="helper_text"></span>
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style="display: none"
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style="display: none"
              ></div>
            </div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_e94dc23c62fffeb3dfe417944_459753a5bb"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="optionalParent">
            <div class="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
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
form {
  color: antiquewhite;
}
.special {
  display: flex;
  flex-direction: column;
}
.mc-field-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 0.5em;
}
</style>
