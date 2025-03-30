<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchNewsById } from "@/stores/newsService";
import NavBar from "@/components/NavBar.vue";
import HeartStarComment from "@/components/HeartStarComment.vue";
import RankShowInPassage from "@/components/RankShowInPassage.vue";
import FackRate from "@/components/FackRate.vue";
import Passage from "@/components/Passage.vue";
import Comment from "@/components/Comment.vue";
const route = useRoute();
const newsDetail = ref(null);
//获取文章id
const passageId = route.query.passageId;
//获取文章
onMounted(async () => {
    if (passageId) {
        newsDetail.value = await fetchNewsById(passageId);
        //console.log(newsDetail.value)
    }
});
</script>

<template>
    <v-layout class="rounded rounded-md bg-blue-lighten-4">
        <NavBar></NavBar>
        <v-main
            class="d-flex flex-column align-center justify-center"
            style="min-height: 300px; margin: 0 40px"
        >
            <v-sheet
                class="border-none bg-blue-lighten-4"
                style="position: relative"
            >
                <v-col
                    width="40px"
                    style="top: 390px; left: -610px; position: fixed"
                >
                    <HeartStarComment
                        :passageId="passageId"
                        :authorId="authorId"
                    />
                </v-col>
            </v-sheet>
            <v-row>
                <v-sheet width="72%" color="transparent">
                    <Passage :newsDetail="newsDetail" />
                    <Comment :passageId="passageId"
                /></v-sheet>
                <v-sheet class="border-none bg-blue-lighten-4" width="25%"
                    ><v-col
                        class="d-flex align-center flex-column"
                        style="padding: 20px; margin-top: 5px"
                    >
                        <RankShowInPassage
                            style="position: fixed; margin-top: 280px"
                            width="20%"
                        />

                        <FackRate
                            style="position: fixed; margin-top: 5px"
                            width="20%"
                        /> </v-col></v-sheet
            ></v-row>
        </v-main>
    </v-layout>

    <v-overlay
        class="align-center justify-center"
        :model-value="overlay"
        height="30%"
        width="30%"
    >
        <WelcomeLogin />
    </v-overlay>
</template>
