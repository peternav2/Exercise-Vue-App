import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeRouter.vue'
import SignIn from './SignInRouter.vue'
import YourPosts from './YourPostsRouter.vue'
import Products from './ProductsRouter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //what is this for?
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'Login',
      component: SignIn
    },
    {
      path: '/yourposts',
      name: 'YourPosts',
      component: YourPosts
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})

export default router
