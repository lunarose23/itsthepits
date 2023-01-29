<template>
  <div class="surround">
    <h2>Small Pickup Orders</h2>
    <p>We sometimes do pickup orders of our meat products.</p>
    <p>
      Join the mailing list below to receive email notifications of the dates
      and information before each pickup order opportunity.
    </p>
    <Mailchimp-form></Mailchimp-form>
  </div>
</template>

<script>
import MailchimpForm from "./MailchimpForm.vue";
export default {
  name: "SubscribeNow",
  props: {
    msg: String,
  },
  components: {
    MailchimpForm,
  },
};
</script>
