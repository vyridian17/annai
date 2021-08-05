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
export default {
    name: 'AllGuides',
    methods: {
        async getGuides() {
            try {
                const allGuides = await fetch("http://localhost:5000/guides");
                const jsonAllGuides = await allGuides.json();
                this.$store.commit('setGuides', jsonAllGuides);
                console.log(this.$store.state.guides);
            } catch (err) {
                console.error(err);
            }
        }
    },
    created: async function() {
            try {
                const allGuides = await fetch("http://localhost:5000/guides");
                const jsonAllGuides = await allGuides.json();
                this.$store.commit('setGuides', jsonAllGuides);
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


