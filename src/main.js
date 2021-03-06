import { createApp } from 'vue';
import App from './App.vue';
import "./assets/styles.css";
import router from "./router";

const app = createApp(App).use(router);
app.use(router);
app.mount('#app');