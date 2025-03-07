<template>
    <div class="echarts-box">
        <div
            id="basicRadarChart"
            :style="{
                width: this.width,
                height: this.height,
                margin: this.margin,
            }"
        ></div>
    </div>
</template>
<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

export default {
    //name: "A",
    props: ["width", "height", "margin"],
    setup() {
        let basicRadarChart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            basicRadarChart.dispose;
        });

        function initChart() {
            let chart = basicRadarChart.init(
                document.getElementById("basicRadarChart"),
                "purple-passion"
            );

            chart.setOption({
                legend: {
                    data: ["Allocated Budget", "Actual Spending"],
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: "Sales", max: 6500 },
                        { name: "Administration", max: 16000 },
                        { name: "Information Technology", max: 30000 },
                        { name: "Customer Support", max: 38000 },
                        { name: "Development", max: 52000 },
                        { name: "Marketing", max: 25000 },
                    ],
                },
                color: [
                    "#02187b",
                    "#0246a7",
                    "#164de5",
                    "#1e89ef",
                    "#00B0FF",
                    "#64B5F6",
                    "#81D4FA",
                    "#84FFFF",
                ],
                series: [
                    {
                        name: "Budget vs spending",
                        type: "radar",
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: "Allocated Budget",
                            },
                            {
                                value: [
                                    5000, 14000, 28000, 26000, 42000, 21000,
                                ],
                                name: "Actual Spending",
                            },
                        ],
                    },
                ],
            });
            window.onresize = function () {
                chart.resize();
            };
        }

        return {
            initChart,
        };
    },
};
</script>
