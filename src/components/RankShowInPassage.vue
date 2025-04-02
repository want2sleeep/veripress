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
                    v-for="(item, index) in HNL"
                    :key="index"
                    dot-color="blue - darken - 1"
                    size="x-small"
                >
                    <template v-slot:icon>
                        <span style="font-size: 14px">{{ index + 1 }}</span>
                    </template>

                    <div
                        v-if="index % 2 === 1"
                        style="
                            font-size: 12px;
                            font-weight: 600;
                            height: 10px;
                            color: #fff176;
                        "
                        class="cursor-pointer"
                        @click="goToNewsDetail(item.passageId)"
                    >
                        {{ item.title }}
                    </div>
                    <div
                        v-if="index % 2 === 0"
                        style="
                            font-size: 12px;
                            font-weight: 600;
                            color: white;
                            height: 10px;
                        "
                        class="cursor-pointer"
                        @click="goToNewsDetail(item.passageId)"
                    >
                        {{ item.title }}
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-card>
    </v-card>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useHotNewsStore } from "@/stores/newsService";

import { useRouter } from "vue-router";
const router = useRouter();

const hotNewsStore = useHotNewsStore();
const HNL = ref([]);
// 组件加载时获取数据
onMounted(async () => {
    await hotNewsStore.fetchHotNews();

    HNL.value = hotNewsStore.hotNewsList;
    HNL.value = HNL.value.slice(0, 5);
});
/* 跳转到新闻详情页 */
const goToNewsDetail = (passageId) => {
    router.push({ path: "/newsShow", query: { passageId } }).then(() => {
        window.location.reload(); // 🚀 强制刷新页面
    });
    //console.log(passageId);
};
</script>
