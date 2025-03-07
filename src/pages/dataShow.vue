<template>
    <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        elevation="4"
        height="700"
        max-width="90vw"
        width="100%"
        rounded
    >
        <v-card width>
            <v-toolbar color="blue" title="数据展示"> </v-toolbar>

            <div class="d-flex flex-row">
                <v-tabs v-model="tab" color="primary" direction="vertical">
                    <v-tab text="南丁格尔玫瑰图" value="pie"></v-tab>
                    <v-tab text="堆叠面积图" value="StackedAreaChart"></v-tab>
                    <v-tab text="雷达图" value="BasicRadarChart"></v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="pie">
                        <NightingaleChart
                            :width="'700px'"
                            :height="'600px'"
                            :margin="'20px'"
                        />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="StackedAreaChart">
                        <StackedAreaChart
                            :width="'700px'"
                            :height="'600px'"
                            :margin="'20px'"
                        />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="BasicRadarChart">
                        <BasicRadarChart
                            :width="'700px'"
                            :height="'600px'"
                            :margin="'20px'"
                        />
                    </v-tabs-window-item>
                </v-tabs-window>
            </div>
        </v-card>
    </v-sheet>
</template>
<script setup>
import { ref } from "vue";
import NightingaleChart from "@/components/NightingaleChart.vue";
import StackedAreaChart from "@/components/StackedAreaChart.vue";
import BasicRadarChart from "@/components/BasicRadarChart.vue";
const tab = ref("option-1");
</script>
<style scoped>
.v-sheet {
    margin-top: 20px;
    padding: 0 !important;
}
</style>
