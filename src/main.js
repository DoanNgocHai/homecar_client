import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./style.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuetify)

import HomePage from "./pages/HomePage.vue";

import AuthPage from "./pages/auth/AuthPage.vue";
import LoginPage from "./pages/auth/LoginPage.vue";
import RegisterPage from "./pages/auth/RegisterPage.vue";

import BuyCar from "./pages/buyer/BuyCar.vue";
import BuyCarWithBrand from "./pages/buyer/BuyCarWithBrand.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/auth",
    component: AuthPage,
    children: [
      { path: "login", component: LoginPage },
      { path: "register", component: RegisterPage },
    ],
  },
  { path: "/mua-xe", component: BuyCar },
  { path: "/mua-xe/:brand", component: BuyCarWithBrand },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
const vuetify = new Vuetify()
new Vue({
  vuetify, 
  render: (h) => h(App),
  router,
}).$mount("#app");
