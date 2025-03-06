import { createRouter, createWebHistory } from 'vue-router'
import ElContador from '@/modules/contador/components/ElContador.vue'
import ListaDeTareas from '@/modules/listaDeTareas/components/ListaDeTareas.vue'
import RegistrarView from '@/modules/registro/views/RegistrarView.vue'
import Calcular from '@/modules/calcular/views/CalcularView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/contador',
        name: 'contador',
        component: ElContador
    },
    {
        path:'/tareas',
        name: 'Lista de tareas',
        component: ListaDeTareas
    },
    {
        path:'/registrar',
        name: 'Formulario de registro',
        component: RegistrarView
    },
    {
        path:'/calcular',
        name: 'Calcular',
        component: Calcular
    }
  ]
})

export default router
