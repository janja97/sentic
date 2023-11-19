import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const savedLocale = localStorage.getItem('locale');

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: savedLocale || 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('/src/locales/en.json'),
    hr: require('/src/locales/hr.json'),
    de: require('/src/locales/de.json')
  }
});

app.use(i18n).use(router).mount('#app');
