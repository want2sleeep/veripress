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
                >
                    最新新闻
                </v-card-title>
            </v-card>
        </div>
        <v-layout>
            <v-main>
                <v-container>
                    <v-row dense>
                        <v-col
                            cols="12"
                            v-for="(item, index) in NEWS"
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
                                            style="
                                                color: white;
                                                font-family: SiYuanSongTi;
                                            "
                                        >
                                            {{ item.title }}
                                        </v-card-title>

                                        <v-card-text
                                            style="
                                                color: rgba(255, 255, 255, 0.7);
                                            "
                                        >
                                            {{ item.createTime }}
                                        </v-card-text>

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

                                                <span>
                                                    {{ item.collection }}
                                                </span>
                                            </v-btn>

                                            <v-btn
                                                class="ms-2"
                                                size="small"
                                                variant="text"
                                                color="yellow-lighten-2"
                                                value="nearby"
                                            >
                                                <v-icon>mdi-comment</v-icon>

                                                <span>
                                                    {{ item.commentCounts }}
                                                </span>
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
import { defineProps } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
    data: [Array, Object],
});

const NEWS = ref([]);

watch(
    () => props.data,
    (newData) => {
        if (Array.isArray(newData)) {
            NEWS.value = newData;
        } else if (
            newData &&
            newData.data &&
            Array.isArray(newData.data.list)
        ) {
            NEWS.value = newData.data.list;
        }
    },
    { immediate: true }
);

/* 跳转到新闻详情页 */
const goToNewsDetail = (passageId) => {
    router.push({ path: "/newsShow", query: { passageId } });
};
</script>
