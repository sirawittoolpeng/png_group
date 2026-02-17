<template>
    <div class="png-about-two-col">
        <h2 v-if="title"
            class="png-about-two-col-title">{{ title }}</h2>

        <div class="png-about-two-col-grid">
            <div class="png-about-two-col-col">
                <p v-for="(p, i) in leftParagraphs"
                   :key="'left-' + i"
                   class="png-about-two-col-p"
                   v-html="p"/>
            </div>
            <div class="png-about-two-col-col">
                <p v-for="(p, i) in rightParagraphs"
                   :key="'right-' + i"
                   class="png-about-two-col-p"
                   v-html="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, default: "" },
    leftParagraphs: { type: Array, default: () => [] },
    rightParagraphs: { type: Array, default: () => [] }
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-about-two-col {
    max-width: 100%;
    margin: 0 auto;
}

.png-about-two-col-title {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 700;
    color: $dark;
    text-align: center;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.png-about-two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;

    @include media-breakpoint-up(md) {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
}

.png-about-two-col-col {
    min-width: 0;
}

.png-about-two-col-p {
    font-size: 0.95rem;
    color: $light-7;
    line-height: 1.65;
    margin: 0 0 1rem 0;
    text-align: left;

    &:last-child {
        margin-bottom: 0;
    }
}
</style>
