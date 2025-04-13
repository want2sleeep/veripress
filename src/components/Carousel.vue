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
        title: "时政微观察丨亲望亲好，邻望邻好",
        intro: "亲望亲好，邻望邻好。中国与越南、马来西亚、柬埔寨同为亚洲近邻、发展中国家，友好情谊源远流长，在漫长的岁月中守望相助，在奔赴现代化的道路上并肩前行。",
        rank: "1",
    },
    {
        Image: "/src/assets/2.jpg",
        title: "离境退税“即买即退”给“China Travel”再添新动力",
        intro: "4月8日起，离境退税“即买即退”服务在全国推行。该政策将退税环节前置，为境外旅客打造更便捷、友好的消费环境，激发消费活力，促进国内国际双循环。",
        rank: "2",
    },
    {
        Image: "/src/assets/3.jpg",
        title: "解锁2025年消博会新亮点",
        intro: "第五届中国国际消费品博览会4月13日在海口正式开馆。目前，各项准备工作已经基本就绪。本届消博会共有来自71个国家和地区的1700余家消费企业、4100余个消费品牌参展。",
        rank: "3",
    },
];
</script>
