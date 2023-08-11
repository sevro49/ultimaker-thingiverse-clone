import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import Dropdown from "./components/Forms/Dropdown.vue";
import router from './router/index.js';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(far);
library.add(fab);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Dropdown", Dropdown);
app.use(createPinia()).use(router).mount("#app");
