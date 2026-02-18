<template>
    <!-- Site Section -->
    <section class="png-section"
             :id="id"
             :class="classList">

        <BackgroundPromo v-if="props.variant === 'promo'"
                         :faded="true"/>

        <!-- Container (omit for full-width variant) -->
        <div v-if="props.variant !== 'full'" class="container-xxl">
            <slot/>
        </div>
        <slot v-else/>
    </section>
</template>

<script setup>
import {computed} from "vue"
import BackgroundPromo from "/src/vue/components/layout/BackgroundPromo.vue"

const props = defineProps({
    id: String,
    variant: String, // default, primary, dark or promo.
    name: String,
    faIcon: String,
})

const classList = computed(() => {
    return props.variant ?
        `png-section-${props.variant}` :
        ``
})
</script>

<style lang="scss">
@import "/src/scss/_theming.scss";

section.png-section {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 4rem 0em 5rem),
        xxl:  (padding: 3rem 0rem 3.5rem),
        lg:   (padding: 2.5rem 0rem 3.5rem),
        md:   (padding: 2.25rem 0rem 3.25rem),
        sm:   (padding: 2rem 0rem 3rem),
    ));

    background-color: $background-color;
    position: relative;

    .png-promo-background {
        display: block;
        margin-top: -4rem;
    }
}

section.png-section-primary {
    background-color: lighten($primary, 42%);
}

section.png-section-dark {
    background-color: lighten($dark, 10%);
    color: $text-normal-contrast;

    h5.png-section-header-subtitle {
        color: $light-5;
    }
}

section.png-section-promo {
    background-color: transparent;
}

section.png-section-full {
    padding-bottom: 0;
    padding-top: 0;
}
</style>