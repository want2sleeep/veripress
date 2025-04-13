<script setup>
import AppFooter from "@/components/layout/AppFooter.vue";
import AppBar from "@/components/layout/AppBar.vue";
import SideBar from "@/components/layout/SideBar.vue";
</script>

<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <v-app-bar
            class="border-b-sm bg-blue"
            name="app-bar"
            style="
                background: linear-gradient(90deg, #1976d2, #42a5f5, #90caf9);
            "
            flat
        >
            <AppBar :system="false" />
        </v-app-bar>

        <v-navigation-drawer
            width="170"
            permanent
            style="
                background: linear-gradient(
                    to bottom,
                    #fff59d,
                    #90caf9,
                    #42a5f5
                );
            "
        >
            <SideBar />
        </v-navigation-drawer>

        <v-main class="bg-blue-lighten-4">
            <RouterView />
        </v-main>

        <AppFooter />
    </v-layout>
</template>

<style scoped></style>
