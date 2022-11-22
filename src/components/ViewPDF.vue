<template>
    <VuePdfApp 
        :pdf="file"
        :title="title"
        :theme="theme"
        :class="className"
    />
</template>

<script>
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";

export default {
    name: 'ViewPDF',
    components: {
        VuePdfApp,
    },
    props: {
        file: {
            type: String,
            default: '',
        },
        title: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: 'dark',
            validate: (value) => {
                return ['dark', 'light'].includes(value);
            }
        },
        className: {
            type: [Array, String],
            default: ''
        }
    },
}
</script>