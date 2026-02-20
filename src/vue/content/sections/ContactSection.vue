<template>
    <PageSection variant="full"
                 :id="props.id"
                 class="png-contact-section-root">
        <div class="png-contact-section-spacer-top"/>
        <div class="png-contact-section">
            <div class="png-contact-section-left">
                <span class="png-contact-section-label">CONTACT</span>
                <h2 class="png-contact-section-title">
                    SEND US A<br>MESSAGE
                </h2>
                <div class="png-contact-section-actions">
                    <a href="mailto:contact@pnggroup.com"
                       class="png-contact-section-btn"
                       aria-label="Email us">EMAIL</a>
                    <a href="#"
                       class="png-contact-section-btn"
                       aria-label="Contact via LINE">LINE</a>
                </div>
            </div>
            <div class="png-contact-section-right">
                <img src="/src/assets/contact_us_section.png"
                     alt="Contact us - material swatches"
                     class="png-contact-section-image" />
            </div>
        </div>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-contact-section-spacer-top {
    height: 0.5rem;
}

.png-contact-section {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 240px;
    background-color: #F7F5F6;
    align-items: start;

    @include media-breakpoint-up(md) {
        grid-template-columns: 1fr 1fr;
        min-height: 0;
    }
}

.png-contact-section-left {
    background-color: #F7F5F6;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @include media-breakpoint-up(md) {
        padding: 2.5rem 2.5rem 2.5rem 3rem;
    }

    @include media-breakpoint-up(xxl) {
        padding: 3rem 3.5rem 3rem 4rem;
    }
}

.png-contact-section-label {
    font-family: $font-family-base;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: $light-6;
    margin-bottom: 0.75rem;
}

.png-contact-section-title {
    font-family: $headings-font-family;
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    font-weight: 700;
    line-height: 1.15;
    color: $dark;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin: 0 0 1.75rem 0;
}

.png-contact-section-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
}

.png-contact-section-btn {
    display: inline-block;
    width: calc(33.333% - 0.5rem);
    min-width: 7rem;
    padding: 0.65rem 1rem;
    text-align: center;
    box-sizing: border-box;
    font-family: $font-family-base;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $dark;
    background: transparent;
    border: 1px solid $dark;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: $dark;
        color: $light;
    }
}

.png-contact-section-right {
    background-color: #F7F5F6;
    min-height: 180px;

    @include media-breakpoint-up(md) {
        min-height: 0;
    }
}

.png-contact-section-image {
    width: 100%;
    height: auto;
    display: block;
}
</style>
