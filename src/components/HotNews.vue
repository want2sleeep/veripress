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
                    >热点新闻</v-card-title
                >
            </v-card>
        </div>
        <v-layout>
            <v-main>
                <v-container>
                    <v-row dense>
                        <v-col
                            cols="12"
                            v-for="message in messages"
                            :key="message.rank"
                            style="margin: 5px"
                        >
                            <v-card
                                :color="message.color"
                                rounded="xl"
                                style="padding: 10px"
                            >
                                <div
                                    class="d-flex flex-no-wrap justify-space-between"
                                >
                                    <div>
                                        <v-card-title
                                            class="text-h5"
                                            style="color: white"
                                        >
                                            {{ message.title }}
                                        </v-card-title>

                                        <v-card-text
                                            style="
                                                color: rgba(255, 255, 255, 0.7);
                                            "
                                        >
                                            {{ message.intro }}</v-card-text
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

                                                <span>点赞</span>
                                            </v-btn>

                                            <v-btn
                                                class="ms-2"
                                                size="small"
                                                variant="text"
                                                color="yellow-lighten-2"
                                                value="recent"
                                            >
                                                <v-icon>mdi-star</v-icon>

                                                <span>收藏</span>
                                            </v-btn>

                                            <v-btn
                                                class="ms-2"
                                                size="small"
                                                variant="text"
                                                color="yellow-lighten-2"
                                                value="nearby"
                                            >
                                                <v-icon>mdi-comment</v-icon>

                                                <span>评论</span>
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                    <v-avatar
                                        class="ma-3"
                                        rounded="0"
                                        size="125"
                                    >
                                        <v-img :src="message.image"></v-img>
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
const messages = [
    {
        title: "总书记三场团组活动，强调同一个关键词",
        intro: "2025年全国两会期间，习近平总书记参加团组审议讨论时，多次提到科技创新这一关键命题，强调“科技创新和产业创新，是发展新质生产力的基本路径”。",
        rank: "1",
        color: "blue",
        image: "/src/assets/1.jpg",
    },
    {
        title: "“新”潮澎湃赋能春耕春管 “科技春耕图”在广袤田野铺展",
        intro: "随着天气转暖，我国粮食主产区春耕春管正有序推进。各地涌现出一批新装备新技术，新质生产力赋能让粮食生产更智慧更高效。",
        rank: "2",
        color: "blue-lighten-2",
        image: "/src/assets/2.jpg",
    },
    {
        title: "涉及家电、婴幼用品、化妆品等 618项国家标准发布",
        intro: "记者了解到，2024年以来，市场监管总局（国家标准委）围绕消费品重点领域发布国家标准618项，通过强化标准引领，深入推动消费品领域产品和服务质量提升，为高质量发展创造更为有利的消费环境。",
        rank: "3",
        color: "blue",
        image: "/src/assets/3.jpg",
    },
    {
        title: "多维数据梳理2024年中国自然资源“家底”",
        intro: "自然资源部3月14日发布《2024年中国自然资源公报》，公布了2024年我国自然资源整体情况。",
        rank: "4",
        color: "blue-lighten-2",
        image: "/src/assets/4.jpg",
    },
    {
        title: "田野奏响春耕春管“科技曲” 特色产业铺就振兴“致富路”",
        intro: "当前，全国春耕春管正在由南向北陆续展开。在粮食主产省安徽，当地通过智能装备、无人农场实现智慧春耕春管、降本增效。",
        rank: "5",
        color: "blue",
        image: "/src/assets/5.jpg",
    },
    {
        title: "@高校学生，如何提升就业能力？来了解“双千”计划",
        intro: "教育部日前印发通知，部署实施高校学生就业能力提升“双千”计划，推动全国范围内开设1000个“微专业”（或专业课程群）和1000个职业能力培训课程。",
        rank: "6",
        color: "blue-lighten-2",
        image: "/src/assets/6.jpg",
    },
    {
        title: "我国经济持续回升向好 服务消费热度指数上涨20.1%",
        intro: "今年以来，促消费政策组合拳有力撬动庞大内需潜能，消费多领域热点频出，展现出蓬勃向上的发展态势。",
        rank: "7",
        color: "blue",
        image: "/src/assets/7.jpg",
    },
    {
        title: "乡村地名喜提“电子身份证” 乡村治理数字底座不断夯实",
        intro: "民政部最新统计显示，自2023年在全国开展“乡村著名行动”以来，全国已累计规范命名67.4万条，方便了乡村百姓出行导航、生产生活，有效助力乡村振兴。",
        rank: "8",
        color: "blue-lighten-2",
        image: "/src/assets/8.jpg",
    },
    {
        title: "17个省份医保个人账户实现跨省“家庭共享”",
        intro: "记者从国家医保局获悉，医保钱包开通地区再扩容，全国已有17个省份146个统筹区开通医保钱包，职工医保个人账户能够进行跨省共济。",
        rank: "9",
        color: "blue",
        image: "/src/assets/9.jpg",
    },
    {
        title: "聚焦“共铸诚信 提振消费”2025年“3·15”晚会成功播出",
        intro: "中央广播电视总台第35届“3·15”晚会于3月15日20点在央视财经频道现场直播，央视财经新媒体、央视频、央广经济之声、央视网进行了同步播出。今年“3·15”晚会聚焦“共铸诚信 提振消费”主题，关注食品安全、公共安全、金融安全、数据安全等领域。",
        rank: "10",
        color: "blue-lighten-2",
        image: "/src/assets/10.jpg",
    },
];
</script>
