<script setup>
import { ref } from 'vue'

const text = ref('')
const img = ref('')
let items;

const copy = (event) => {
    items = event.clipboardData.items
    console.log(items)

    for (const item of items) {
        if (item.type.startsWith('image')) {
            // const blob = item.getAsFile()
            // const reader = new FileReader()
            //
            // reader.onload = () => {
            //     img.value = reader.result
            // }
            //
            // reader.readAsDataURL(blob)

            const blob = item.getAsFile();
            if (blob) {
                const url = URL.createObjectURL(blob);
                img.value = url;
            }
        }
    }
}
</script>

<template>
    <v-textarea
        v-model="text"
        label="Label"
        @paste="copy"
    />

    {{ items }}

    <v-img :src="img" v-if="img"/>
</template>

<style scoped>

</style>
