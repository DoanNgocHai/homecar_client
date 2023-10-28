import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/auth/LoginPage.vue";
import RegisterPage from "./pages/auth/RegisterPage.vue";
import ProfilePage from "./pages/account/ProfilePage.vue";
import AccountLayout from "./pages/account/AccountLayout.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage },
  {
    path: "/auth",
    children: [
      { path: "login", component: LoginPage },
      { path: "register", component: RegisterPage },
    ],
  },
  {
    path: "/account",
    component: AccountLayout,
    children: [{ path: "profile", component: ProfilePage }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
