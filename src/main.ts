import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";
import "./styles/index.css";

createApp(App).use(MotionPlugin).use(router).mount("#app");
