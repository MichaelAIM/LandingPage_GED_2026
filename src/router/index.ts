import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import RegistroIquique from "../views/RegistroIquique.vue";
import RegistroArica from "../views/RegistroArica.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registro-iquique",
    name: "RegistroIquique",
    component: RegistroIquique,
    meta: { hideNavbar: true },
  },
  {
    path: "/registro-arica",
    name: "RegistroArica",
    component: RegistroArica,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
