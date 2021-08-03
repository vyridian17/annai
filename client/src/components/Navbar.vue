<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-container>
        <img src="https://placekitten.com/g/30/30" id="logo" alt="Kitten" />
        <b-navbar-brand class="active-class" href="#"
          >Tour Guides</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search for a guide"
                v-model="guide"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                @click.prevent="findGuide"
                >Search</b-button
              >
            </b-nav-form>
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
  height: 50px;
  width: 90px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
