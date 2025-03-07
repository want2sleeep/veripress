<template>
    <div class="echarts-box">
        <div
            id="stackedAreaChart"
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
        let stackedAreaChart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            stackedAreaChart.dispose;
        });

        function initChart() {
            let chart = stackedAreaChart.init(
                document.getElementById("stackedAreaChart"),
                "purple-passion"
            );

            chart.setOption({
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        label: {
                            backgroundColor: "#6a7985",
                        },
                    },
                },
                legend: {
                    data: [
                        "Email",
                        "Union Ads",
                        "Video Ads",
                        "Direct",
                        "Search Engine",
                    ],
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                    },
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        boundaryGap: false,
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                    },
                ],
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
                        name: "Email",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series",
                        },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: "Union Ads",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series",
                        },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: "Video Ads",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series",
                        },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: "Direct",
                        type: "line",
                        stack: "Total",
                        areaStyle: {},
                        emphasis: {
                            focus: "series",
                        },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: "Search Engine",
                        type: "line",
                        stack: "Total",
                        label: {
                            show: true,
                            position: "top",
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: "series",
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
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
