import { createRouter, createWebHistory } from 'vue-router'
import shop from '../views/shop.vue';
import Item from '../views/Item.vue';
import About from '../views/about.vue'
import HomePage from '../views/homePage.vue'
import Contact from '../views/contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/buyItem',
      name: 'buyItem',
      component: Item
    },
  
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
     {
      path: '/:pathMatch(.*)*'  ,
         name: '404',
      component: error
      },
  ]
})

export default router
