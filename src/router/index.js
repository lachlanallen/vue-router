import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import RandomFacts from "../views/RandomFacts.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/random-facts",
    name: "random-facts",
    component: RandomFacts,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
