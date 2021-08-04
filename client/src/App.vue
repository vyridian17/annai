<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <AllGuides />
      <Checkout />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AllGuides from "./components/AllGuides.vue";
import Checkout  from './views/Checkout.vue';
export default {
  name: "App",
  components: {
    Navbar,
    AllGuides,
    Checkout,
  },
  mounted: function() {
    console.log(this.$store.state.selectedGuide);
  }
};
</script>

<style></style>
