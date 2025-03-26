<template>
    <v-card
        class="mx-auto"
        width="99%"
        rounded="xl"
        color="blue-darken-2"
        style="margin-top: 40px; padding: 10px"
    >
        <div
            class="d-flex justify-start"
            style="margin: 20px; width: 100%; margin: 0"
        >
            <v-card variant="flat" color="transparent" style="margin: 10px">
                <v-card-title
                    class="text-h4 font-weight-black"
                    style="color: #fff59d"
                    >最新新闻</v-card-title
                >
            </v-card>
        </div>
        <v-layout>
            <v-main>
                <v-container>
                    <v-row dense>
                        <v-col
                            cols="12"
                            v-for="(item, index) in HNL"
                            :key="index"
                            style="margin: 5px"
                        >
                            <v-card
                                :color="
                                    index % 2 === 1 ? 'blue-lighten-2' : 'blue'
                                "
                                rounded="xl"
                                style="padding: 10px"
                                @click="goToNewsDetail(item.passageId)"
                            >
                                <div
                                    class="d-flex flex-no-wrap justify-space-between"
                                >
                                    <div>
                                        <v-card-title
                                            class="text-h5"
                                            style="color: white"
                                        >
                                            {{ item.title }}
                                        </v-card-title>

                                        <v-card-text
                                            style="
                                                color: rgba(255, 255, 255, 0.7);
                                            "
                                        >
                                            {{ item.createTime }}</v-card-text
                                        >

                                        <v-card-actions>
                                            <v-btn
                                                class="ms-2"
                                                size="small"
                                                variant="text"
                                                color="yellow-lighten-2"
                                                value="favorites"
                                            >
                                                <v-icon>mdi-heart</v-icon>

                                                <span>{{ item.likes }}</span>
                                            </v-btn>

                                            <v-btn
                                                class="ms-2"
                                                size="small"
                                                variant="text"
                                                color="yellow-lighten-2"
                                                value="recent"
                                            >
                                                <v-icon>mdi-star</v-icon>

                                                <span>{{
                                                    item.collection
                                                }}</span>
                                            </v-btn>

                                            <v-btn
                                                class="ms-2"
                                                size="small"
                                                variant="text"
                                                color="yellow-lighten-2"
                                                value="nearby"
                                            >
                                                <v-icon>mdi-comment</v-icon>

                                                <span>{{
                                                    item.commentCounts
                                                }}</span>
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                    <v-avatar
                                        class="ma-3"
                                        rounded="0"
                                        size="125"
                                    >
                                        <v-img :src="item.coverImage"></v-img>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useHotNewsStore } from "@/stores/newsService";
import { fetchNewsById } from "@/stores/newsService";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const hotNewsStore = useHotNewsStore();
const HNL = ref([]);
// 组件加载时获取数据
onMounted(async () => {
    await hotNewsStore.fetchHotNews();

    HNL.value = hotNewsStore.hotNewsList;
    HNL.value.forEach((item) => {
        //console.log(item);
    });
});

/* 跳转到新闻详情页 */
const goToNewsDetail = (passageId) => {
    router.push({ path: "/newsShow", query: { passageId } });
};
</script>
