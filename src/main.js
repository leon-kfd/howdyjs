import { createApp } from 'vue';
import App from './App.vue';
import { ResizeDirective } from '../packages/resize';

const app = createApp(App);
app.use(ResizeDirective);
app.mount('#app');
