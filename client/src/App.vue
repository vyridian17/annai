<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <AllGuides />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AllGuides from "./components/AllGuides.vue";

export default {
  name: "App",
  components: {
    Navbar,
    AllGuides
  },
  mounted: function() {
    console.log(this.$store.state.selectedGuide);
  }
};
</script>

<style></style>
