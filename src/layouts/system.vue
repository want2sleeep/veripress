<script setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import AppBar from '@/components/layout/AppBar.vue'
import SideBar from '@/components/layout/SideBar.vue'

</script>

<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <v-app-bar
            class="border-b-sm"
            name="app-bar"
            flat
        >
            <AppBar/>
        </v-app-bar>

        <v-navigation-drawer permanent class="bg-yellow-lighten-4">
            <SideBar />
        </v-navigation-drawer>

        <v-main class="bg-blue-lighten-4">
            <RouterView/>
        </v-main>

        <AppFooter/>
    </v-layout>
</template>

<style scoped>

</style>
