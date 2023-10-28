import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.css'

import 'bootstrap/dist/css/bootstrap.css' // Uvoz Bootstrap CSS
// import 'bootstrap-vue/dist/bootstrap-vue.css' // Uvoz BootstrapVue CSS

const app = createApp(App)
app.use(router)
app.mount('#app')
