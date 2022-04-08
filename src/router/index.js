import Vue from "vue";
import VueRouter from "vue-router";
const home = () => import("../views/home");
const searchPage = () => import("../views/appbar-pages/catolog-page");
const likedPage = () => import("../views/appbar-pages/liked-page");
const bagPage = () => import("../views/appbar-pages/bag-page");
const personalAccountPage = () =>
  import("../views/appbar-pages/personal-account-page");
const notFoundPage = () => import("../views/not-found-page/not-fount-page");
const itemsPage = () => import("../views/items-page/items-page");
const loginPage = () => import("../views/register/login-page");
const registerPage = () => import("../views/register/register-page");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/catolog",
    name: "Catolog",
    component: searchPage,
  },
  {
    path: "/favourite",
    name: "Favourite",
    component: likedPage,
  },
  {
    path: "/add-to-cart",
    name: "bagPage",
    component: bagPage,
  },
  {
    path: "/personal-account",
    name: "personalAccount",
    component: personalAccountPage,
  },
  {
    path: "/items",
    name: "items",
    component: itemsPage,
  },
  {
    path: "/login",
    name: "loginPage",
    component: loginPage,
  },
  {
    path: "/register",
    name: "registerPage",
    component: registerPage,
  },
  {
    path: "*",
    component: notFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
