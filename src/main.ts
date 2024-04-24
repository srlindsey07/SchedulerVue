import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ClickOutsideDirective from './shared/directives/ClickOutsideDirective'

const app = createApp(App)

app.directive('click-outside', ClickOutsideDirective)

app.use(createPinia())
app.use(router)

app.mount('#app')
