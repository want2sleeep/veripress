<script setup>
import {defineProps, ref, watch} from 'vue'
import Article from '@/api/article.js'
import User from '@/api/user.js'

const props = defineProps({
    newsDetail: Object,
})

const PassageData = ref({})
const content = ref([])
const authorInfo = ref({})

const getAuthorInfo = async (authorId) => {
    const {data} = await User.onGetInfo(authorId)
    authorInfo.value = data.data
}

// 处理内容格式的watch
watch(
    () => PassageData.value.content,
    (newContent) => {
        if (newContent) {
            content.value = newContent.map((item) => {
                if (item.type === 0) { // 只处理文本类型
                    // 判断是否以YELLOW:开头
                    const hasYellowPrefix = item.value.startsWith('YELLOW:')

                    // 去除前缀
                    const cleanedValue = hasYellowPrefix
                        ? item.value.replace(/^YELLOW:\s*/, '')
                        : item.value

                    return {
                        ...item,
                        value: cleanedValue,
                        light: hasYellowPrefix, // 设置高亮标志
                    }
                }
                return item
            })
        }
    },
    {immediate: true},
)

// 监听newsDetail变化
watch(
    () => props.newsDetail,
    async (newVal) => {
        if (newVal?.data) {
            PassageData.value = newVal.data
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&', newVal.data.authorId)
            if (newVal.data.authorId) {
                await getAuthorInfo(newVal.data.authorId)
            }
        }
    },
    {immediate: true},
)
</script>

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
                                :image="authorInfo.image"
                            />
                        </template>

                        <v-list-item-title>
                            {{ authorInfo.username }}
                        </v-list-item-title>

                        <v-list-item-subtitle>
                            {{ authorInfo.signature }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-card-actions>
            </v-card>
            <v-card v-for="i in content" :key="i.order" elevation="0">
                <v-card-text
                    class="text-yellow-lighten-4 bg-blue-darken-2 text-h6"
                    style="
                        word-break: break-all;
                        overflow-wrap: break-word;
                        font-family: SiYuanSongTi;
                    "
                >
                    <div v-if="i.type === 0">
                        <div class="d-flex align-center" v-if="i.light" style="color: pink">
                            <span>
                                {{ i.value }}
                            </span>
                            <span>
                                <v-tooltip
                                    text="这是本文虚假率最高的段落"
                                    location="bottom"
                                >
                                    <template v-slot:activator="{ props }">
                                        <v-icon
                                            v-bind="props"
                                            size="40"
                                            color="yellow-lighten-3"
                                        >
                                            mdi-lightbulb-on-outline
                                        </v-icon>
                                    </template>
                                </v-tooltip>
                            </span>
                        </div>
                        <div v-else>
                            {{ i.value }}
                        </div>
                    </div>
                    <div class="d-flex justify-center" v-else>
                        <v-img :src="i.value" max-width="300"/>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-sheet>
</template>
