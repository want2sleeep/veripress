<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import Article from "@/api/article.js";
import FackRate from "@/components/FackRate.vue";

const route = useRoute();
const id = route.params.id;
const articleTitle = ref("");
const articleContent = ref([]);
const fakeRate = ref("");
const fakeReason = ref("");

const getData = async () => {
    const articleData = await Article.getArticle(id);
    articleTitle.value = computed(() => articleData.data.data.title);
    articleContent.value = computed(() => articleData.data.data.content);
    fakeRate.value = computed(() => articleData.data.data.fakeRate);
    const fakeReasonData = await Article.getArticleFakeRate(id);
    fakeReason.value = computed(() =>
        fakeReasonData.data.data.reason
            .split(" ")
            .filter((item, index) => index % 2 === 0 && index > 1)
    );
};

onMounted(async () => {
    await getData();
});
</script>

<template>
    <v-container class="pa-10 d-flex bg-blue-lighten-4">
        <v-card
            width="49.5%"
            flat
            color="blue-darken-2"
            rounded="xl"
            class="pa-6"
        >
            <v-card-title
                class="text-h4 text-yellow-lighten-2 font-weight-bold"
                style="margin-bottom: 20px"
            >
                原始文章
            </v-card-title>

            <v-card-text
                class="text-h5 text-center text-yellow-lighten-4 font-weight-bold"
            >
                {{ articleTitle.value }}
            </v-card-text>

            <v-card-text>
                <div
                    v-for="(item, index) in articleContent.value"
                    :key="index"
                    class="text-h6"
                    style="font-family: SiYuansONGtI"
                >
                    <div v-if="item.type === 1">
                        <v-img :src="item.value" max-height="400px" />
                    </div>
                    <div v-else class="ma-4">
                        {{
                            item.value.startsWith("YELLOW:")
                                ? item.value.slice(7)
                                : item.value
                        }}
                    </div>
                </div>
            </v-card-text>
        </v-card>

        <div style="width: 3%"></div>

        <v-card
            width="49.5%"
            flat
            rounded="xl"
            class="pa-6"
            color="yellow-lighten-4"
        >
            <v-card-title class="text-h4 text-blue-darken-2 font-weight-bold">
                分析报告
            </v-card-title>

            <v-card-item class="text-center">
                <FackRate :fakeRate="fakeRate.value" :passageId="id" />
            </v-card-item>

            <v-card-item>
                <v-timeline v-if="fakeRate.value" density="compact" side="end">
                    <v-timeline-item
                        v-for="(item, index) in fakeReason.value"
                        class="mr-12"
                        dot-color="blue-lighten-1"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span class="text-yellow-lighten-2">{{
                                index + 1
                            }}</span>
                        </template>
                        <v-card
                            variant="flat"
                            rounded="xl"
                            color="blue-lighten-1"
                        >
                            <v-card-text class="text-h6">
                                {{ item }}
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>

                <v-skeleton-loader
                    v-else
                    type="paragraph"
                    color="yellow-lighten-4"
                />
            </v-card-item>
        </v-card>
    </v-container>
</template>

<style scoped></style>

<route lang="yaml">
meta:
    layout: system
</route>
