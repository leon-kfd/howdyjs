import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { ResizeDirective } from '../packages/resize';

const app = createApp(App);
app.use(router);
app.use(ResizeDirective);
app.mount('#app');

