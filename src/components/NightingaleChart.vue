<template>
    <div class="echarts-box">
        <div
            id="nightingaleChart"
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
        let nightingaleChart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            nightingaleChart.dispose;
        });

        function initChart() {
            let chart = nightingaleChart.init(
                document.getElementById("nightingaleChart"),
                "purple-passion"
            );

            chart.setOption({
                legend: {
                    left: "center",
                    top: "bottom",
                    data: [
                        "rose1",
                        "rose2",
                        "rose3",
                        "rose4",
                        "rose5",
                        "rose6",
                        "rose7",
                        "rose8",
                    ],
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true },
                    },
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
                        name: "Nightingale Chart",
                        type: "pie",
                        radius: [50, 250],
                        center: ["50%", "50%"],
                        roseType: "area",
                        itemStyle: {
                            borderRadius: 8,
                        },
                        data: [
                            { value: 40, name: "rose 1" },
                            { value: 38, name: "rose 2" },
                            { value: 32, name: "rose 3" },
                            { value: 30, name: "rose 4" },
                            { value: 28, name: "rose 5" },
                            { value: 26, name: "rose 6" },
                            { value: 22, name: "rose 7" },
                            { value: 18, name: "rose 8" },
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
