import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to) {
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
  path: '/backrooms',
  name: 'backrooms',
  component: () => import('../pages/backrooms/Backrooms.vue'),
},
    {
      path: '/lugares-malditos',
      name: 'lugares-malditos',
      component: () => import('../pages/lugares-malditos/LugaresMalditos.vue'),
    },
    {
      path: '/leyendas-urbanas',
      name: 'leyendas-urbanas',
      component: () => import('../pages/leyendas-urbanas/LeyendasUrbanas.vue'),
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})