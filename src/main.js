import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import './bootstrap'
import router from './router'

app.use(router)
createApp(App).mount('#app')

