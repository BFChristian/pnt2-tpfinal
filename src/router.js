import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './components/Inicio/index.vue'
import ABMLibros from './components/ABMLibros/index.vue'
import Libro from './components/Libro.vue'
import Usuario from './components/Usuario/index.vue'

const routes = [
    { path: '/', redirect: '/inicio' },
    { path: '/inicio', component: Inicio },
    { path: '/abmlibros', component: ABMLibros },
    { path: '/libro', component: Libro },
    { path: '/usuario', component: Usuario},

    { path: '/:pathmatch(.*)*', redirect: '/ingreso' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router