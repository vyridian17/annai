import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guides: [],
    selectedGuide: {}
  },
  mutations: {
    setGuides(state, guides) {
      state.guides = guides;
    },
    setSelectedGuide(state, guide){
      state.selectedGuide = guide;
    }
  },
  actions: {},
  modules: {},
});
