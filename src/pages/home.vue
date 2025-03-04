<script setup>
import {ref} from 'vue'

const logined = ref(false)

const login = () => {
    logined.value = true
}
</script>

<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar title="Application bar">
            <v-spacer/>
            <v-btn
                class="mr-4"
                color="#FF403A"
                variant="flat"
                @click="login"
                v-if="!logined"
            >
                登录
            </v-btn>
            <span
                class="mr-4"
                v-if="logined"
            >
                <span class="mr-2">
                    John Doe
                </span>
                <v-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"/>
                </v-avatar>
            </span>
        </v-app-bar>

        <v-navigation-drawer>
            <v-list>
                <v-list-item title="Drawer left"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer location="right">
            <v-list>
                <v-list-item title="Drawer right"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            Main Content
        </v-main>
    </v-layout>
</template>

<style scoped>

</style>
