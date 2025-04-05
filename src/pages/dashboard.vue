<script setup>
import Banner from '@/components/dashboard/banner.vue'
import DataPanel from '@/components/dashboard/data-panel.vue'
</script>

<template>
    <v-container class="pa-2">
        <v-card flat>
            <Banner/>
            <DataPanel />
        </v-card>
    </v-container>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: system
</route>
