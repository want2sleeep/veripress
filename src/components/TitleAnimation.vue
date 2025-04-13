<script setup>
import {onMounted, nextTick} from 'vue'
import SplitType from 'split-type'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger)
const isButtonVisible = ref(false) // 控制固定按钮的显示状态
onMounted(() => {
    nextTick(() => {
        // 平滑滚动插件
        import(
            'https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js'
            ).then(() => {
            const lenis = new Lenis()

            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
        })

        // 获取文本元素
        const textElement = document.querySelector('.reveal-type')
        if (textElement) {
            const text = new SplitType(textElement, {types: 'chars'})

            // GSAP 滚动动画
            gsap.fromTo(
                text.chars,
                {opacity: 0, y: 300, scale: 0.3}, // 更大的起始偏移，增强弹动感
                {
                    opacity: 1,
                    y: 0,
                    scale: 1.2, // 稍微放大，增加弹性感
                    duration: 1.2, // 更快的动画
                    ease: 'elastic.out(1, 0.5)', // 强弹性
                    stagger: 0.08, // 逐个字符出现
                    scrollTrigger: {
                        trigger: textElement,
                        start: 'top 90%', // 90% 处才开始触发
                        end: 'top 80%',
                        scrub: false, // 不平滑滚动，触发后直接播放
                        toggleActions: 'play none none none', // 只有下滑到才触发
                        markers: false, // 关闭调试标记
                    },
                },
            )
        }
        // 监听“开始检测”按钮的滚动
        const startButton = document.querySelector('.start-button')
        ScrollTrigger.create({
            trigger: startButton,
            start: 'bottom bottom', // **确保按钮完全滚出视口再触发**
            end: 'bottom top',
            onEnterBack: () => {
                isButtonVisible.value = false // 回到视口内，隐藏固定按钮
            },
            onLeave: () => {
                isButtonVisible.value = true // 滑出视口，显示固定按钮
            },
        })
    })
})
// 回到顶部的方法
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'}) // 平滑滚动到顶部
}

</script>

<template>
    <div class="container">
        <h1 class="reveal-type">慧析新闻</h1>
        <div class="text-h4 font-weight-medium mb-2 text-blue">
            AI赋能，慧眼识真，打造值得信赖的新闻鉴别平台
        </div>

        <p class="text-h6 mb-4 text-blue">
            在信息爆炸时代，慧析新闻通过智能技术赋能，帮助用户快速识别虚假新闻，构建清朗的网络空间，提升全民媒介素养，让真相触手可及。
        </p>
        <RouterLink to="/upload">
            <v-btn
                v-if="!isButtonVisible"
                class="start-button text-h5"
                color="yellow-lighten-2"
                size="x-large"
                variant="outlined"
                rounded
            >
                开始检测
            </v-btn>
        </RouterLink>
        <v-btn
            v-if="isButtonVisible"
            class="fixed-button text-blue-darken-2"
            color="yellow-lighten-2"
            size="large"
            variant="elevated"
            icon="mdi-arrow-up"
            @click="scrollToTop"
        >
        </v-btn>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh; /* 盒子高度减小，避免占满整个屏幕 */
}

.reveal-type {
    font-size: 80px; /* 适当减小字体 */
    color: #fff176;
    font-weight: 700;
    text-align: center;
    letter-spacing: 20px;
    white-space: nowrap;
}

.fixed-button {
    position: fixed;
    right: 20px; /* 贴近左侧 */
    bottom: 300px; /* 靠近底部 */
    z-index: 1000;
    transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
