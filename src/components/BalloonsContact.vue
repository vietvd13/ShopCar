<template>
    <div 
        v-show="!isVisible" 
        class="balloons-contact" 
        @click="scrollToContactSupport()"
    >
        <i class="fas fa-envelope" />
    </div>
</template>

<script>
import { elementInViewport } from '@/utils/helper';

export default {
    name: 'BalloonsContact',
    data() {
        return {
            isVisible: true,
        }
    },
    mounted () {
        this.isVisible = elementInViewport(document.getElementById('zone-contact-support'));

        if (document.getElementsByClassName('app-shop').length) {
            document.getElementsByClassName('app-shop')[0].onscroll = () => {
                this.isVisible = elementInViewport(document.getElementById('zone-contact-support'));
            }
        }
    },
    methods: {
        scrollToContactSupport() {
            document.getElementById('zone-contact-support').scrollIntoView({
                behavior: 'smooth'
            });
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.balloons-contact {
    z-index: 100;
    position: absolute;
    cursor: pointer;

    bottom: 30px;
    right: 30px;

    width: 50px;
    height: 50px;

    background-color: $international-orange;
    border: 1px solid $porcelain;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
        color: $white;
        font-size: 1.3rem;
    }
}
</style>