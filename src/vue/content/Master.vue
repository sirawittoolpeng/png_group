<template>
    <!-- Navigation -->
    <Navigation logo="images/logo/agency-logo-small.png"
                label=""/>

    <!-- Content Display -->
    <router-view/>

    <!-- Footer -->
    <Footer>
        <FooterBlock :darken="false"
                     :row="true">
            <FooterColumn title="About"
                          faIcon="pi pi-lightbulb me-2"
                          :description="[]"
                          :links="[]"
                          :displayLinksAsButtons="false"/>

            <FooterColumn title="Connect With Us"
                          faIcon=""
                          :description="[
                          ]"
                          :links="[
                              {label: `Linkedin`, href: `https://linkedin.com`, faIcon:`fa-brands fa-linkedin`},
                              {label: `Twitter`, href: `https://x.com`, faIcon:`fa-brands fa-x-twitter`},
                              {label: `TikTok`, href: `https://tiktok.com`, faIcon:`fa-brands fa-tiktok`},
                              {label: `Spotify`, href: `https://spotify.com`, faIcon:`fa-brands fa-spotify`},
                          ]"
                          :displayLinksAsButtons="true"/>

            <FooterColumn title="Contact Info"
                          faIcon="pi pi-envelope me-2 pe-1"
                          :description="[
                              `บริษัท พี.เอ็น.จี. กรุ๊ป จำกัด`,
                              `44 ถนนสวัสดิการ1 แขวงหนองแขม`,
                              `เขตหนองแขม กรุงเทพฯ 10160`
                          ]"
                          :links="[
                              {label: `02-444-0768-9`, href: `tel:02-444-0768-9`, faIcon: 'pi pi-phone'},
                              {label: `02-421-0564`, href: `tel:02-421-0564`, faIcon: 'pi pi-phone'},
                              {label: `mkt@pnggroup.co.th`, href: `mailto:mkt@pnggroup.co.th`, faIcon: 'fa-regular fa-envelope'},
                          ]"
                          :displayLinksAsButtons="false"/>
        </FooterBlock>

        <FooterBlock :darken="true"
                     :row="false">
            <FooterCopyright/>
        </FooterBlock>
    </Footer>
</template>

<script setup>
import Navigation from "/src/vue/components/nav/Navigation.vue"
import Footer from "/src/vue/components/footer/Footer.vue"
import FooterBlock from "/src/vue/components/footer/FooterBlock.vue"
import FooterCopyright from "/src/vue/components/footer/FooterCopyright.vue"
import FooterColumn from "/src/vue/components/footer/FooterColumn.vue"
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>