import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponents from '@/components/Lesson-4'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(GlobalComponents)
app.mount('#app')
