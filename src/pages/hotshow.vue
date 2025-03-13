<script setup>
import { ref } from "vue";
import RankShow from "@/components/RankShow.vue";
import HotCarousel from "@/components/HotCarousel.vue";

const logined = ref(false);

const login = () => {
    logined.value = true;
};
</script>

<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar>
            <RouterLink to="/">
                <v-btn class="ml-2"> back to index </v-btn>
            </RouterLink>
            <v-spacer />
            <v-btn
                class="mr-4"
                color="#FF403A"
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

        <!--  <v-navigation-drawer class="border-none">
            <v-list>
                <v-list-item title="Drawer left"></v-list-item>
            </v-list>
        </v-navigation-drawer>
 -->
        <v-main
            class="d-flex align-center"
            style="min-height: 300px; margin-left: 10px"
        >
            <HotCarousel />
        </v-main>

        <v-navigation-drawer class="border-none" location="right" width="30vw">
            <v-list>
                <v-list-item
                    class="d-flex align-center justify-center"
                    style="margin-top: 25px"
                >
                    <RankShow />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<style scoped></style>
