<template>
    <PageSection variant="default"
                 :id="props.id">
        <div class="png-services-process">
            <img src="/src/assets/service_and_process_of_work_section.png"
                 alt="Services and process of work"
                 class="png-services-process-hero"/>
            <h2 class="png-services-process-title">SERVICES & PROCESS OF WORK</h2>
            <p class="png-services-process-subtitle">
                Nulla lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
            </p>
            <div class="png-services-process-grid">
                <article v-for="(step, index) in steps"
                         :key="index"
                         class="png-services-process-card">
                    <div class="png-services-process-card-icon-wrap">
                        <i :class="step.icon"
                           class="png-services-process-card-icon"
                           aria-hidden="true"/>
                    </div>
                    <h3 class="png-services-process-card-heading">
                        <span class="png-services-process-card-num">{{ step.number }}</span>
                        <span class="png-services-process-card-sep">|</span>
                        <span class="png-services-process-card-title">{{ step.title }}</span>
                    </h3>
                    <p class="png-services-process-card-desc">{{ step.description }}</p>
                </article>
            </div>
        </div>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"

const props = defineProps({
    id: String
})

const steps = [
    {
        number: '01',
        title: 'DESCRIPTION',
        description: 'Discuss details between customers and factory',
        icon: 'fa-regular fa-comment'
    },
    {
        number: '02',
        title: 'DESIGN',
        description: 'Create and refine product design and specifications',
        icon: 'fa-solid fa-pencil'
    },
    {
        number: '03',
        title: 'QUOTATION',
        description: 'Provide pricing and delivery estimates',
        icon: 'fa-solid fa-tag'
    },
    {
        number: '04',
        title: 'QUALITY',
        description: 'Ensure standards and quality requirements',
        icon: 'fa-regular fa-star'
    },
    {
        number: '05',
        title: 'INSPECTION',
        description: 'Review samples and production quality',
        icon: 'fa-solid fa-magnifying-glass'
    },
    {
        number: '06',
        title: 'APPROVAL',
        description: 'Customer sign-off before production',
        icon: 'fa-solid fa-check'
    },
    {
        number: '07',
        title: 'DELIVERY',
        description: 'Ship and deliver finished products',
        icon: 'fa-solid fa-paper-plane'
    }
]
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-services-process {
    text-align: center;
    max-width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.png-services-process-hero {
    width: 100vw;
    max-width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    height: auto;
    display: block;
    margin-bottom: 2.5rem;
    object-fit: cover;
}

.png-services-process-title {
    font-family: $headings-font-family;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: $dark;
    margin: 0 0 1rem 0;
    padding-top: 3rem;
}

.png-services-process-subtitle {
    font-family: $font-family-base;
    font-size: 1rem;
    color: $light-6;
    max-width: 42rem;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
}

.png-services-process-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    text-align: left;
    justify-items: stretch;
    padding-bottom: 2.5rem;

    @include media-breakpoint-up(sm) {
        grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-up(lg) {
        /* 8 columns so the last row of 3 cards can be centered (1 empty col each side) */
        grid-template-columns: repeat(8, 1fr);
        gap: 1.5rem;

        /* First row: 4 cards, each spans 2 columns */
        .png-services-process-card:nth-child(1) { grid-column: 1 / 3; }
        .png-services-process-card:nth-child(2) { grid-column: 3 / 5; }
        .png-services-process-card:nth-child(3) { grid-column: 5 / 7; }
        .png-services-process-card:nth-child(4) { grid-column: 7 / 9; }

        /* Second row: 3 cards centered (columns 2-3, 4-5, 6-7) */
        .png-services-process-card:nth-child(5) { grid-column: 2 / 4; }
        .png-services-process-card:nth-child(6) { grid-column: 4 / 6; }
        .png-services-process-card:nth-child(7) { grid-column: 6 / 8; }
    }
}

.png-services-process-card {
    background-color: #F7F5F6 !important; /* match design: light grey card on white section */
    border: 1px solid #e5e3e4;
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.png-services-process-card-icon-wrap {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #ffffff;
    border: 1px solid #e5e3e4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    flex-shrink: 0;
    align-self: flex-start;
}

.png-services-process-card-icon {
    font-size: 1rem;
    color: $dark;
}

.png-services-process-card-heading {
    font-family: $font-family-base;
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: $dark;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
}

.png-services-process-card-num {
    font-weight: 700;
}

.png-services-process-card-sep {
    color: $light-5;
    font-weight: 600;
}

.png-services-process-card-title {
    font-weight: 700;
}

.png-services-process-card-desc {
    font-family: $font-family-base;
    font-size: 0.875rem;
    color: $light-6;
    line-height: 1.5;
    margin: 0;
}
</style>
