<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-container>
        <img src="../assets/Logo.jpg" id="logo" alt="Logo" />
        <b-navbar-brand class="active-class" href="#">Tour Guides</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->

  <b-dropdown id="dropdown-left" text="Languages" variant="" class="m-2">
    <b-dropdown-item href="#" @click="setLanguage($event)">English</b-dropdown-item>
    <b-dropdown-item href="#" @click="setLanguage($event)">French</b-dropdown-item>
    <b-dropdown-item href="#" @click="setLanguage($event)">Chinese</b-dropdown-item>
  </b-dropdown>
<div>
  <b-dropdown id="dropdown-right" right text="Area" variant="" class="m-2">
    <b-dropdown-item href="#"  @click="setLocation($event)">Tokyo</b-dropdown-item>
    <b-dropdown-item href="#" @click="setLocation($event)">Kyoto</b-dropdown-item>
    <b-dropdown-item href="#" @click="setLocation($event)">Osaka</b-dropdown-item>
  </b-dropdown>
    <b-dropdown id="dropdown-right" right text="Price" variant="" class="m-2">
    <b-dropdown-item href="#" @click="setPrice($event)">1000</b-dropdown-item>
    <b-dropdown-item href="#" @click="setPrice($event)">10000</b-dropdown-item>
    <b-dropdown-item href="#" @click="setPrice($event)">100000</b-dropdown-item>
  </b-dropdown>
  <button class="btn btn-info" @click="findGuide">Search</button>
</div>

          <b-navbar-nav class="ml-auto">
            
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      guide: "",
    };
  },
  methods: {
    async findGuide() {
      let guides = await axios.get(`/guides/${this.$store.state.language}/${this.$store.state.location}/${this.$store.state.price}`);
      console.log(this.$store.state.language);
      console.log(this.$store.state.location);
      console.log(this.$store.state.price);
      console.log(guides.data);
      this.$store.commit('setGuides', guides.data);
    },
    setPrice(event) {
      this.$store.commit('setPrice', event.target.innerText);
      console.log(event.target.innerText);
    },
    setLanguage(event) {
      this.$store.commit('setLanguage', event.target.innerText);
      console.log(event.target.innerText);
    },
    setLocation(event) {
      this.$store.commit('setLocation', event.target.innerText);
      console.log(event.target.innerText);
    }
  },
};
</script>

<style scoped>
#logo {
  height: 90px;
  width: 90px;
  cursor: pointer;
  margin-right: 10px;
}

.navbar{
margin-bottom: 10px;

}
</style>
