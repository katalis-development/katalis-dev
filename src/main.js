import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./i18n";
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

createApp(App).use(i18n).mount("#app");
