import { createApp } from 'vue'
import { i18n } from './modules/i18n'
import App from './app.vue'
import './assets/index.css'

createApp(App)
  .use(i18n)
  .mount('#app')
