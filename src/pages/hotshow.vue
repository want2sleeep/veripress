<script setup>
import { ref } from "vue";
import RankShow from "@/components/RankShow.vue";
import HotCarousel from "@/components/HotCarousel.vue";
import HotNews from "@/components/HotNews.vue";
import HotWords from "@/components/HotWords.vue";
const logined = ref(false);

const login = () => {
    logined.value = true;
};
</script>

<template>
    <v-layout
        class="rounded rounded-md border"
        style="background-color: #b3e5fc"
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

        <v-navigation-drawer width="10%" class="border-none">
        </v-navigation-drawer>

        <v-navigation-drawer location="right" width="10%" class="border-none">
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <v-container>
                <v-sheet width="100%" style="background-color: #b3e5fc">
                    <v-layout class="rounded rounded-md" width="100%">
                        <v-sheet
                            class="d-flex align-start justify-center"
                            width="100%"
                            style="padding: 10px; background-color: #b3e5fc"
                            ><HotCarousel width="65%" />
                            <RankShow style="margin-top: 40px" width="30%" />
                        </v-sheet>
                    </v-layout>
                    <v-row>
                        <HotWords></HotWords>
                    </v-row>
                    <v-col> <HotNews></HotNews> </v-col
                ></v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>
<script setup></script>
<style scoped></style>
