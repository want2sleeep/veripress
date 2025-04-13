<template>
    <v-card width="100%" rounded="xl">
        <v-carousel
            height="600"
            show-arrows="hover"
            cycle
            hide-delimiter-background
        >
            <v-carousel-item
                class="justify-space-between align-center text-white"
                v-for="(slide, i) in slides"
                :key="i"
                :src="slide.Image"
                cover
            >
                <v-footer
                    style="background-color: rgba(0, 0, 0, 0.3); color: white"
                    class="d-flex justify-space-between"
                >
                    <v-card color="transparent" elevation="0">
                        <v-card-text
                            style="
                                font-size: 24px;
                                font-weight: 700;
                                font-family: SiYuanSongTi;
                            "
                            >{{ slides[i].title }}</v-card-text
                        >

                        <v-card-text>
                            <div
                                class="text-h6"
                                style="font-family: SiYuanSongTi"
                            >
                                {{ slides[i].intro }}
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-btn value="favorites" variant="text">
                        <v-icon>mdi-heart</v-icon>

                        <span>点赞</span>
                    </v-btn>

                    <v-btn value="recent" variant="text">
                        <v-icon>mdi-star</v-icon>

                        <span>收藏</span>
                    </v-btn>

                    <v-btn value="nearby" variant="text">
                        <v-icon>mdi-comment</v-icon>

                        <span>评论</span>
                    </v-btn>
                </v-footer>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>
<script setup>
const slides = [
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
];
</script>
