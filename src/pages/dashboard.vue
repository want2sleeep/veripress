<script setup>
import Banner from "@/components/dashboard/banner.vue";
import DataPanel from "@/components/dashboard/data-panel.vue";
</script>

<template>
    <v-container class="pa-2">
        <v-card flat rounded="xl" class="bg-blue-darken-2" height="60vh">
            <Banner />
            <DataPanel />
        </v-card>
    </v-container>
</template>

<style scoped></style>

<route lang="yaml">
meta:
    layout: system
    requiresLogin: true,
</route>
