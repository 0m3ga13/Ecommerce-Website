import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/normalize.css'
import './assets/main.css'
import 'es6-promise/auto'
import 'object-assign'
import 'array-includes-polyfill'
import 'es6-set'
import 'es6-map'
import 'whatwg-fetch'

const app = createApp(App)

app.use(router)

app.mount('#app')
