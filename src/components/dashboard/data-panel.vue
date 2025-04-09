<template>
    <v-container fluid class="pa-0">
        <!-- row-gap 16px -->
        <v-row class="panel justify-space-between pa-10" style="row-gap: 16px">
            <!-- 每列占据 4 个栅格（1/3 宽度） -->
            <v-col v-for="(item, index) in items" :key="index" cols="4">
                <v-card
                    class="ma-4 bg-yellow-lighten-4"
                    flat
                    height="30vh"
                    rounded="xl"
                >
                    <v-card-item>
                        <template v-slot:prepend>
                            <v-avatar
                                size="100"
                                color="grey-darken-3"
                                style="margin: auto"
                                :image="item.avatar"
                            />
                        </template>
                        <v-card-title class="text-h5">
                            {{ displayedValue.toFixed() }} 篇
                        </v-card-title>
                        <v-card-subtitle>
                            {{ item.text }}
                        </v-card-subtitle>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 示例数据
const items = [
    {
        text: "检测文章数",
        avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    },
    {
        text: "检测文章数",
        avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    },
    {
        text: "检测文章数",
        avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    },
];

// 目标值
const targetValue = 300;
// 用于显示的值，初始为0
const displayedValue = ref(0);

// 动画持续时间（毫秒）
const duration = 2000;

onMounted(() => {
    const startTime = performance.now();

    const updateValue = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            // 计算当前值
            displayedValue.value = (elapsedTime / duration) * targetValue;
            // 请求下一帧动画
            requestAnimationFrame(updateValue);
        } else {
            // 动画结束，确保最终值为目标值
            displayedValue.value = targetValue;
        }
    };

    // 开始动画
    requestAnimationFrame(updateValue);
});
</script>
