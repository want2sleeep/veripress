<template>
    <v-card class="mx-2 mt-10" width="90vw">
        <v-carousel show-arrows="hover" cycle hide-delimiter-background>
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :src="slide.Image"
                cover
            >
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>
<script setup>
const slides = [
        {Image: '/src/assets/cry.png'},
        {Image: '/src/assets/sleep.png'},
        {Image: '/src/assets/wink.gif'},
    ]
</script>

<style>
</style>
