<script setup>
import Carousel from '@/components/Carousel.vue'
import TitleAnimation from '@/components/TitleAnimation.vue'
import CardAnimation from '@/components/CardAnimation.vue'
import ScrollAnimation from '@/components/ScrollAnimation.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
    <v-layout
        class="rounded rounded-md bg-animation"
        style="min-height: auto; height: 100%"
    >
        <NavBar></NavBar>
        <v-main
            class="d-flex flex-column align-center justify-center"
            style="min-height: 300px; padding: 10%"
        >
            <!-- 简介 -->
            <TitleAnimation></TitleAnimation>
            <!-- 轮播图 -->
            <Carousel/>
            <!-- 数据展示 -->
            <CardAnimation></CardAnimation>

            <ScrollAnimation></ScrollAnimation>
        </v-main>
    </v-layout>
</template>
<style scoped>
.bg-animation {
    background: #bbdefb;
    margin: 0;
    min-height: 100%;
    position: relative;
    background-image: radial-gradient(
        closest-side,
        rgba(13, 71, 161, 0.8),
            /* 深蓝（主色 #0D47A1） */ rgba(13, 71, 161, 0)
    ),
    radial-gradient(
        closest-side,
        rgba(33, 150, 243, 0.7),
            /* 亮蓝 #2196F3 */ rgba(33, 150, 243, 0)
    ),
    radial-gradient(
        closest-side,
        rgb(107, 206, 224, 0.8),
            /* 灰蓝 #78909C */ rgba(120, 144, 156, 0)
    ),
    radial-gradient(
        closest-side,
        rgba(254, 234, 131, 0.6),
        rgba(254, 234, 131, 0)
    ),
    radial-gradient(
        closest-side,
        rgb(234, 238, 177),
        rgba(248, 192, 147, 0)
    );
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
    110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
    -30vmax -30vmax, 50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;
    background-attachment: fixed;
}

.bg-animation::after {
    position: fixed;
    content: "";
    display: block;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: -1;
}

@keyframes movement {
    0%,
    100% {
        background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
        110vmax 110vmax, 90vmax 90vmax;
        background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
        -30vmax -30vmax, 50vmax 50vmax;
    }
    25% {
        background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax,
        100vmax 100vmax, 60vmax 60vmax;
        background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax 20vmax,
        -40vmax -20vmax, 40vmax 60vmax;
    }
    50% {
        background-size: 80vmax 80vmax, 110vmax 110vmax, 89vmax 88vmax,
        60vmax 60vmax, 80vmax 80vmax;
        background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax,
        20vmax 10vmax, 30vmax 70vmax;
    }
    75% {
        background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax,
        90vmax 90vmax, 70vmax 70vmax;
        background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax,
        -10vmax 10vmax, 40vmax 60vmax;
    }
}
</style>
