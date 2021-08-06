import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guides: [],
    selectedGuide: {},
    price: 0,
    language: "",
    location: "",
    loggedIn: false,
    firebaseUser:"",

  },
  mutations: {
    setGuides(state, guides) {
      state.guides = guides;
    },
    setSelectedGuide(state, guide) {
      state.selectedGuide = guide;
    },
    setPrice(state, price) {
      state.price = price;
    },
    setLanguage(state, language) {
      state.language = language;
    },
    setLocation(state, location) {
      state.location = location;
    },
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
    setFirebaseUser(state, firebaseUser) {
      state.firebaseUser = firebaseUser;
    },
  },
  actions: {
    async login(_, { email, password }) {
      try {;
        const user = await firebase.auth().currentUser
         await console.log(user)

        // console.log(name);
        // setFirebaseUser(name);
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // this.store.commit('setFirebaseUser', user)
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async register({ dispatch }, { email, password, name }) {
      try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        const user = result.user;
        user.updateProfile({displayName : name})
        await firebase.database().ref(`/users/${uid}/info`).set({
          name: name,
        });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async getUid() {
      const user = firebase.auth().currentUser;
      console.log(user);
      // this.store.commit('setFirebaseUser', user);
      return user ? user.uid : null;
    },
  },
  modules: {},
});
