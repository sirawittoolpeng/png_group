<template>
    <header :id="id"
            class="png-header">
        <BackgroundPromo :faded="false"
                :no-overlay="backgroundNoOverlay"
                :overlay-color="backgroundOverlayColor"/>

        <!-- Content -->
        <div class="container-xxl">
            <article class="png-hero-header">
                <!-- Logo (optional) -->
                <ImageView v-if="showLogo"
                           :src="logoUrl"
                           :spinner-enabled="true"
                           :alt="title"
                           class="png-hero-header-logo"/>

                <!-- Texts -->
                <h1 class="heading"
                    v-html="parsedTitle"/>
                <h4 class="subheading"
                    v-html="parsedSubtitle"/>

                <!-- Button -->
                <Link v-if="showButton"
                      :url="props.buttonUrl">
                    <XLButton :label="buttonLabel"
                              :icon="buttonIcon"
                              :class="`mt-4`"/>
                </Link>
            </article>
        </div>
    </header>
</template>

<script setup>
import BackgroundPromo from "/src/vue/components/layout/BackgroundPromo.vue"
import ImageView from "/src/vue/components/generic/ImageView.vue"
import {useUtils} from "/src/composables/utils.js"
import {computed} from "vue"
import Link from "/src/vue/components/generic/Link.vue"
import XLButton from "/src/vue/components/widgets/XLButton.vue"

const utils = useUtils()

const props = defineProps({
    id: String,
    title: String,
    subtitle: String,
    logoUrl: String,
    showLogo: { type: Boolean, default: true },
    showButton: Boolean,
    buttonLabel: String,
    buttonIcon: String,
    buttonUrl: String,
    /** When true, hero background is just the image with no dark overlay */
    backgroundNoOverlay: Boolean,
    /** Solid overlay color over the background image (e.g. #4E4E4E66 for 40% darken) */
    backgroundOverlayColor: String
})

const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title)
})

const parsedSubtitle = computed(() => {
    return utils.parseCustomText(props.subtitle)
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

header.png-header {
    --height: clamp(650px, 100vh, 1050px);
    --content-margin-top: 300px;
    --max-logo-proportion:45vw;
    --max-logo-height:50vh;
    @include media-breakpoint-down(xl) {--max-logo-height: 35vh;}
    @include media-breakpoint-down(lg) {--max-logo-height: 30vh; }
    @include media-breakpoint-down(md) {--content-margin-top: 100px;}

    --content-height: calc(var(--height) - var(--content-margin-top));
    --logo-proportion: clamp(190px, 45vw, min(37.5vh, 35vw, 350px));

    position: relative;
    height: var(--height);

    div.container-xxl {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        height: var(--height);
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 2rem;

        @include media-breakpoint-up(lg) {
            padding-left: 3rem;
        }
    }

    article.png-hero-header {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding-top: var(--content-margin-top);
        max-width: 50%;
        text-align: left;
    }

    div.png-hero-header-logo {
        height: var(--logo-proportion);
        width: var(--logo-proportion);
        align-self: flex-start;
    }

    h1.heading {
        color: $white;
        text-transform: uppercase;
        text-align: left;
        font-weight: 700;
        font-size: calc(var(--logo-proportion)/6);
        padding: calc(var(--logo-proportion)/8) 0 calc(var(--logo-proportion)/180);
    }

    h4.subheading {
        font-family: $font-family-base;
        color: $light-5;

        font-size: clamp(16px, calc(var(--logo-proportion)/14), 100px);
        padding: calc(var(--logo-proportion)/20) 0;
        line-height: 24px;
        text-align: left;
    }
}
</style>