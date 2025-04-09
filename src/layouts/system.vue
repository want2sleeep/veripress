<script setup>
//import AppFooter from "@/components/AppFooter.vue";
import NavBar from "@/components/NavBar.vue";
const items = [
    {
        text: "仪表盘",
        route: "/detail",
    },
    {
        text: "上传文章",
        route: "/upload",
    },
    {
        text: "历史记录",
        route: "/history",
    },
    {
        text: "测试",
        route: "/test",
    },
];
</script>

<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <NavBar></NavBar>

        <v-navigation-drawer
            permanent
            style="
                background: linear-gradient(
                    to bottom,

                    #fff59d,
                    #90caf9,
                    #42a5f5
                );
            "
        >
            <v-list density="comfortable" nav>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="blue"
                    :to="item.route"
                >
                    <v-list-item-text
                        class="text-h6 font-weight-bold text-blue-darken-2 text-center"
                        v-text="item.text"
                    />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-blue-lighten-4">
            <RouterView />
        </v-main>

        <!--     <AppFooter /> -->
    </v-layout>
</template>

<style scoped></style>
