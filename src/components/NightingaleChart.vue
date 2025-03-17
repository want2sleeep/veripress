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
                        "经济",
                        "社会",
                        "科技",
                        "文娱",
                        "法治",
                        "国际",
                        "军事",
                        "历史",
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
                            { value: 40, name: "经济" },
                            { value: 38, name: "社会" },
                            { value: 32, name: "科技" },
                            { value: 30, name: "文娱" },
                            { value: 28, name: "法治" },
                            { value: 26, name: "国际" },
                            { value: 22, name: "军事" },
                            { value: 18, name: "历史" },
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
