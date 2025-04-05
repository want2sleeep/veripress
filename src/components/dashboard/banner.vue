<script setup>
import useUserStore from '@/stores/user.js'

const userStore = useUserStore()
const userInfo = computed(() => {
    return {
        name: userStore.user.name,
    }
})
</script>

<template>
    <v-col class="text-h5" cols="8">
        欢迎回来，{{ userInfo.name }} ！
    </v-col>
    <v-divider/>
</template>

<style scoped>

</style>
