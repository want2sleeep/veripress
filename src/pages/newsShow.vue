<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import HeartStarComment from "@/components/HeartStarComment.vue";
import RankShowInPassage from "@/components/RankShowInPassage.vue";
import FackRate from "@/components/FackRate.vue";
import Passage from "@/components/Passage.vue";
import Comment from "@/components/Comment.vue";
import Article from "@/api/article.js";

const route = useRoute();
const article = ref(null);
const fakeRate = ref(0);
const passageId = route.query.passageId;

onMounted(async () => {
    if (passageId) {
        article.value = (await Article.getArticle(passageId)).data;
        fakeRate.value = article.value.data.fakeRate;
    }
});
</script>

<template>
    <v-layout class="rounded rounded-md bg-blue-lighten-4">
        <v-app-bar
            style="
                background: linear-gradient(
                    to left,
                    #1565c0,
                    #308ae3fb,
                    #42a5f5
                );
            "
        >
            <AppBar :system="true" />
        </v-app-bar>
        <v-main
            class="d-flex flex-column align-center justify-center bg-blue-lighten-4"
            style="min-height: 100vh; margin: 0 40px"
        >
            <v-row>
                <v-sheet
                    class="border-none bg-blue-lighten-4"
                    width="5vw"
                    style="
                        position: fixed;
                        left: 140px;
                        top: 0px;
                        height: 100vh;
                    "
                >
                    <v-col
                        class="d-flex align-center flex-column"
                        style="padding: 20px; margin-top: 405px"
                    >
                        <HeartStarComment :article="article" />
                    </v-col>
                </v-sheet>

                <v-sheet
                    width="60vw"
                    color="transparent"
                    style="margin-right: 80px"
                >
                    <Passage :news-detail="article" />
                    <Comment :passageId="passageId" />
                </v-sheet>

                <v-sheet
                    class="border-none bg-blue-lighten-4"
                    width="20vw"
                    style="
                        position: fixed;
                        right: 10px;
                        top: 0px;
                        height: 100vh;
                    "
                >
                    <v-col
                        class="d-flex align-center flex-column"
                        style="padding: 20px; margin-top: 5px"
                    >
                        <RankShowInPassage
                            width="100%"
                            style="margin-top: 80px"
                        />
                        <v-card
                            width="100%"
                            style="margin-top: 35px"
                            class="bg-yellow-lighten-2"
                            rounded="xl"
                        >
                            <FackRate
                                :passageId="passageId"
                                :fakeRate="fakeRate"
                            />

                            <v-card-actions style="padding: 30px">
                                <v-btn
                                    variant="flat"
                                    color="blue-darken-2"
                                    block
                                    class="text-h7"
                                    text="查看详情"
                                    :to="`/detail/${passageId}`"
                                    rounded=""
                                />
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-sheet>
            </v-row>
        </v-main>
    </v-layout>
</template>
