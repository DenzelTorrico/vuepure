import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App)
// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin
app.use(ElementPlus)
app.use(router)

app.mount('#app')
