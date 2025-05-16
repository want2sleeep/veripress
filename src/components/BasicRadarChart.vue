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
                title: {
                    text: "模型性能雷达图",
                },
                legend: {
                    data: ["本模型", "市面主要模型"],
                },
                radar: {
                    name: {
                        textStyle: {
                            fontSize: 16, // 设置字体大小为16px
                            fontWeight: "bold", // 可选，加粗
                            color: "#2b2b2b", // 可选，颜色更清晰
                        },
                    },
                    indicator: [
                        { name: "纯文本准确率", max: 100 },
                        { name: "图文检测准确率", max: 100 },
                        { name: "AI人脸识别准确率", max: 100 },
                        { name: "平均响应速度（反向）", max: 1 },
                        { name: "最大并发能力", max: 300 },
                    ],
                },
                color: ["#1E88E5", "#FFC107"],
                series: [
                    {
                        name: "本模型 vs 市面主要模型",
                        type: "radar",
                        data: [
                            {
                                value: [92.3, 89.7, 96.1, 0.91, 140],
                                name: "本模型",
                            },
                            {
                                value: [82.0, 75.0, 85.0, 0.55, 90],
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
