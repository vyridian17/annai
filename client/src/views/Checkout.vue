<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit" class="btn btn-secondary d-flex justify-content-center mx-auto">Pay now!</button>
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
    // console.log(price_id);
    return {
     loading: false,
      lineItems: [
        {
          price: '',
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
      var price_id = this.$store.state.selectedGuide.price_id;
      console.log(`Price ID is: ${price_id}`);
      this.lineItems[0].price = price_id, // Update the price on the line item with the DB value
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style>
.pay {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
</style>