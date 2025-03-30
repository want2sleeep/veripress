<script setup>
import { RouterLink } from "vue-router";
import dataShow from "./dataShow.vue";
import UploadArticle from '@/pages/upload.vue'
</script>

<template>
    <v-container class="text-center">
        <v-row justify="center">
            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/login">
                    <v-btn rounded="xs" size="x-large" block>login</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/signup">
                    <v-btn rounded="xs" size="x-large" block>signup</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/aaaa">
                    <v-btn rounded="xs" size="x-large" block>aaaa</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/test">
                    <v-btn rounded="xs" size="x-large" block>test</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/uploadArticle">
                    <v-btn rounded="xs" size="x-large" block
                        >upload-article</v-btn
                    >
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/system">
                    <v-btn rounded="xs" size="x-large" block>v8oiqhq</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/home">
                    <v-btn rounded="xs" size="x-large" block>home</v-btn>
                </RouterLink>
            </v-col>
            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/hotshow">
                    <v-btn rounded="xs" size="x-large" block>hotshow</v-btn>
                </RouterLink>
            </v-col>
            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/newsShow">
                    <v-btn rounded="xs" size="x-large" block>newsShow</v-btn>
                </RouterLink>
            </v-col>
            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/partitionNews">
                    <v-btn rounded="xs" size="x-large" block
                        >partitionNews</v-btn
                    >
                </RouterLink>
            </v-col>
        </v-row>
    </v-container>
</template>
