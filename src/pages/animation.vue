<script setup>
import { ref } from "vue";
import TitleAnimation from "@/components/TitleAnimation.vue";
import ColorAnimation from "@/components/ColorAnimation.vue";
import CardAnimation from "@/components/CardAnimation.vue";
import ScrollAnimation from "@/components/ScrollAnimation.vue";
const logined = ref(false);

const login = () => {
    logined.value = true;
};
</script>

<template>
    <v-layout
        class="rounded rounded-md bg-animation"
        style="min-height: auto; height: 100%"
    >
        <v-app-bar color="blue-darken-2">
            <RouterLink to="/">
                <v-btn class="ml-2" color="yellow-lighten-2">
                    back to index
                </v-btn>
            </RouterLink>

            <v-spacer />

            <v-tabs bg-color="blue-darken-2" color="yellow-lighten-2">
                <v-tab
                    text="首页"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>

                <v-tab
                    text="热点"
                    style="font-size: 20px; font-weight: 600"
                    to="/hotshow"
                    color="yellow-lighten-2"
                ></v-tab>

                <v-tab
                    text="国际"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="国内"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="社会"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="经济"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="文娱"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="科技"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="法治"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
            </v-tabs>
            <v-spacer />

            <v-btn
                class="mr-5"
                color="yellow-lighten-2"
                variant="flat"
                @click="login"
                v-if="!logined"
            >
                登录
            </v-btn>
            <span class="mr-4" v-if="logined">
                <span class="mr-2"> John Doe </span>
                <v-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                </v-avatar>
            </span>
        </v-app-bar>

        <!--  <v-navigation-drawer class="border-none bg-blue-lighten-4">
        </v-navigation-drawer> -->

        <v-main
            class="d-flex flex-column align-center justify-center"
            style="min-height: 300px; padding: 10%"
        >
            <!-- <ColorAnimation></ColorAnimation> -->
            <!-- 简介 -->
            <TitleAnimation></TitleAnimation>
            <ScrollAnimation />
            <CardAnimation />
        </v-main>

        <!--    <v-navigation-drawer
            class="border-none bg-blue-lighten-4"
            location="right"
        >
        </v-navigation-drawer> -->
    </v-layout>
    <v-overlay
        class="align-center justify-center"
        :model-value="overlay"
        height="30%"
        width="30%"
    >
        <WelcomeLogin />
    </v-overlay>
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
