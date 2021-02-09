import { App } from 'vue';
import StandardTabs from './standard-tabs.vue';

StandardTabs.install = (app: App): void => {
  app.component(StandardTabs.name, StandardTabs);
};

export default StandardTabs;