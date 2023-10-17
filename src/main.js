import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import store from "../src/store/store.js";
import components from "./components/components.js";
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store).use(router).mount("#app");
