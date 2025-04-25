import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import ListURL from './pages/ListURL.vue'
import CreateURL from './pages/CreateURL.vue'
import Manage_Tags from './pages/Manage_Tags.vue'

const routes = [
    { path: '/home', component: Home },
    { path: '/listUrl', component: ListURL },
    { path: '/createUrl', component: CreateURL },
    { path: '/manageTags', component: Manage_Tags },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})