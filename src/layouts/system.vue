<script setup>
import AppFooter from '@/components/AppFooter.vue'

const items = [
    {
        text: '仪表盘',
        route: '/dashboard'
    },
    {
        text: '上传文章',
        route: '/upload'
    },
    {
        text: '历史记录',
        route: '/history'
    },
    {
        text: '测试',
        route: '/test'
    },
]
</script>

<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <v-app-bar color="surface-variant" name="app-bar">

        </v-app-bar>

        <v-navigation-drawer
            color="surface-light"
            permanent
        >
            <v-list
                density="comfortable"
                nav
            >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="primary"
                    :to="item.route"
                >
                    <v-list-item-title
                        v-text="item.text"
                    />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <RouterView />
        </v-main>

        <AppFooter/>
    </v-layout>
</template>

<style scoped>

</style>
