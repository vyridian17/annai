<template>

  <div class="header-wrapper">
    <div class="navbar">
      <div class="main-nav-container">
        <img src="" id="logo" alt="tourGuideLogo" />
        <div class="navbar">
          <b-navbar toggleable="sm" type="blue">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
                <!-- <router-link to="/Home"> -->
                  <b-nav-text id="">All Guides</b-nav-text>
                <!-- </router-link> -->
                <!-- <router-link to="/register"> -->
                  <b-nav-text id="">Register</b-nav-text>
                <!-- </router-link> -->
                <!-- <router-link to="/Guides"> -->
                  <b-nav-text id="all" 
                    >Login</b-nav-text
                  >
                <!-- </router-link> -->
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
    </div>
</template>



  <!-- <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Tour Guide</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav> -->


      <!-- Right aligned nav items -->
    <!-- </b-collapse>
  </b-navbar>
</div> -->


<script>
export default {
 name: "Navbar"
}
</script>

