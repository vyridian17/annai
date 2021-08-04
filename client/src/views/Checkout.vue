<template>
  <div>
  <p>Checkout page!</p>

    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
require("dotenv").config();
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  name: 'Checkout',
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51JKcaVJEzx4OWsdKM7OUINRiAb2jvkNEDvkviGKded4631cm456GNj5usis6ZJ2Q07tAe20OautxgOQVv08sbmlt00jiAEFmH4";
    return {
      loading: false,
      lineItems: [
        {
          price: this.$store.state.selectedGuide.price_id, // The id of the one-time price you created in your Stripe dashboard
          quantity: 1
          // images: this.$store.state.selectedGuide.img
        },
      ],
      successURL: 'https://stripe.com/docs/api/products',
      cancelURL: 'https://stripe.com/docs/payments/checkout/client#create-products-and-prices',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      console.log(this.$store.state.selectedGuide.price_id);
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>