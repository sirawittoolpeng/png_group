<template>
    <!-- Navigation -->
    <Navigation logo="images/logo/agency-logo-small.png"
                label=""/>

    <!-- Content Display -->
    <router-view/>

    <!-- Footer -->
    <Footer>
        <FooterMain :logo="footerData.logo"
                   :company-name="footerData.companyName"
                   brand-url="/"
                   :nav-links="footerData.navLinks"
                   :address-lines="footerData.addressLines"
                   :contact="footerData.contact"/>

        <FooterBottom :policy-links="footerData.policyLinks"/>
    </Footer>
</template>

<script setup>
import Navigation from "/src/vue/components/nav/Navigation.vue"
import Footer from "/src/vue/components/footer/Footer.vue"
import FooterMain from "/src/vue/components/footer/FooterMain.vue"
import FooterBottom from "/src/vue/components/footer/FooterBottom.vue"
import {useStrings} from "/src/composables/strings.js"

const strings = useStrings()

const footerData = {
    logo: "images/logo/agency-logo-small.png",
    companyName: "",
    navLinks: [
        { label: "Home", path: "/" },
        { label: "Product", path: "/product" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ],
    addressLines: [
        "บริษัท พี.เอ็น.จี. กรุ๊ป จำกัด",
        "44 ถนนสวัสดิการ1 แขวงหนองแขม",
        "เขตหนองแขม กรุงเทพฯ 10160"
    ],
    contact: {
        tel: [
            { label: "02-444-0768-9", href: "tel:02-444-0768-9" },
            { label: "02-421-0564", href: "tel:02-421-0564" }
        ],
        fax: "02-421-2671",
        email: "mkt@pnggroup.co.th"
    },
    policyLinks: [
        { label: strings.get("privacy_policy"), url: "/privacy-policy" },
        { label: strings.get("cookie_policy"), url: "/cookie-policy" }
    ]
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>
