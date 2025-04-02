<script setup>
import AppFooter from '@/components/AppFooter.vue'

const items = [
    {
        text: '仪表盘',
        route: '/',
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
            <div class="ml-8">
                Veripress
            </div>
            <v-spacer/>
            <RouterLink to="/login">
                <v-btn
                    class="mr-8"
                    color="primary"
                    variant="elevated"
                    text="登录"
                />
            </RouterLink>
        </v-app-bar>

        <v-navigation-drawer
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

        <v-main class="bg-grey-lighten-3">
            <RouterView/>
        </v-main>

        <AppFooter/>
    </v-layout>
</template>

<style scoped>

</style>
