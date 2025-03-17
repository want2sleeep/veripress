<template>
    <v-sheet
        class="mx-auto"
        elevation="2"
        rounded="xl"
        style="margin-top: 40px"
        width="95%"
    >
        <v-sheet
            class="pa-3 text-left"
            border=" b-lg "
            rounded="t-xl"
            color="yellow-lighten-2"
        >
            <v-text
                class="text-h4 font-weight-black"
                style="margin: 15px; color: #0288d1"
                >热点关键词</v-text
            >
        </v-sheet>

        <div class="pa-4">
            <v-chip-group selected-class="text-blue" column>
                <v-chip v-for="tag in tags" :key="tag" color="blue">
                    {{ tag }}
                </v-chip>
            </v-chip-group>
        </div>
    </v-sheet>
</template>
<script setup>
const tags = [
    "习近平",
    "自然资源",
    "乡村振兴",
    "”双千“计划",
    "医保",
    "3.15",
    "毛利兰",
    "科技",
    "经济",
];
</script>
