import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { ResizeDirective } from '../packages/resize';
import { ImgZoomDirective } from '../packages/img-zoom';

const app = createApp(App);
app.use(router);
app.use(ResizeDirective);
app.use(ImgZoomDirective);
app.mount('#app');

