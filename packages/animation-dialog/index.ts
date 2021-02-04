import { App } from 'vue';
import AnimationDialog from './standard-table.vue';

AnimationDialog.install = (app: App): void => {
  app.component(AnimationDialog.name, AnimationDialog);
};

export default AnimationDialog;