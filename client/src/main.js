import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBtsR8FKDBBeNEyVRrjFzqSXBhuRuK2-8o",
  authDomain: "tour-guide-7db59.firebaseapp.com",
  databaseURL: "https://tour-guide-7db59-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "tour-guide-7db59",
  storageBucket: "tour-guide-7db59.appspot.com",
  messagingSenderId: "727652792156",
  appId: "1:727652792156:web:2e9fcb1bcc9e91c8b0f399"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
