<template>
    <div class="png-footer-main">
        <div class="png-footer-main-wrap">
            <div class="png-footer-main-row">
                <!-- Left: Brand / Logo -->
                <div class="png-footer-main-col png-footer-main-brand">
                    <Link :url="brandUrl" class="png-footer-brand-link">
                        <img :src="logo"
                             alt="P.N.G. Group"
                             class="png-footer-logo"/>
                        <span v-if="companyName"
                              class="png-footer-company-name">{{ companyName }}</span>
                    </Link>
                </div>

                <!-- Center: Navigation Links -->
                <div class="png-footer-main-col png-footer-main-nav">
                    <nav class="png-footer-nav">
                        <Link v-for="item in navLinks"
                              :key="item.path"
                              :url="item.path"
                              class="png-footer-nav-link">
                            {{ item.label }}
                        </Link>
                    </nav>
                </div>

                <!-- Right: Address + Contact -->
                <div class="png-footer-main-col png-footer-main-info">
                    <div class="png-footer-address">
                        <p v-for="(line, i) in addressLines"
                           :key="i"
                           class="png-footer-address-line">{{ line }}</p>
                    </div>
                    <div class="png-footer-contact-grid">
                        <template v-if="contact.tel && contact.tel.length">
                            <div class="png-footer-contact-label">TEL</div>
                            <div class="png-footer-contact-values">
                                <div v-for="(num, i) in contact.tel"
                                     :key="num.label || i"
                                     class="png-footer-contact-value-line">
                                    <a v-if="num.href"
                                       :href="num.href"
                                       class="png-footer-contact-link">{{ num.label }}</a>
                                    <span v-else>{{ num.label }}</span>
                                </div>
                            </div>
                        </template>

                        <template v-if="contact.fax">
                            <div class="png-footer-contact-label">FAX</div>
                            <div class="png-footer-contact-values">
                                <span class="png-footer-contact-value-line">{{ contact.fax }}</span>
                            </div>
                        </template>

                        <template v-if="contact.email">
                            <div class="png-footer-contact-label">EMAIL</div>
                            <div class="png-footer-contact-values">
                                <a :href="`mailto:${contact.email}`"
                                   class="png-footer-contact-link png-footer-contact-value-line">{{ contact.email }}</a>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Link from "/src/vue/components/generic/Link.vue"

defineProps({
    logo: { type: String, required: true },
    companyName: { type: String, default: "" },
    brandUrl: { type: String, default: "/" },
    navLinks: {
        type: Array,
        default: () => []
    },
    addressLines: {
        type: Array,
        default: () => []
    },
    contact: {
        type: Object,
        default: () => ({ tel: [], fax: "", email: "" })
    }
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-footer-main {
    background-color: $footer-bg-color;
    padding: 4.5rem 0;
}

.png-footer-main-wrap {
    /* Wider like the reference (image 2) */
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2.5rem;
}

.png-footer-main-row {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    row-gap: 1.5rem;

    @include media-breakpoint-up(lg) {
        /* คอลัมน์กลางเริ่มตรงกลางหน้า; nav ชิดซ้ายในคอลัมน์นั้น */
        grid-template-columns: 1fr auto 1fr;
        column-gap: 3rem;
    }
}

.png-footer-main-col {
    color: $light-5;
    min-width: 0;
}

/* คอลัมน์ nav อยู่กลางหน้า, ลิงก์ชิดซ้ายในคอลัมน์ */
.png-footer-main-nav {
    @include media-breakpoint-up(lg) {
        justify-self: start;
        text-align: left;
    }
}

.png-footer-main-brand {
    @include media-breakpoint-up(lg) {
        align-self: start;
    }
}

.png-footer-main-info {
    @include media-breakpoint-up(lg) {
        justify-self: end;
        text-align: left;
    }
}

.png-footer-address {
    margin-bottom: 2rem;
}

.png-footer-brand-link {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
}

.png-footer-logo {
    height: 4.25rem;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1);
}

.png-footer-company-name {
    font-size: 0.9rem;
    color: $light-3;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.png-footer-nav {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @include media-breakpoint-up(lg) {
        align-items: flex-start;
    }
}

.png-footer-nav-link {
    color: $light-3;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    position: relative;

    &:hover {
        color: $light-1;
    }

    &.router-link-active {
        color: $light-1;
    }

    /* underline like reference (longer bar under HOME) */
    &.router-link-active::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.35rem;
        width: 46px;
        height: 2px;
        background: $light-1;
    }
}

.png-footer-address-line {
    margin: 0 0 0.25rem 0;
    font-size: 0.9rem;
    color: $light-5;
    line-height: 1.5;

    &:last-child {
        margin-bottom: 0;
    }
}

.png-footer-contact-grid {
    display: grid;
    grid-template-columns: 68px 1fr;
    column-gap: 1.5rem;
    row-gap: 0.5rem;
}

.png-footer-contact-label {
    font-size: 0.9rem;
    color: $light-1;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.png-footer-contact-values {
    font-size: 0.9rem;
    color: $light-5;
}

.png-footer-contact-link {
    color: $light-5;
    text-decoration: none;

    &:hover {
        color: $light-2;
    }
}

.png-footer-contact-value-line {
    line-height: 1.45;
}
</style>
