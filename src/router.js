import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './components/Inicio/index.vue'
import ABMLibros from './components/ABMLibros/index.vue'

const routes = [
    { path: '/', redirect: '/inicio' },
    { path: '/inicio', component: Inicio },
    { path: '/abmlibros', component: ABMLibros },

    { path: '/:pathmatch(.*)*', redirect: '/ingreso' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router