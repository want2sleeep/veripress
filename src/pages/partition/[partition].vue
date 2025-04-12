<script setup>
import {useRoute} from 'vue-router'
import Partition from '@/data/partition.js'
import Article from '@/api/article.js'
import LatestNews from '@/components/LatestNews.vue'
import AppBar from '@/components/layout/AppBar.vue'

const route = useRoute()
const partitionArticles = ref([])

const fetchData = async (partition) => {
    const partitionId = Partition.find(item => item.path === partition).value
    const res = await Article.getPartitionsArticles(partitionId)
    partitionArticles.value = res.data.data.list
}

onMounted(() => fetchData(route.params.partition))

watch(
    () => route.params.partition,
    (newPartition) => fetchData(newPartition),
)
</script>

<template>
    <v-layout
        class="rounded rounded-md border"
        style="background-color: #b3e5fc"
    >

        <v-app-bar style="background: linear-gradient(to left, #1565c0, #308ae3fb, #42a5f5);">
            <AppBar :system="true"/>
        </v-app-bar>

        <v-navigation-drawer width="10%" class="border-none"/>

        <v-navigation-drawer location="right" width="10%" class="border-none"/>

        <v-main class="d-flex align-center justify-center">
            <v-container>
                <v-sheet width="100%" style="background-color: #b3e5fc">
                    <v-col>
                        <LatestNews :data="partitionArticles"></LatestNews>
                    </v-col>
                </v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style scoped>

</style>
