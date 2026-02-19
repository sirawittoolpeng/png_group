<template>
    <PageWrapper id="png-home-page"
                 :no-padding="true"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import ContactSection from "/src/vue/content/sections/ContactSection.vue"
import HomeHeroSection from "/src/vue/content/sections/heroSections/HomeHeroSection.vue"
import AboutSection from "/src/vue/content/sections/AboutSection.vue"

const sections = [
    new SectionInfo('hero', HomeHeroSection,'Home',null),
    new SectionInfo('product',null,'Product','pi pi-box', '/product'),
    new SectionInfo('about',null,'About','pi pi-users', '/about'),
    new SectionInfo('aboutUs',AboutSection),
    new SectionInfo('contact',ContactSection,'Contact','pi pi-envelope', '/contact'),
]
</script>

<style lang="scss" scoped>
</style>