<script setup>
import { ref } from "vue";
import HeartStarComment from "@/components/HeartStarComment.vue";
import RankShowInPassage from "@/components/RankShowInPassage.vue";
import AnotherAuther from "@/components/AnotherAuther.vue";
import Passage from "@/components/Passage.vue";
import Comment from "@/components/Comment.vue";
const logined = ref(false);

const login = () => {
    logined.value = true;
};
</script>

<template>
    <v-layout class="rounded rounded-md bg-blue-lighten-4">
        <v-app-bar color="blue-darken-2">
            <RouterLink to="/">
                <v-btn class="ml-2" color="yellow-lighten-2">
                    back to index
                </v-btn>
            </RouterLink>

            <v-spacer />

            <v-tabs bg-color="blue-darken-2" color="yellow-lighten-2">
                <v-tab
                    text="首页"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>

                <v-tab
                    text="热点"
                    style="font-size: 20px; font-weight: 600"
                    to="/hotshow"
                    color="yellow-lighten-2"
                ></v-tab>

                <v-tab
                    text="国际"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="国内"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="社会"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="经济"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="文娱"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="科技"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
                <v-tab
                    text="法治"
                    style="font-size: 20px; font-weight: 600"
                ></v-tab>
            </v-tabs>
            <v-spacer />

            <v-btn
                class="mr-5"
                color="yellow-lighten-2"
                variant="flat"
                @click="login"
                v-if="!logined"
            >
                登录
            </v-btn>
            <span class="mr-4" v-if="logined">
                <span class="mr-2"> John Doe </span>
                <v-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                </v-avatar>
            </span>
        </v-app-bar>

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
                    style="top: 390px; left: -600px; position: fixed"
                >
                    <HeartStarComment />
                </v-col>
            </v-sheet>
            <v-row>
                <v-sheet width="75%" color="transparent">
                    <Passage />
                    <Comment
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

                        <AnotherAuther
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
