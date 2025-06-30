import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './components/Inicio/index.vue'
import ABMLibros from './components/ABMLibros/index.vue'
import CrearOpinion from './components/CrearOpinion.vue'

const routes = [
    { path: '/', redirect: '/inicio' },
    { path: '/inicio', component: Inicio },
    { path: '/abmlibros', component: ABMLibros },
    { path: '/crearopinion', component: CrearOpinion },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router