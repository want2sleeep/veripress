<template>
    <v-sheet
        rounded="xl"
        color="blue-darken-2"
        style="margin: 30px 30px 40px 0px; padding: 40px"
    >
        <v-col>
            <div
                class="text-h2 font-weight-bold text-yellow-lighten-3"
                style="margin-bottom: 30px"
            >
                {{ PassageData.title }}
            </div>
            <v-card
                class="mx-auto text-blue-darken-2"
                color="yellow-lighten-4"
                elevation="1"
            >
                <v-card-actions>
                    <v-list-item class="w-100">
                        <template v-slot:prepend>
                            <v-avatar
                                color="grey-darken-3"
                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-avatar>
                        </template>

                        <v-list-item-title>{{
                            PassageData.authorName
                        }}</v-list-item-title>

                        <v-list-item-subtitle>{{
                            PassageData.authorId
                        }}</v-list-item-subtitle>
                    </v-list-item>
                </v-card-actions>
            </v-card>
            <v-card v-for="i in content" :key="i.order" elevation="0">
                <v-card-text
                    v-if="i.type === 0"
                    class="text-yellow-lighten-4 bg-blue-darken-2 text-h6"
                    style="word-break: break-all; overflow-wrap: break-word"
                >
                    {{ i.value }}
                </v-card-text>
                <img v-else :src="i.value" max-width="300" />
            </v-card>
        </v-col>
    </v-sheet>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
    newsDetail: Object,
});

// 定义响应式变量
const PassageData = ref({});

// 监听 newsDetail 变化
watch(
    () => props.newsDetail,
    (newVal) => {
        if (newVal && newVal.data) {
            //console.log("新获取的 newsDetail:", newVal);
            PassageData.value = newVal.data; // 这里要访问 `data`
        }
    },
    { immediate: true } // 组件加载时立即执行一次
);

// 让 content 也保持响应式
const content = ref([]);
watch(
    () => PassageData.value.content,
    (newContent) => {
        if (newContent) {
            content.value = newContent.map((item) => {
                if (item.type === 0) {
                    let value = item.value.replace(/^YELLOW:/, ""); //匹配出现在开头的yellow
                    let match = value.match(/^#+/);
                    if (match) {
                        value = value.replace(/^#+\s/, ""); //\s空白字符
                    }
                    return { ...item, value };
                } else {
                    return item;
                }
            });
        }
    },
    { immediate: true }
);
</script>
