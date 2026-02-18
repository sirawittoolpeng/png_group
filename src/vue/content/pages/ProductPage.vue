<template>
    <PageWrapper id="png-about-us-page"
                 :no-padding="false"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import ProductHeroSection from "/src/vue/content/sections/heroSections/ProductHeroSection.vue"
import ContactSection from "/src/vue/content/sections/ContactSection.vue" 

const sections = [
    new SectionInfo('hero', ProductHeroSection),
    new SectionInfo('contact', ContactSection)
]
</script>

<style lang="scss" scoped>
</style>