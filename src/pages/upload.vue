<script setup>
import service from '@/utils/request.js'
import {nextTick} from 'vue'
import Article from '@/api/article.js'
import {useRouter} from 'vue-router'
import Partition from '@/data/partition.js'

const editor = ref(null)
const textContent = ref('')
const imageUrls = []
const taskKey = ref('')
const title = ref('')
const coverImage = ref(null)
const payloadCoverImage = ref('')
const partition = ref(1)
const router = useRouter()

const handlePaste = async (event) => {
    event.preventDefault()
    const clipboardData = event.clipboardData || window.clipboardData
    let pastedData =
        clipboardData.getData('text/html') ||
        clipboardData.getData('text/plain')

    // 如果包含HTML内容，则解析其中的 <img> 标签
    if (pastedData && pastedData.indexOf('<img') !== -1) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(pastedData, 'text/html')
        const imgEls = doc.querySelectorAll('img')
        for (const img of imgEls) {
            const src = img.getAttribute('src')
            imageUrls.value.push(src)
            try {
                const response = await fetch(src)
                const blob = await response.blob()
                // 创建本地 URL，该 URL 仅在当前会话有效
                const localUrl = URL.createObjectURL(blob)
                img.setAttribute('src', localUrl)
            } catch (error) {
                console.error('图片加载失败：', error)
            }
        }
    }
}

const uploadImageViaURL = async (url) => {
    const data = await service.post('/passage-service/v1/image/url', {
        url: url,
    })
    return data.data.data
}

const uploadImageViaFile = async () => {
    if (!coverImage.value) {
        console.error('未选择文件')
        return
    }
    const formData = new FormData()
    formData.append('imageFile', coverImage.value)
    const {data} = await Article.uploadImageViaFile(formData)
    if (data.success) {
        payloadCoverImage.value = data.data
    }
}

const contentPaste = async () => {
    setTimeout(async () => {
        if (editor.value) {
            const images = editor.value.querySelectorAll('img') // 获取所有 img
            for (const img of images) {
                img.style.height = `200px` // 设置自定义高度
                img.style.width = 'auto'
                const src = img.getAttribute('src')
                const returnSrc = await uploadImageViaURL(src)
                img.setAttribute('src', returnSrc)
            }
        }
    }, 100)
}

const parseEditorContent = function () {
    const result = []
    let index = 0
    const nodes = editor.value.childNodes

    for (const node of nodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const img =
                node.tagName === 'IMG' ? node : node.querySelector('img')
            if (img) {
                result.push({
                    type: 1,
                    value: img.getAttribute('src'),
                    order: index++,
                })
                const text = node.textContent.replace(/\s+/g, ' ').trim()
                if (text) {
                    result.push({
                        type: 0,
                        value: text,
                        order: index++,
                    })
                }
            } else {
                const text = node.textContent.replace(/\s+/g, ' ').trim()
                if (text) {
                    result.push({
                        type: 0,
                        value: text,
                        order: index++,
                    })
                }
            }
        } else if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.replace(/\s+/g, ' ').trim()
            if (text) {
                result.push({
                    type: 0,
                    value: text,
                    order: index++,
                })
            }
        }
    }
    return result
}

const sendContent = async function () {
    await nextTick()
    const contentArray = parseEditorContent()
    const reqInfo = {
        title: title.value,
        coverImage: payloadCoverImage.value,
        content: contentArray,
        partition: partition.value,
        status: 1,
    }
    const data = await Article.createArticle(reqInfo)
    taskKey.value = data.data.data.taskKey
    await getTaskInfo()
    router.push('/history')
}

const getTaskInfo = async () => {
    console.log('taskKey：', taskKey.value)
    let status = await Article.getTaskInfo(taskKey.value)
    console.log('获取任务状态：', status)
    while (status <= 0) {
        status = await Article.getTaskInfo(taskKey.value)
        setTimeout(() => {
            console.log('获取任务状态：', status)
        }, 1000)
    }
}
</script>

<template>
    <v-container class="pa-10 bg-blue-lighten-4">
        <v-card
            style="padding: 40px"
            flat
            min-width="800"
            outlined
            color="blue-darken-2"
            rounded="xl"
        >
            <v-card-title class="text-center font-weight-black text-h3 text-yellow-lighten-3">
                上传文章
            </v-card-title>

            <v-card-item class="pb-8">
                <div class="text-h4 font-weight-bold">文章标题</div>

                <!--                <div-->
                <!--                    class="text-h7"-->
                <!--                    contenteditable="true"-->
                <!--                    style="margin: 20px 0 0 10px"-->
                <!--                    ref="editor"-->
                <!--                    @paste="a"-->
                <!--                />-->
                <v-text-field
                    v-model="title"

                />
            </v-card-item>

            <v-card-item>
                <div class="text-h4 font-weight-bold">文章封面</div>
                <v-file-input
                    v-model="coverImage"
                    @change="uploadImageViaFile"
                    class="rounded-input text-h6"
                    style="margin: 20px 0"
                    label="选择图片"
                    variant="outlined"
                    accept="image/*"
                    density="compact"
                    show-size
                    color="white"
                />
            </v-card-item>

            <v-card-item>
                <div class="text-h4 font-weight-bold">文章分区</div>
                <v-select
                    v-model="partition"
                    :items="Partition"
                    item-title="text"
                    item-value="value"
                    density="comfortable"
                    label="请选择分区"
                />
            </v-card-item>

            <v-card-item>
                <div class="text-h4 font-weight-bold">文章内容</div>
                <div
                    style="margin: 20px 0; padding: 1rem"
                    class="editor bg-white text-blue-darken-4 text-h6"
                    contenteditable="true"
                    ref="editor"
                    @paste="contentPaste"
                />
            </v-card-item>

            <v-card-actions>
                <v-spacer/>
                <v-btn
                    rounded="xl"
                    class="text-blue-darken-2 text-h5 font-weight-bold"
                    height="50"
                    width="90"
                    color="yellow-lighten-2"
                    variant="elevated"
                    @click="sendContent"
                    text="上传"
                />
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<style scoped>
.editor {
    min-height: 35vh;
    border-radius: 25px;
}

.rounded-input ::v-deep .v-field {
    border-radius: 15px;
}

.rounded-input ::v-deep .v-field.v-field--focused {
    outline: none;
    border-color: #fff9c4 !important;
}

[contenteditable="true"]:focus {
    outline: none;
    border-color: #fff9c4 !important;
}

[contenteditable="true"] {
    border: 1px solid #70aae3; /* 未选中时浅黄色边框 */
    border-radius: 15px;
    padding: 0.5rem;
}
</style>

<route lang="yaml">
meta:
  layout: system
</route>
