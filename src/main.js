import "./scss/style.scss"

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import App from "/src/vue/stack/App.vue"
import HomePage from "/src/vue/content/pages/HomePage.vue"
import AboutPage from "/src/vue/content/pages/AboutPage.vue"
import ProductPage from "/src/vue/content/pages/ProductPage.vue"
import ContactPage from "/src/vue/content/pages/ContactPage.vue"

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
        {
            path: "/about",
            name: "about",
            component: AboutPage,
            props: {
                label: "About",
                faIcon: "pi pi-users",
                inPageNavbar: false,
                shouldAlwaysPreload: false,
                breadcrumbs: [
                    "/"
                ]
            }
        },
        {
            path: "/product",
            name: "product",
            component: ProductPage,
            props: {
                label: "Product",
                faIcon: "pi pi-box",
                inPageNavbar: false,
                shouldAlwaysPreload: false,
                breadcrumbs: [
                    "/"
                ]
            }
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage,
            props: {
                label: "Contact",
                faIcon: "pi pi-envelope",
                inPageNavbar: false,
                shouldAlwaysPreload: false,
                breadcrumbs: [
                    "/"
                ]
            }
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
})

createApp(App).use(router).mount('#app')
