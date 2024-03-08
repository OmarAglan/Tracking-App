/**
 * Imports the RegisterView, createRouter, and createWebHistory components from their respective files to set up routing.
 * Imports the HomeView component to render it for the home route.
 */
import RegisterView from '@/components/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Creates a Vue Router instance with routes configured.
 * - Uses createRouter() and createWebHistory() from vue-router.
 * - Sets up a route for the HomeView component as the homepage.
 * - Sets up a route for the AboutView component, lazy loaded.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

/**
 * Exports the router instance to make it available for importing in main.ts.
 */
export default router
