import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Brazil from '@/views/Brazil.vue';
import Hawaii from '@/views/Hawaii.vue';
import Panama from '@/views/Panama.vue';
import Jamaica from '@/views/Jamaica.vue';



const routes = [
  {
    path: "/", name: "Home", component: HomeView,
  },
 
 {path: '/destination/:id:slug', name:'destination.show', component: ()=>import('@/views/DestinationShow.vue') },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-school-active-link'
});

export default router;
