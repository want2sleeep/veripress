<script setup>
import LatestNews from "@/components/LatestNews.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPartitionNews } from "@/stores/newsService";
import AppBar from '@/components/layout/AppBar.vue'

const route = useRoute();
const partitionDetail = ref(null);
const partitionList = ref([]);
const partitionId = route.query.partitionId;

onMounted(async () => {
    if (partitionId) {
        partitionDetail.value = await getPartitionNews(partitionId);
        partitionList.value = partitionDetail.value.data.list;
    }
});
</script>

<template>
    <v-layout
        class="rounded rounded-md border"
        style="background-color: #b3e5fc"
    >
        <v-app-bar style="background: linear-gradient(to left, #1565c0, #308ae3fb, #42a5f5);">
            <AppBar :system="true"/>
        </v-app-bar>

        <v-navigation-drawer width="10%" class="border-none">
        </v-navigation-drawer>

        <v-navigation-drawer location="right" width="10%" class="border-none">
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <v-container>
                <v-sheet width="100%" style="background-color: #b3e5fc">
                    <v-col>
                        <LatestNews :data="partitionList"></LatestNews> </v-col
                ></v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>
