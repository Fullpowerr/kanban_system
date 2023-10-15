import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./components/store/store.js";
import components from "./components/components.js";
import Draggable from "vuedraggable";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
app.use(Draggable);
