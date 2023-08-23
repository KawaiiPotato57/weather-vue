import './assets/main.css';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import Vuex from 'vuex';
import store from './store/index';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(Vuex);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
