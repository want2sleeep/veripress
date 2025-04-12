<script setup>
import SideBarItems from '@/data/sideBarItem.js'
</script>

<template>
    <v-list density="comfortable" nav>
        <v-list-item
            class="text-blue-darken-2"
            v-for="(item, i) in SideBarItems"
            :key="i"
            :to="item.route"
            active-color="blue"
            exact
            link
            :title="item.text"
        >
            <template v-if="item.text === '新闻广场'" v-slot:append>
                <v-icon
                    class="text-blue-darken-2"
                    icon="mdi-chevron-right"
                ></v-icon>
            </template>
        </v-list-item>
    </v-list>
</template>

<style scoped>

</style>
