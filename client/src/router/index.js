import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/Success",
    name: "Success",
    component: Success,
  },
  // {
  //   path: "/checkout",
  //   name: "Checkout",
  //   component:Checkout
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
