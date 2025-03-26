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

const hotNewsStore = useHotNewsStore();
const HNL = ref([]);
// 组件加载时获取数据
onMounted(async () => {
    await hotNewsStore.fetchHotNews();

    HNL.value = hotNewsStore.hotNewsList;
    const displayNews = computed(() => HNL.value.slice(0, 5));
    console.log(displayNews);
    /* HNL.value.forEach((item) => {
        //console.log(item);

    }); */
});
const displayNews = computed(() => HNL.value.slice(1, 5));
/* const slides = [
    {
        Image: "/src/assets/1.jpg",
        title: "总书记三场团组活动，强调同一个关键词",
        intro: "2025年全国两会期间，习近平总书记参加团组审议讨论时，多次提到科技创新这一关键命题，强调“科技创新和产业创新，是发展新质生产力的基本路径”。",
        rank: "1",
    },
    {
        Image: "/src/assets/2.jpg",
        title: "“新”潮澎湃赋能春耕春管 “科技春耕图”在广袤田野铺展",
        intro: "随着天气转暖，我国粮食主产区春耕春管正有序推进。各地涌现出一批新装备新技术，新质生产力赋能让粮食生产更智慧更高效。",
        rank: "2",
    },
    {
        Image: "/src/assets/3.jpg",
        title: "涉及家电、婴幼用品、化妆品等 618项国家标准发布",
        intro: "记者了解到，2024年以来，市场监管总局（国家标准委）围绕消费品重点领域发布国家标准618项，通过强化标准引领，深入推动消费品领域产品和服务质量提升，为高质量发展创造更为有利的消费环境。",
        rank: "3",
    },
]; */
</script>
