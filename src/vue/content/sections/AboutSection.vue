<template>
    <PageSection variant="full"
                 :id="props.id"
                 class="about-section">
        <div class="png-about-section-wrap">
            <div class="png-about-section-spacer png-about-section-spacer-top"/>
            <div class="png-about-section-grid">
                <div class="png-about-section-text">
                    <p class="png-about-section-label">About us</p>
                    <h2 class="png-about-section-title">
                        <span>Producing</span>
                        <span>Premium Quality</span>
                        <span>Product Since 1992</span>
                    </h2>
                    <p class="png-about-section-body">{{ thaiParagraph }}</p>
                    <Link :url="learnMoreUrl"
                          class="png-about-section-cta">
                        Learn more →
                    </Link>
                </div>
                <div class="png-about-section-image-wrap">
                    <img :src="aboutSectionImage"
                         alt="P.N.G. Group manufacturing"
                         class="png-about-section-image"/>
                </div>
            </div>
            <div class="png-about-section-spacer png-about-section-spacer-bottom"/>
        </div>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import Link from "/src/vue/components/generic/Link.vue"
import aboutSectionImage from "/src/assets/about_section.png"

const props = defineProps({
    id: String
})

const learnMoreUrl = "#services"

const thaiParagraph = `บริษัทของเราเป็นผู้ผลิต และจัดจำหน่ายสินค้าพลาสติกครัวเรือน จากประสบการณ์การทำงานของเราด้านการขึ้นรูปพลาสติก ทั้งระบบฉีด (Injection) และระบบเป่า (Blow-molding) ผสมผสานกับความชำนาญตลอด 30 ปี และเทคโนโลยี เราจึงผลิตสินค้าที่มีคุณภาพ ในราคาที่คุ้มค่าและเหมาะสม ตามความต้องการของลูกค้า ที่สำคัญทางบริษัทเรามีบริการครบวงจรเพื่อให้ลูกค้าได้รับประโยชน์สูงสุด`
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

/* Full width to page edges; vertical spacing via spacer divs (can't collapse) */
.png-about-section-wrap {
    width: 100%;
    max-width: 100vw;
    padding: 0;
}

.png-about-section-spacer-top {
    height: 1rem;
    background-color: $white;
}

.png-about-section-spacer-bottom {
    height: 6rem;
}

.png-about-section-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    align-items: start;
    margin: 3rem 0;

    @include media-breakpoint-up(md) {
        grid-template-columns: 0.9fr 1.1fr;
        align-items: stretch;
    }
}

.png-about-section-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 320px;
    padding: 2.5rem 1.5rem 2.5rem 2rem;

    @include media-breakpoint-up(md) {
        min-height: 0;
        padding: 3rem 3rem 3rem 2.5rem;
    }
    @include media-breakpoint-up(lg) {
        padding-left: 3rem;
    }
    @include media-breakpoint-up(xxl) {
        padding-left: 4rem;
    }
}

.png-about-section-label {
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
    font-weight: 600;
    color: $light-6;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.png-about-section-title {
    margin: 0 0 1.5rem 0;
    font-family: $headings-font-family;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: $dark;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    gap: 0.15em;
}

.png-about-section-body {
    margin: 0 0 2rem 0;
    font-size: 0.95rem;
    color: $light-7;
    line-height: 1.7;
    max-width: 32em;
}

.png-about-section-cta {
    margin-top: auto;
    font-size: 0.8rem;
    font-weight: 600;
    color: $light-6;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-decoration: none;

    &:hover {
        color: $dark;
    }
}

/* Image column: full width to page edge, section height follows image (full size, no crop) */
.png-about-section-image-wrap {
    width: 100%;
    min-height: 280px;

    @include media-breakpoint-up(md) {
        min-height: 0;
    }
}

.png-about-section-image {
    width: 100%;
    height: auto;
    min-height: 280px;
    display: block;
}

:deep(section.about-section) {
    background-color: $background-color;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
}
</style>
