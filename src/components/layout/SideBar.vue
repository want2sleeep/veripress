<script setup>
const items = [
    {
        text: '仪表盘',
        route: '/dashboard',
    },
    {
        text: '上传文章',
        route: '/upload',
    },
    {
        text: '历史记录',
        route: '/history',
    },
    {
        text: '个人中心',
        route: '/user',
    },
]
</script>

<template>
    <v-list density="comfortable" nav>
        <v-list-item
            class="text-blue-darken-2 text-center"
            v-for="(item, i) in items"
            :key="i"
            :to="item.route"
            active-color="primary"
            exact
            link
            :title="item.text"
        >
        </v-list-item>
    </v-list>
</template>

<style scoped>

</style>
