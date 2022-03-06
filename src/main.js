import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Api from './plugins/Api';
import './assets/tailwind.css';

const app = createApp(App);

app.config.globalProperties.$api = Api;
app.use(store);
app.use(router);
app.mount('#app');
