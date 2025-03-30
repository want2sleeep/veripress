<script setup>
import RankShow from "@/components/RankShow.vue";
import HotCarousel from "@/components/HotCarousel.vue";
import LatestNews from "@/components/LatestNews.vue";
import NavBar from "@/components/NavBar.vue";
import { useHotNewsStore } from "@/stores/newsService";
const hotNewsStore = useHotNewsStore();
const HNL = ref([]);
// 组件加载时获取数据
onMounted(async () => {
    await hotNewsStore.fetchHotNews();

    HNL.value = hotNewsStore.hotNewsList;
});
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
                    <v-layout class="rounded rounded-md" width="100%">
                        <v-sheet
                            class="d-flex align-start justify-center"
                            width="100%"
                            style="padding: 10px; background-color: #b3e5fc"
                            ><HotCarousel width="65%" />
                            <RankShow style="margin-top: 40px" width="30%" />
                        </v-sheet>
                    </v-layout>
                    <!--  <v-row>
                        <HotWords></HotWords>
                    </v-row> -->
                    <v-col> <LatestNews :data="HNL"></LatestNews></v-col
                ></v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>
