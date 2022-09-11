import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import aboutMe from "../views/aboutMe"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About-Me',
    name: 'About-Me',
    component: aboutMe
  },
  {
    path: "/project-info/:slug",
    name: "relReady",
    component: () => import("../views/relReady.vue"),
  
  }
  

 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("scrollview").scrollIntoView();
  },
})

export default router
