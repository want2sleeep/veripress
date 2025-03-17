<template>
    <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        height="700"
        max-width="90vw"
        width="100%"
        rounded="xl"
        style="margin: 400px"
    >
        <v-card width="100%" rounded="xl">
            <v-toolbar color="yellow-lighten-2">
                <div
                    class="text-h4"
                    style="margin: auto; color: #1976d2; font-weight: 700"
                >
                    数据展示
                </div>
            </v-toolbar>

            <div class="d-flex flex-row">
                <v-tabs v-model="tab" direction="vertical">
                    <v-tab
                        text="新闻类别"
                        value="pie"
                        class="text-h7 text-blue-darken-2 font-weight-bold"
                    ></v-tab>
                    <v-tab
                        text="虚假趋势"
                        value="StackedAreaChart"
                        class="text-h7 text-blue-darken-2 font-weight-bold"
                    ></v-tab>
                    <v-tab
                        text="分析能力"
                        value="BasicRadarChart"
                        class="text-h7 text-blue-darken-2 font-weight-bold"
                    ></v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab" style="margin: auto">
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
