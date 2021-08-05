<template>
    <div>
        <div v-for="guide of this.$store.state.guides" :key="guide.id">
            <div>

                <GuideInfo :guide="guide"/>
            </div>
        </div>
    </div>
</template>



<script>
import GuideInfo from "./GuideInfo.vue";
const axios = require("axios");
export default {
    name: 'AllGuides',
    methods: {
        async getGuides() {
            try {
                const allGuides = await axios.get("/guides");
                // const jsonAllGuides = await allGuides.json();
                this.$store.commit('setGuides', allGuides.data);
                console.log(this.$store.state.guides);
            } catch (err) {
                console.error(err);
            }
        }
    },
    created: async function() {
            try {
                const allGuides = await axios.get("/guides");
                console.log(allGuides);
                // const jsonAllGuides = await allGuides.json();
                this.$store.commit('setGuides', allGuides.data);
                console.log(this.$store.state.guides);
            } catch (err) {
                console.error(err);
            }
    },
    components: {
        GuideInfo
    }
}
</script>



<style>

</style>


