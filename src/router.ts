import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('./components/Dashboard.vue')
      }
      , {
        path: 'HomePage',
        name: 'HomePage',
        component: () => import('./pages/HomePage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/Login.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('./pages/Error.vue')
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('./pages/NotFound.vue')
  },
  {
    path: '/access',
    name: 'access',
    component: () => import('./pages/Access.vue')
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
