<script setup>
import { ref, onMounted, nextTick } from "vue";
import BasicRadarChart from "@/components/BasicRadarChart.vue";
import NightingaleChart from "@/components/NightingaleChart.vue";
import StackedAreaChart from "@/components/StackedAreaChart.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册插件
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    nextTick(() => {
        gsap.to(".card1", {
            scale: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".card1",
                start: "top 15%",
                end: "bottom 15%",
                scrub: true,
            },
        });
        gsap.to(".card2", {
            scale: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".card2",
                start: "top 15%",
                end: "bottom 15%",
                scrub: true,
            },
        });
        gsap.to(".card3", {
            scale: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: ".card3",
                start: "top 15%",
                end: "bottom 15%",
                scrub: true,
            },
        });
    });
});
</script>

<template>
    <div
        class="d-flex flex-column justify-center align-center"
        style="padding: 15vh; gap: 1rem"
    >
        <v-card
            class="card1"
            rounded="xl"
            width="100%"
            style="
                position: sticky;
                top: 15vh;
                background: linear-gradient(
                    to bottom left,
                    white,
                    #fffde7,
                    #fff9c4
                );
            "
        >
            <BasicRadarChart
                :width="'700px'"
                :height="'600px'"
                :margin="'20px'"
            />
            <!-- <img src="../assets/1.jpg" width="100%" cover /> -->
        </v-card>
        <v-card
            class="card2"
            rounded="xl"
            width="100%"
            style="
                position: sticky;
                top: 15vh;
                background: linear-gradient(to bottom left, white, #bbdefb);
            "
        >
            <!-- <img src="../assets/1.jpg" width="100%" cover /> -->
            <StackedAreaChart
                :width="'700px'"
                :height="'600px'"
                :margin="'20px'"
            />
        </v-card>
        <v-card
            class="card3"
            rounded="xl"
            width="100%"
            style="
                position: sticky;
                top: 15vh;
                background: linear-gradient(to bottom left, white, #bbdefb);
            "
        >
            <!-- <img src="../assets/1.jpg" width="100%" cover /> -->
            <NightingaleChart
                :width="'700px'"
                :height="'600px'"
                :margin="'20px'"
            />
        </v-card>
    </div>
</template>
