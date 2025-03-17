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
                    data: ["本模型", "市面主要模型"],
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: "覆盖率", max: 6500 },
                        { name: "准确率", max: 16000 },
                        { name: "速率", max: 30000 },
                        { name: "覆盖范围", max: 38000 },
                        { name: "长文本识别能力", max: 52000 },
                        { name: "图像识别能力", max: 25000 },
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
                        name: "本模型 vs 市面主要模型",
                        type: "radar",
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: "本模型",
                            },
                            {
                                value: [
                                    5000, 14000, 28000, 26000, 42000, 21000,
                                ],
                                name: "市面主要模型",
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
