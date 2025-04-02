<template>
    <v-card class="mx-auto" rounded="xl">
        <v-toolbar color="yellow-lighten-2">
            <template v-slot:prepend>
                <div
                    class="font-weight-bold text-h6 mb-2"
                    style="margin: 15px; color: #1976d2"
                >
                    今日热点
                </div>
            </template>

            <template v-slot:append>
                <v-btn icon="mdi-autorenew  " color="yellow-lighten-3"></v-btn>
                <!--  <v-btn icon="mdi-dots-vertical"></v-btn> -->
            </template>
        </v-toolbar>
        <v-card
            class="overflow-auto"
            height="438px"
            style="padding: 20px"
            color=""
        >
            <v-timeline align="start" density="compact">
                <v-timeline-item
                    v-for="(item, index) in HNL"
                    :key="index"
                    :dot-color="
                        index % 2 === 1 ? 'blue-darken-2' : 'blue-lighten-2'
                    "
                    size="small"
                >
                    <template v-slot:icon>
                        <span style="color: #fffde7">{{ index + 1 }}</span>
                    </template>
                    <v-alert
                        :color="
                            index % 2 === 1 ? 'blue-darken-2' : 'blue-lighten-2'
                        "
                        style="padding: 5px"
                        class="cursor-pointer"
                        @click="goToNewsDetail(item.passageId)"
                    >
                        <div class="text-subtitle-2" style="color: #fffde7">
                            <strong>{{ item.title }}</strong>
                        </div>
                    </v-alert>
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
    HNL.value.forEach((item) => {
        //console.log(item);
    });
});
/* 跳转到新闻详情页 */
const goToNewsDetail = (passageId) => {
    router.push({ path: "/newsShow", query: { passageId } }).then(() => {
        //window.location.reload(); // 🚀 强制刷新页面
    });
    //console.log(passageId);
};
</script>
