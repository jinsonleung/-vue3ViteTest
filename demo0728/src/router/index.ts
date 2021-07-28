import { createRouter, createWebHashHistory }  from "vue-router"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"

const routers = [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/", component: Home},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router