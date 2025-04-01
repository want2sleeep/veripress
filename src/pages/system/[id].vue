<template>
    <div>
        当前 ID: {{ id }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: system
</route>
