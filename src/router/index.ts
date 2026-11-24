import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

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
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})