<template>
    <PageSection variant="default"
                 :id="props.id">
        <PageSectionContent>
            <AboutTwoColumnBlock title="P.N.G. GROUP CO., LTD"
                                 :left-paragraphs="englishParagraphs"
                                 :right-paragraphs="thaiParagraphs"/>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import AboutTwoColumnBlock from "/src/vue/components/articles/AboutTwoColumnBlock.vue"

const props = defineProps({
    id: String
})

const englishParagraphs = [
    `Founded in January 1992, P.N.G. Group set out to be a leading plastic production company, specialising in Injection and Blow Molding plastic products. With our 30 years of experience, we offer high quality products at reasonable prices with excellent customer service. Our company provides full services from design to delivery. We have a professional team for each department. Therefore, we are able to meet our customer needs in both products and services. Our company is certified by Good Manufacturing Practice (GMP), ISO 9001 and Thai Industrial Standard (TISI).`,
    `P.N.G. Group is located in Samut Sakhon, Thailand, with approximately 26,000 square metres.`
]

const thaiParagraphs = [
    `บริษัท พี.เอ็น.จี. กรุ๊ป จำกัด เป็นผู้ผลิต และจัดจำหน่ายสินค้าพลาสติกครัวเรือน จากประสบการณ์ทำงานของเราด้านการขึ้นรูปพลาสติก ทั้งระบบฉีด (Injection) และเป้า (Blow-molding) ผสมผสานกับความชำนาญตลอด 30 ปี และเทคโนโลยี เราจึงผลิตสินค้าที่มีคุณภาพในราคาที่คุ้มค่าและเหมาะสม ตามความต้องการของลูกค้า ที่สำคัญทางบริษัทเรามีบริการครบวงจร เพื่อให้ลูกค้าได้รับประโยชน์สูงสุด`,
    `ปัจจุบันตั้งอยู่ที่ 88 หมู่ 4 ตำบลท่าเสา อำเภอกระทุ่มแบน จังหวัดสมุทรสาคร 74110 บนพื้นที่เกือบ 20 ไร่`
]
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>
