<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {fetchNewsById} from '@/stores/newsService'
import NavBar from '@/components/NavBar.vue'
import HeartStarComment from '@/components/HeartStarComment.vue'
import RankShowInPassage from '@/components/RankShowInPassage.vue'
import FackRate from '@/components/FackRate.vue'
import Passage from '@/components/Passage.vue'
import Comment from '@/components/Comment.vue'

const route = useRoute()
const newsDetail = ref(null)
//获取文章id
const passageId = route.query.passageId
//获取文章
onMounted(async () => {
    if (passageId) {
        newsDetail.value = await fetchNewsById(passageId)
        //onsole.log(newsDetail.value);
    }
})
</script>

<template>
    <v-layout class="rounded rounded-md bg-blue-lighten-4">
        <NavBar></NavBar>
        <v-main
            class="d-flex flex-column align-center justify-center bg-blue-lighten-4"
            style="min-height: 100vh; margin: 0 40px"
        >
            <v-row
            >
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
                        <HeartStarComment :newsDetail="newsDetail"/>
                    </v-col>
                </v-sheet>
                <v-sheet
                    width="60vw"
                    color="transparent"
                    style="margin-right: 80px"
                >
                    <Passage :newsDetail="newsDetail"/>
                    <Comment :passageId="passageId"/>
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

                        <FackRate
                            width="100%"
                            style="margin-top: 35px"
                            :passageId="passageId"
                        />
                    </v-col>
                </v-sheet>
            </v-row>
        </v-main>
    </v-layout>

    <v-overlay
        class="align-center justify-center"
        :model-value="overlay"
        height="30%"
        width="30%"
    >
        <WelcomeLogin/>
    </v-overlay>
</template>
