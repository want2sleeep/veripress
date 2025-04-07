/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from '@/plugins'


// Components
import App from './App.vue'

// Composables
import {createApp} from 'vue'
import '../mock/index.js'
import './assets/fonts/index.css'




//import '@/assets/fonts/font.css'
const app = createApp(App)

registerPlugins(app)

app.mount('#app')
