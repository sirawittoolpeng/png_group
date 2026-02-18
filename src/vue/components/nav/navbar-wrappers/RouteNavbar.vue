<template>
    <Navbar :brand-logo="logo"
            :brand-label="label"
            brand-url="/"
            :link-list="linkList"
            :expandable="isTransparentAtTopRoute"/>
</template>

<script setup>
import Navbar from "/src/vue/components/nav/navbar/Navbar.vue"
import {computed} from "vue"
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps({
    logo: String,
    label: String
})

const linkList = computed(() => {
    return router.getRoutes()
        .map(r => {return {
            path: r.path,
            label: r?.props?.default?.label || r.name,
            faIcon: r?.props?.default?.faIcon || 'fa-solid fa-circle',
            isActive: route.path === r.path
        }})
        .filter(r => {
            return r.label
        })
})

/** Routes that show a hero at top: navbar is transparent when scrolled to top */
const transparentAtTopRoutes = ['about']
const isTransparentAtTopRoute = computed(() => transparentAtTopRoutes.includes(route.name))
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>