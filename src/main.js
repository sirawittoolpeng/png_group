import "./scss/style.scss"

import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"

import App from "/src/vue/stack/App.vue"
import HomePage from "/src/vue/content/pages/HomePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
            props: {
                label: "Home",
                faIcon: "pi pi-home",
                inPageNavbar: true,
                shouldAlwaysPreload: true,
                breadcrumbs: []
            }
        },

    ]
})

createApp(App).use(router).mount('#app')
