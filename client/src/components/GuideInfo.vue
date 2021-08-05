<template>
  <b-container class="d-flex align-items-center justify-content-center">
    <div >
      <b-row>
        <div >
          <b-col l="4">
            <b-card style="width: 30rem;" class="mb-2 card">
            <h6 class="d-flex align-items-center justify-content-center"> {{guide.first_name}} {{guide.last_name}}</h6>
            <img :src="`${guide.img}`" alt="">
            <h6 class="d-flex align-items-center justify-content-center">Languages: {{guide.languages}}</h6>
            <h6 class="d-flex align-items-center justify-content-center">Hourly Rate: ¥{{guide.hourly_rate}}</h6>
              <b-card-text></b-card-text>
              <router-link to="/checkout">
              <b-button class="d-flex align-items-center justify-content-center" href="#" variant="primary" @click="setGuide()">Book</b-button>
              </router-link>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
    </b-container>
</template>


<script>
export default {
    name: "GuideInfo",
    props: {
        guide: Object
    },
    methods: {
        setGuide() {
            this.$store.commit('setSelectedGuide', this.guide);
            console.log(this.$store.state.selectedGuide);
            // this.$router.push("/checkout");
        }
    }
}
</script>

<style scoped>

.card {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>