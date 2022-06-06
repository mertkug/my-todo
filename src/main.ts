import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import {
  fastCard,
  fastButton,
  provideFASTDesignSystem,
  fastDivider,
  fastTextField,
  fastMenu,
  fastMenuItem,
  fastCheckbox,
} from "@microsoft/fast-components";

provideFASTDesignSystem().register(
  fastCard(),
  fastButton(),
  fastDivider(),
  fastTextField(),
  fastMenu(),
  fastMenuItem(),
  fastCheckbox()
);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
