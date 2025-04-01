<script setup>
const a = '分析报告： 1. 虚假信息识别：文章声称格兰维亚秘密实验室成功研发具有时间操控能力的量子计算机系统"时空枢纽-1号"。目前科学界公认时间旅行在理论上存在重大障碍，特别是违背因果律的问题尚未解决。没有任何权威科学期刊或机构证实此类技术突破。 2. 科学依据不足：文中提到的"莫比乌斯-赫伯特方程"和"量子纠缠时间位移原理"并非公认的科学理论。量子纠缠目前仅证实能在空间维度上实现瞬时关联，无法实现时间维度上的信息传递。 3. 技术可行性存疑：声称使用16层超导材料和极低温环境创造"时间弯曲场"缺乏科学依据。现有量子计算机最高仅实现127量子比特（IBM,2023），远未达到操控时间的理论要求。 4. 机构真实性存疑：经查证不存在名为"未来科技研究中心"的知名科研机构，中欧地区也没有名为"格兰维亚"的国家。 5. 专家身份可疑：理查德·克兰教授未出现在近年诺贝尔物理学奖提名公开名单中。麻省理工学院官网显示萨拉·陈教授的研究领域与量子时间操控无关。 6. 商业数据夸大：华尔街投资机构先锋资本（Vanguard）实际专注于指数基金投资，从未公开宣布投资时间操控技术。 7. 时间表不现实：量子计算技术商业化应用尚处早期阶段，声称2024年推出商业产品完全不符合行业发展规律。 结论：该文章包含大量虚假信息，属于典型的科幻式虚假科技报道，缺乏基本科学依据和可验证事实支撑。建议读者通过权威科学期刊和官方渠道核实此类惊人科技突破。'
const spilited = computed(() => a.split(' '))
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
    <v-container class="pa-2 d-flex">
        <v-card
            width="49.5%"
            flat
            color="primary"
        >
            <v-card-title
                class="text-h4"
            >
                原始文章
                id: {{ id }}
            </v-card-title>

            <v-card-text>
                <div v-for="(segment, index) in spilited" :key="index">
                    {{ segment }}
                </div>
            </v-card-text>
        </v-card>

        <div style="width: 1%"></div>

        <v-card
            width="49.5%"
            flat
        >
            <v-card-title class="pa-4 text-h4">
                分析报告
            </v-card-title>


            <v-card-item class="text-center">
                <span class="text-h6 mr-2">文章虚假概率：</span>
                <v-progress-circular
                    model-value="90"
                    :size="100"
                    :width="15"
                    color="primary"
                >
                    90
                </v-progress-circular>
            </v-card-item>

            <v-card-item>
                <v-timeline
                    density="compact"
                    side="end"
                >
                    <v-timeline-item
                        class="mr-12"
                        dot-color="primary"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{1}}</span>
                        </template>
                        <v-card variant="outlined">
                            <v-card-text>
                                虚假信息识别：文章声称格兰维亚秘密实验室成功研发具有时间操控能力的量子计算机系统"时空枢纽-1号"。目前科学界公认时间旅行在理论上存在重大障碍，特别是违背因果律的问题尚未解决。没有任何权威科学期刊或机构证实此类技术突破。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        class="mb-12"
                        dot-color="white"

                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{2}}</span>
                        </template>
                        <span>

                        </span>
                        <v-card variant="outlined">
                            <v-card-text>
                                科学依据不足：文中提到的"莫比乌斯-赫伯特方程"和"量子纠缠时间位移原理"并非公认的科学理论。量子纠缠目前仅证实能在空间维度上实现瞬时关联，无法实现时间维度上的信息传递。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        class="mb-12"
                        dot-color="white"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{3}}</span>
                        </template>
                        <v-card variant="outlined">
                            <v-card-text>
                                技术可行性存疑：声称使用16层超导材料和极低温环境创造"时间弯曲场"缺乏科学依据。现有量子计算机最高仅实现127量子比特（IBM,2023），远未达到操控时间的理论要求。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        class="mb-12"
                        dot-color="white"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{4}}</span>
                        </template>
                        <v-card variant="outlined">
                            <v-card-text>
                                技术可行性存疑：声称使用16层超导材料和极低温环境创造"时间弯曲场"缺乏科学依据。现有量子计算机最高仅实现127量子比特（IBM,2023），远未达到操控时间的理论要求。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        class="mb-12"
                        dot-color="white"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{5}}</span>
                        </template>
                        <v-card variant="outlined">
                            <v-card-text>
                                技术可行性存疑：声称使用16层超导材料和极低温环境创造"时间弯曲场"缺乏科学依据。现有量子计算机最高仅实现127量子比特（IBM,2023），远未达到操控时间的理论要求。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        class="mb-12"
                        dot-color="white"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{6}}</span>
                        </template>
                        <v-card variant="outlined">
                            <v-card-text>
                                技术可行性存疑：声称使用16层超导材料和极低温环境创造"时间弯曲场"缺乏科学依据。现有量子计算机最高仅实现127量子比特（IBM,2023），远未达到操控时间的理论要求。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item
                        class="mb-12"
                        dot-color="white"
                        size="large"
                    >
                        <template v-slot:icon>
                            <span>{{7}}</span>
                        </template>
                        <v-card variant="outlined">
                            <v-card-text>
                                技术可行性存疑：声称使用16层超导材料和极低温环境创造"时间弯曲场"缺乏科学依据。现有量子计算机最高仅实现127量子比特（IBM,2023），远未达到操控时间的理论要求。
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>


                </v-timeline>


            </v-card-item>

        </v-card>
    </v-container>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: system
</route>
