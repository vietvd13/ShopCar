<template>
    <b-card>
        <b-img-lazy
            fluid
            v-for="image in items"
            :key="image"
            :src="`${domainImage}${image}`"
            :blank-src="require('@/assets/images/noimage.webp')"
            v-bind="{
                height: 300,
                width: 'auto'
            }"
        />
    </b-card>
</template>

<script>
export default {
    name: 'ListImage',
    props: {
        items: {
            type: Array,
            default: function() {
                return []
            }
        },
    },
    computed: {
        domainImage() {
            return process.env.VUE_APP_URL_IMAGE;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

img {
    &:not(:last-child) {
        margin-bottom: 10px;
    }

    height: auto;
    width: 100%;
}
</style>