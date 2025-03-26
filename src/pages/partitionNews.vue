<script setup>
import RankShow from "@/components/RankShow.vue";
import HotCarousel from "@/components/HotCarousel.vue";
import HotNews from "@/components/LatestNews.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <v-layout
        class="rounded rounded-md border"
        style="background-color: #b3e5fc"
    >
        <NavBar></NavBar>

        <v-navigation-drawer width="10%" class="border-none">
        </v-navigation-drawer>

        <v-navigation-drawer location="right" width="10%" class="border-none">
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <v-container>
                <v-sheet width="100%" style="background-color: #b3e5fc">
                    <v-col> <HotNews></HotNews> </v-col
                ></v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>
