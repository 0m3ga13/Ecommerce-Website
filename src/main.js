import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/normalize.css'
import './assets/main.css'
import 'es6-promise/auto'

const app = createApp(App)

app.use(router)

app.mount('#app')
