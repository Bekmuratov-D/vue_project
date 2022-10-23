import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from '@/router';
import components from '@/components/UI';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component)
})


app
  .use(router)
  .use(vuetify)
  .mount('#app');
