import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';
import axios from 'axios';
import {createApp} from 'vue';
import useAuth from "@/useAuth.js";
import App from './App.vue';

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const {attempt} = useAuth()

const app = createApp(App)

app.use(router);
app.use(Toast);

attempt().finally(() => {
  app.mount('#app');
});