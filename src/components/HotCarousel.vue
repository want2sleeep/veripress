<template>
    <v-card class="mx-2 mt-10" width="100%" rounded="xl">
        <v-carousel
            v-if="displayNews.length > 0"
            show-arrows="hover"
            cycle
            hide-delimiter-background
        >
            <v-carousel-item
                class="justify-space-between align-center text-white"
                v-for="(item, index) in displayNews"
                :key="index"
                :src="item.coverImage"
                cover
                @click="goToNewsDetail(item.passageId)"
            >
                <v-row>
                    <v-bottom-navigation
                        style="
                            background-color: rgba(0, 0, 0, 0.3);
                            color: white;
                        "
                        height="20%"
                        width="100%"
                        class="d-flex justify-space-between"
                    >
                        <v-card color="transparent" width="100%">
                            <v-card-text
                                style="font-size: 22px; font-weight: 700"
                                >{{ item.title }}</v-card-text
                            >

                            <v-card-text>
                                <div>{{ item.createTime }}</div>
                            </v-card-text>
                        </v-card>
                        <v-btn value="favorites">
                            <v-icon>mdi-heart</v-icon>

                            <span>{{ item.likes }}</span>
                        </v-btn>

                        <v-btn value="recent">
                            <v-icon>mdi-star</v-icon>

                            <span>{{ item.collection }}</span>
                        </v-btn>

                        <v-btn value="nearby">
                            <v-icon>mdi-comment</v-icon>

                            <span>{{ item.commentCounts }}</span>
                        </v-btn>
                    </v-bottom-navigation></v-row
                >
            </v-carousel-item>
        </v-carousel>
        <v-img v-else src="../assets/image.png" width="100%" cover />
    </v-card>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useHotNewsStore } from "@/stores/newsService";
import { useRouter } from "vue-router";
const router = useRouter();
const hotNewsStore = useHotNewsStore();
const HNL = ref([]);

const displayNews = computed(() => HNL.value.slice(0, 5));
// 组件加载时获取数据
onMounted(async () => {
    await hotNewsStore.fetchHotNews();

    HNL.value = hotNewsStore.hotNewsList;

    //console.log(displayNews.value);
});

/* 跳转到新闻详情页 */
const goToNewsDetail = (passageId) => {
    router.push({ path: "/newsShow", query: { passageId } });
};
</script>
