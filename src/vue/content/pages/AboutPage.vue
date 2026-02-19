<template>
    <PageWrapper id="png-about-page"
                 :no-padding="false"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import AboutHeroSection from "/src/vue/content/sections/heroSections/AboutHeroSection.vue"
import HistorySection from "/src/vue/content/sections/HistorySection.vue"
import ContactSection from "/src/vue/content/sections/ContactSection.vue"
import ServicesAndProcessOfWorkSection from "/src/vue/content/sections/ServicsAndProcessOfWorkSection.vue"

const sections = [
    new SectionInfo('hero', AboutHeroSection),
    new SectionInfo('history', HistorySection),
    new SectionInfo('services', ServicesAndProcessOfWorkSection),
    new SectionInfo('contact', ContactSection)
]       
</script>

<style lang="scss" scoped>
</style>