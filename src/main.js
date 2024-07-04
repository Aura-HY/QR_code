import { createApp } from 'vue';

import router from './router';
import Varlet from '@varlet/ui';
import '@varlet/ui/es/style';
// import './style.css';

import App from './App.vue';

const app = createApp(App).use(router).mount('#app').use(Varlet);
