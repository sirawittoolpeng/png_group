<template>
    <!-- Heading Section -->
    <PageHeader :id="props.id"
                title="P.N.G. GROUP"
                subtitle="รับผลิตสินค้าพลาสติกทุกประเภท <br>มีแบบสินค้าให้เลือกมากกว่า 500 รายการ"
                logo-url="images/logo/png_logo.svg"
                :show-button="true"
                button-label="GET STARTED"
                button-url="#about"/>
</template>

<script setup>
import PageHeader from "/src/vue/components/layout/PageHeader.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>