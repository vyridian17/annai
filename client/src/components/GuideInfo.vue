<template>
  <b-container>
    <div >
      <b-row>
        <div >
          <b-col l="4">
            <b-card style="max-width: 20rem;" class="mb-2">
            <h6> {{guide.first_name}} {{guide.last_name}}</h6>
            <img :src="`${guide.img}`" alt="">
            <h6>Languages: {{guide.languages}}</h6>
            <h6>Hourly Rate: ¥{{guide.hourly_rate}}</h6>
              <b-card-text></b-card-text>
              <b-button href="#" variant="primary" @click="setGuide()">Book</b-button>
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
        }
    }
}
</script>

<style>

</style>