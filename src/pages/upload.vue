<script setup>
import service from '@/utils/request.js'
import {nextTick} from 'vue'

const editor = ref(null)
const textContent = ref('')
const imageUrls = []

const handlePaste = async (event) => {
    event.preventDefault()
    const clipboardData = event.clipboardData || window.clipboardData
    let pastedData =
        clipboardData.getData('text/html') || clipboardData.getData('text/plain')

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

const uploadImg = async (url) => {
    const data = await service.post('/passage-service/v1/image/url', {url: url})
    return data.data.data
}

const a = () => {
    setTimeout(() => {
        if (editor.value) {
            const images = editor.value.querySelectorAll('img') // 获取所有 img
            for (const img of images) {
                img.style.height = `200px` // 设置自定义高度
                img.style.width = 'auto'
                const src = img.getAttribute('src')
                console.log('src: ', src)
                imageUrls.push(uploadImg(src))
            }
        }
    }, 100)
}

const parseEditorContent = async function () {
    const result = []
    let index = 0
    const nodes = editor.value.childNodes

    for (const node of nodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const img = node.tagName === 'IMG' ? node : node.querySelector('img')
            if (img) {
                result.push({
                    type: 1,
                    value: await uploadImg(img.getAttribute('src')),
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
    const contentArray = await parseEditorContent()
    const reqInfo = {
        'title': '啊啊啊啊',
        'content': contentArray,
        'partition': 0,
        'status': 0,
    }
    console.log('待发送数据：', contentArray)
    console.log('-----------------', imageUrls)
    await service.post('/passage-service/v1/upload', reqInfo, {
        headers: {
            'userId': '4',
        },
    })
}
</script>

<template>
    <v-container class="pa-2">
        <v-card
            flat
            min-width="800"
            outlined
        >
            <v-card-title class="text-center">
                上传文章
            </v-card-title>

            <v-card-item class="pb-8">
                <div>
                    文章标题
                </div>
                <div
                    class="border-sm pa-1"
                    contenteditable="true"
                    ref="editor"
                    @paste="a"
                />
            </v-card-item>

            <v-card-item>
                <div>
                    文章封面
                </div>
                <v-file-input
                    class="pl-2"
                    label="选择图片"
                    variant="outlined"
                    accept="image/*"
                    density="compact"
                    show-size
                />
            </v-card-item>

            <v-card-item>
                <div>
                    文章内容
                </div>
                <div
                    class="editor border-sm pa-1"
                    contenteditable="true"
                    ref="editor"
                    @paste="a"
                />
            </v-card-item>

            <v-card-actions>
                <v-spacer/>
                <v-btn
                    variant="elevated"
                    color="primary"
                    @click="sendContent"
                    text="上传"
                />
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<style scoped>
.editor {
    min-height: 50vh;
}
</style>

<route lang="yaml">
meta:
  layout: system
</route>
