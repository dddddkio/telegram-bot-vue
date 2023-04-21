import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';

import './assets/main.css'
import 'element-plus/dist/index.css'

import "./assets/colorui/animation.css"
import "./assets/colorui/main.css"
import "./assets/colorui/icon.css"

const app = createApp(App)

app.use(router)
app.use(ElementPlus);

app.mount('#app')
