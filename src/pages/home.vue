<script setup>
import {ref} from 'vue'
import Carousel from '@/components/Carousel.vue'
import WelcomeLogin from '@/components/WelcomeLogin.vue'

const logined = ref(false)
const overlay = ref(false)

const login = () => {
    logined.value = true
    setTimeout(() => {
        logined.value = false
        overlay.value = false
    }, 20000)
    overlay.value = !overlay.value
}
</script>

<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar class="position-fixed">
            <RouterLink to="/">
                <v-btn class="ml-2">
                    back to index
                </v-btn>
            </RouterLink>
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

        <v-navigation-drawer class="border-none">
            <v-list>
                <v-list-item title="Drawer left"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px; height: 2000px">
            <Carousel/>
        </v-main>

        <v-navigation-drawer class="border-none" location="right">
            <v-list>
                <v-list-item title="Drawer right"></v-list-item>
            </v-list>
        </v-navigation-drawer>

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

<style scoped>

</style>
