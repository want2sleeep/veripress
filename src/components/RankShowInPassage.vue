<template>
    <v-card class="mx-auto" rounded="xl">
        <v-toolbar color="yellow-lighten-3">
            <template v-slot:prepend>
                <div
                    class="font-weight-bold text-h7 text-blue-darken-2"
                    style="margin: 10px"
                >
                    今日热点
                </div>
            </template>

            <template v-slot:append>
                <v-btn icon="mdi-autorenew" color="yellow-lighten-3"></v-btn>
                <!--  <v-btn icon="mdi-dots-vertical"></v-btn> -->
            </template>
        </v-toolbar>
        <v-card
            class="overflow-auto bg-blue-lighten-2"
            style="padding: 15px"
            rounded="0"
        >
            <v-timeline align="start" density="compact">
                <v-timeline-item
                    v-for="message in messages"
                    :key="message.rank"
                    dot-color="blue - darken - 1"
                    size="x-small"
                >
                    <template v-slot:icon>
                        <span>{{ message.rank }}</span>
                    </template>

                    <div
                        v-if="message.rank % 2 === 1"
                        style="
                            font-size: 12px;
                            font-weight: 600;
                            color: #fff176;
                        "
                    >
                        {{ message.title }}
                    </div>
                    <div
                        v-if="message.rank % 2 === 0"
                        style="font-size: 12px; font-weight: 600; color: white"
                    >
                        {{ message.title }}
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-card>
    </v-card>
</template>
<script setup>
const messages = [
    {
        title: "总书记三场团组活动，强调同一个关键词",
        intro: "2025年全国两会期间，习近平总书记参加团组审议讨论时，多次提到科技创新这一关键命题，强调“科技创新和产业创新，是发展新质生产力的基本路径”。",
        rank: "1",
        color: "blue-darken-1",
    },
    {
        title: "“新”潮澎湃赋能春耕春管 “科技春耕图”在广袤田野铺展",
        intro: "随着天气转暖，我国粮食主产区春耕春管正有序推进。各地涌现出一批新装备新技术，新质生产力赋能让粮食生产更智慧更高效。",
        rank: "2",
        color: "blue-lighten-2",
    },
    {
        title: "涉及家电、婴幼用品、化妆品等 618项国家标准发布",
        intro: "记者了解到，2024年以来，市场监管总局（国家标准委）围绕消费品重点领域发布国家标准618项，通过强化标准引领，深入推动消费品领域产品和服务质量提升，为高质量发展创造更为有利的消费环境。",
        rank: "3",
        color: "blue-darken-1",
    },
    {
        title: "多维数据梳理2024年中国自然资源“家底”",
        intro: "自然资源部3月14日发布《2024年中国自然资源公报》，公布了2024年我国自然资源整体情况。",
        rank: "4",
        color: "blue-lighten-2",
    },
];
</script>
