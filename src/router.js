import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from '../src/components/LogIn.vue'
import SignUp from '../src/components/SignUp.vue'
import Products from '../src/components/Products.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/user/login',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/product',
    name: 'product',
    component: Products
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
