<script setup>
import useUserStore from "@/stores/user.js";

const userStore = useUserStore();
const userInfo = computed(() => {
    return {
        name: userStore.user.name,
    };
});
</script>

<template>
    <div
        v-if="userInfo.name"
        class="text-h4 font-weight-bold text-yellow-lighten-2"
        style="height: 10vh; text-align: center; line-height: 10vh"
    >
        欢迎回来，{{ userInfo.name }} ！
    </div>
    <div
        v-else
        class="text-h4 font-weight-bold text-yellow-lighten-2"
        style="height: 10vh; text-align: center; line-height: 10vh"
    >
        欢迎来到慧析新闻
    </div>
    <v-divider />
</template>

<style scoped></style>
