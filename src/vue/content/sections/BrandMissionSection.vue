<template>
    <PageSection variant="full"
                 :id="props.id"
                 class="brand-mission-section">
        <div class="png-brand-mission-wrap">
            <div class="png-brand-mission-spacer-top"/>
            <!-- Top band: left (Premium Quality) + right (Full Service, On-Time Delivery) -->
            <div class="png-brand-mission-top">
                <div class="png-brand-mission-left">
                    <img :src="premiumQualityImage"
                         alt="Premium Quality"
                         class="png-brand-mission-left-img"/>
                    <div class="png-brand-mission-left-overlay">
                        <h2 class="png-brand-mission-left-title">Premium Quality</h2>
                        <p class="png-brand-mission-left-text">{{ premiumQualityText }}</p>
                    </div>
                </div>
                <div class="png-brand-mission-right">
                    <div class="png-brand-mission-cell png-brand-mission-cell-img">
                        <img :src="pinkImage" alt="Full Service" class="png-brand-mission-cell-image"/>
                    </div>
                    <div class="png-brand-mission-cell png-brand-mission-cell-text">
                        <h3 class="png-brand-mission-cell-title">Full Service</h3>
                        <p class="png-brand-mission-cell-desc">{{ fullServiceText }}</p>
                    </div>
                    <div class="png-brand-mission-cell png-brand-mission-cell-text">
                        <h3 class="png-brand-mission-cell-title">On-Time Delivery</h3>
                        <p class="png-brand-mission-cell-desc">{{ onTimeDeliveryText }}</p>
                    </div>
                    <div class="png-brand-mission-cell png-brand-mission-cell-img">
                        <img :src="greenImage" alt="On-Time Delivery" class="png-brand-mission-cell-image"/>
                    </div>
                </div>
            </div>
            <!-- Bottom: brand list -->
            <div class="png-brand-mission-bottom">
                <img :src="brandListImage"
                     alt="Our brands"
                     class="png-brand-mission-brand-list"/>
            </div>
            <div class="png-brand-mission-spacer-bottom"/>
        </div>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import premiumQualityImage from "/src/assets/premium_quality.png"
import pinkImage from "/src/assets/Pink.png"
import greenImage from "/src/assets/Green.png"
import brandListImage from "/src/assets/brand_list.png"

const props = defineProps({
    id: String
})

const premiumQualityText = `เราเลือกใช้วัตถุดิบที่แข็งแรง ทนทาน ได้มาตรฐาน เหมาะสมกับการใช้งานและความต้องการของลูกค้า`
const fullServiceText = `เรามีทีมผู้เชี่ยวชาญตั้งแต่การออกแบบจนถึงการจัดส่ง รวมถึงบริการหลังการขาย`
const onTimeDeliveryText = `เราให้ความสำคัญกับการจัดส่งที่ตรงเวลา รวดเร็ว และมีคุณภาพ`
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-brand-mission-wrap {
    width: 100%;
    max-width: 100vw;
    padding: 0;
    background-color: $light-1;
}

.png-brand-mission-spacer-top {
    height: 4rem;
}

.png-brand-mission-spacer-bottom {
    height: 1rem;
    background-color: $white;
}

.png-brand-mission-top {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    min-height: 320px;

    @include media-breakpoint-up(md) {
        grid-template-columns: 2fr 3fr; /* 40% Premium Quality, 60% four cells */
        min-height: 0; /* row height follows right column content (images) */
    }
}

.png-brand-mission-left {
    position: relative;
    min-height: 320px;
    overflow: hidden;

    @include media-breakpoint-up(md) {
        min-height: 100%;
    }
}

.png-brand-mission-left-img {
    width: 100%;
    height: 100%;
    min-height: 320px;
    object-fit: cover;
    object-position: center;
    display: block;

    @include media-breakpoint-up(md) {
        position: absolute;
        inset: 0;
        min-height: 0;
    }
}

.png-brand-mission-left-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem 2rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.5) 100%);

    @include media-breakpoint-up(md) {
        padding: 3rem;
    }
}

.png-brand-mission-left-title {
    margin: 0 0 1rem 0;
    font-family: $headings-font-family;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 700;
    color: $white;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.png-brand-mission-left-text {
    margin: 0;
    font-size: 0.9rem;
    color: $white;
    line-height: 1.65;
    max-width: 28em;
}

.png-brand-mission-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto; /* row height = content (image + text) */
    gap: 0;
    min-height: 320px;

    @include media-breakpoint-up(md) {
        min-height: 0;
    }
}

.png-brand-mission-cell {
    background-color: $white;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include media-breakpoint-up(md) {
        padding: 2rem;
    }
}

.png-brand-mission-cell-text {
    align-items: flex-start;
}

.png-brand-mission-cell-text:nth-child(2) {
    border-left: 1px solid $light-3;
}

.png-brand-mission-cell-text:nth-child(3) {
    border-top: 1px solid $light-3;
}

.png-brand-mission-cell-img {
    padding: 0;
    display: block;
}

.png-brand-mission-cell-img:nth-child(4) {
    border-left: 1px solid $light-3;
    border-top: 1px solid $light-3;
}

.png-brand-mission-cell-image {
    width: 100%;
    height: auto;
    display: block;
    vertical-align: top;
}

.png-brand-mission-cell-title {
    margin: 0 0 0.75rem 0;
    font-family: $headings-font-family;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    color: $dark;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.png-brand-mission-cell-desc {
    margin: 0;
    font-size: 0.9rem;
    color: $light-7;
    line-height: 1.6;
}

.png-brand-mission-bottom {
    width: 100%;
    padding: 2rem 1.5rem;
    background-color: $white;

    @include media-breakpoint-up(md) {
        padding: 3rem 2rem;
    }
}

.png-brand-mission-brand-list {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}

:deep(section.brand-mission-section) {
    background-color: $light-1;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
}
</style>
