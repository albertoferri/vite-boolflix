import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasFaStar, farFaStar)



import "bootstrap/dist/css/bootstrap.css";
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import "bootstrap/dist/js/bootstrap.js";