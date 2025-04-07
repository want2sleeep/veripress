<script setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import AppBar from '@/components/layout/AppBar.vue'

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
        text: '测试',
        route: '/test',
    },
]
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

        <v-navigation-drawer permanent>
            <v-list
                density="comfortable"
                nav
            >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.route"
                    active-color="primary"
                    exact
                    link
                >
                    <v-list-item-title
                        v-text="item.text"
                    />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-grey-lighten-3">
            <RouterView/>
        </v-main>

        <AppFooter/>
    </v-layout>
</template>

<style scoped>

</style>
