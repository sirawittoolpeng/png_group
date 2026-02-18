<template>
    <img src="/src/assets/about_hero.png"
                     alt="About us - hero image"
                     class="png-about-hero-image" />
</template>

<script setup>
const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-about-hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
