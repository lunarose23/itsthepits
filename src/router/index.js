import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catering",
    name: "catering",
    component: HomeView,
  },
  {
    path: "/pickup",
    name: "pickup",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
