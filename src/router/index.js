import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewTodoView.vue')
    },
    {
      path: '/newtable',
      name: 'newtable',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewTable.vue')
    },
    {
      path: '/formulario',
      name: 'formulario',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Formulario.vue')
    },
    {
      path: '/selectorcolor',
      name: 'selectorcolor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SelectorColorView.vue')
    },
    {
      path: '/sticky',
      name: 'sticky',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StickyView.vue')
    },
    {
      path: '/crudtareas',
      name: 'crudtareas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CrudTareasView.vue'),
      props: true
    },
    {
      path: '/creartarea',
      name: 'creartarea',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CrearTareaView.vue')
    },
    {
      path: '/modificartarea/:nombre/:descripcion/:id',
      name: 'modificartarea',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ModificarTareaView.vue'),
     
    }
    

  ]
})

export default router
