<template>
    <v-card class="mx-auto" max-width="28vw">
        <v-card-text>
            <v-timeline align="start" density="compact">
                <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :dot-color="message.color"
                    size="small"
                >
                    <template v-slot:icon>
                        <span>{{ message.rank }}</span>
                    </template>
                    <v-alert :color="message.color">
                        <div class="font-weight-normal" color="blue">
                            <strong>{{ message.title }}</strong>
                        </div>
                    </v-alert>
                    <div class="mb-4">
                        <!-- <div>{{ message.intro }}</div> -->
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>

        <v-toolbar color="transparent">
            <template v-slot:prepend>
                <div class="font-weight-bold text-h6 mb-2">今日热点</div>
            </template>

            <template v-slot:append>
                <v-btn icon="mdi-autorenew"></v-btn>
                <!--  <v-btn icon="mdi-dots-vertical"></v-btn> -->
            </template>
        </v-toolbar>
    </v-card>
</template>
<script setup>
const messages = [
    {
        title: "总书记三场团组活动，强调同一个关键词",
        intro: "2025年全国两会期间，习近平总书记参加团组审议讨论时，多次提到科技创新这一关键命题，强调“科技创新和产业创新，是发展新质生产力的基本路径”。",
        rank: "1",
        color: "blue",
    },
    {
        title: "“新”潮澎湃赋能春耕春管 “科技春耕图”在广袤田野铺展",
        intro: "随着天气转暖，我国粮食主产区春耕春管正有序推进。各地涌现出一批新装备新技术，新质生产力赋能让粮食生产更智慧更高效。",
        rank: "2",
        color: "blue-lighten-4",
    },
    {
        title: "涉及家电、婴幼用品、化妆品等 618项国家标准发布",
        intro: "记者了解到，2024年以来，市场监管总局（国家标准委）围绕消费品重点领域发布国家标准618项，通过强化标准引领，深入推动消费品领域产品和服务质量提升，为高质量发展创造更为有利的消费环境。",
        rank: "3",
        color: "blue",
    },
];
</script>
