<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-container>
        <img src="../assets/Logo.jpg" id="logo" alt="Logo" />
        <b-navbar-brand class="active-class" href="#"
          >Tour Guides</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->

  <b-dropdown id="dropdown-left" text="Languages" variant="" class="m-2">
    <b-dropdown-item href="#">English</b-dropdown-item>
    <b-dropdown-item href="#">French</b-dropdown-item>
    <b-dropdown-item href="#">Chinese</b-dropdown-item>
  </b-dropdown>
<div>
  <b-dropdown id="dropdown-right" right text="Area" variant="" class="m-2">
    <b-dropdown-item href="#">Tokyo</b-dropdown-item>
    <b-dropdown-item href="#">Kyoto</b-dropdown-item>
    <b-dropdown-item href="#">Osaka</b-dropdown-item>
  </b-dropdown>
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
export default {
  name: "Navbar",
  data() {
    return {
      guide: "",
    };
  },
  methods: {
    findGuide() {
      console.log("findGuide");
    },
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
