<template>
    <v-container>
        <div class="editor" contenteditable="true" @paste="handlePaste" ref="editor"></div>
        <v-btn @click="sendContent">发送内容</v-btn>
    </v-container>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const editor = ref(null)
const aaa = [] // 存储原始图片地址

/**
 * 处理粘贴事件：
 * 1. 解析 HTML 内容，查找 `<img>` 标签
 * 2. 把图片下载为 Blob
 * 3. 使用 Canvas 转换图片格式为 PNG
 * 4. 替换原始 HTML，插入到编辑器
 */
const handlePaste = async (event) => {
    event.preventDefault()
    const clipboardData = event.clipboardData || window.clipboardData
    let pastedData =
        clipboardData.getData('text/html') || clipboardData.getData('text/plain')

    if (pastedData && pastedData.indexOf('<img') !== -1) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(pastedData, 'text/html')
        const imgEls = doc.querySelectorAll('img')

        for (const img of imgEls) {
            const src = img.getAttribute('src')
            aaa.push(await convertImageToPng(src))

            try {
                const pngBlob = await convertImageToPng(src)
                const localUrl = URL.createObjectURL(pngBlob)
                img.setAttribute('src', localUrl)
            } catch (error) {
                console.error('图片转换失败：', error)
            }
        }
        pastedData = doc.body.innerHTML
    }

    insertHtmlAtCursor(pastedData)
}

/**
 * 通过 Canvas 将图片转换为 PNG
 */
const convertImageToPng = async (src) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // 处理跨域问题
    img.src = src

    return new Promise((resolve, reject) => {
        img.onload = () => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')

            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)

            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob) // 生成 PNG Blob
                } else {
                    reject(new Error('转换失败'))
                }
            }, 'image/png')
        }

        img.onerror = (err) => reject(err)
    })
}

/**
 * 在光标位置插入 HTML
 */
function insertHtmlAtCursor(html) {
    let sel, range
    if (window.getSelection) {
        sel = window.getSelection()
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0)
            range.deleteContents()

            const el = document.createElement('div')
            el.innerHTML = html
            const frag = document.createDocumentFragment()
            let node, lastNode
            while ((node = el.firstChild)) {
                lastNode = frag.appendChild(node)
            }
            range.insertNode(frag)

            // 将光标移动到新插入内容之后
            if (lastNode) {
                range = range.cloneRange()
                range.setStartAfter(lastNode)
                range.collapse(true)
                sel.removeAllRanges()
                sel.addRange(range)
            }
        }
    } else if (document.selection && document.selection.type !== 'Control') {
        document.selection.createRange().pasteHTML(html)
    }
}

/**
 * 解析编辑器内容，提取文本和图片
 */
function parseEditorContent() {
    const result = []
    let index = 0
    const nodes = editor.value.childNodes

    nodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const img = node.tagName === 'IMG' ? node : node.querySelector('img')
            if (img) {
                result.push({
                    type: 'img',
                    content: img.getAttribute('src'),
                    index: index++,
                })
                const text = node.textContent.replace(/\s+/g, ' ').trim()
                if (text) {
                    result.push({
                        type: 'text',
                        content: text,
                        index: index++,
                    })
                }
            } else {
                const text = node.textContent.replace(/\s+/g, ' ').trim()
                if (text) {
                    result.push({
                        type: 'text',
                        content: text,
                        index: index++,
                    })
                }
            }
        } else if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.replace(/\s+/g, ' ').trim()
            if (text) {
                result.push({
                    type: 'text',
                    content: text,
                    index: index++,
                })
            }
        }
    })
    return result
}

/**
 * 点击按钮时，解析内容并发送
 */
async function sendContent() {
    await nextTick()
    const contentArray = parseEditorContent()
    console.log('待发送数据：', contentArray)
    console.log('原始图片地址：', aaa)

    // 这里可以上传到服务器
    /*
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contentArray)
      })
      const data = await response.json()
      console.log('上传成功：', data)
    } catch (error) {
      console.error('发送失败：', error)
    }
    */
}
</script>

<style scoped>
.editor {
    min-height: 200px;
    border: 1px solid #ccc;
    padding: 10px;
}
</style>

<route lang="yaml">
meta:
  layout: system
</route>
