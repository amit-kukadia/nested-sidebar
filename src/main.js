import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsis, faChevronLeft, faCheck, faMagnifyingGlass,faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import './style.css'
import App from './App.vue'

library.add(faEllipsis, faChevronLeft, faCheck, faMagnifyingGlass, faPlus, faTrash )

const pinia = createPinia()

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(pinia)
.mount('#app')
