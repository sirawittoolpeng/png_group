<template>
    <footer class="png-footer">
        <slot/>
    </footer>
</template>

<script setup>
</script>

<style lang="scss">
@import "/src/scss/_theming.scss";

.png-footer {
    background-color: $footer-bg-color;
}
</style>