<template>
    <div class="png-footer-bottom">
        <div class="png-footer-bottom-wrap">
            <div class="png-footer-bottom-row">
                <p class="png-footer-bottom-copyright"
                   v-html="copyrightText"/>

                <div class="png-footer-bottom-policies">
                    <Link v-for="item in policyLinks"
                          :key="item.url"
                          :url="item.url"
                          class="png-footer-bottom-link">
                        {{ item.label }}
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue"
import Link from "/src/vue/components/generic/Link.vue"
import {useStrings} from "/src/composables/strings.js"

const strings = useStrings()

const props = defineProps({
    copyright: String,
    policyLinks: {
        type: Array,
        default: () => []
    }
})

const copyrightText = computed(() => props.copyright || strings.getCopyrightMessage())
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.png-footer-bottom {
    background-color: $footer-bg-highlight-color;
    padding: 0.75rem 0;
}

.png-footer-bottom-wrap {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2.5rem;
}

.png-footer-bottom-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
}

.png-footer-bottom-policies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    margin-left: auto;
}

.png-footer-bottom-copyright {
    margin: 0;
    font-size: 0.85rem;
    color: $light-5;
    text-transform: uppercase;
}

.png-footer-bottom-link {
    font-size: 0.85rem;
    color: $light-5;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
        color: $light-2;
    }
}
</style>
