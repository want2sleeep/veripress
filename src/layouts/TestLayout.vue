<script setup>
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
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

    <v-main>
        <router-view/>
    </v-main>

    <AppFooter/>


</template>

<style scoped>
</style>
