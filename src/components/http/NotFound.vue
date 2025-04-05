<template>
    <div class="error-container">
        <div class="error-number" ref="errorNumber">404</div>
        <div class="error-action" ref="errorText">
            <v-btn
                class="ma-2"
                variant="outlined"
                text="重试"
            />
            <v-btn
                class="ma-2"
                variant="outlined"
                text="返回"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const errorNumber = ref(null)
const errorText = ref(null)

onMounted(() => {
    // 创建 gsap 时间轴动画
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

    // “404”数字：从上方飞入并逐渐显示，同时透明度由 0 到 1
    tl.from(errorNumber.value, { y: -150, opacity: 0, duration: 1 })
        // 数字旋转一周，使用弹性 easing 效果
        .to(errorNumber.value, { rotation: 360, duration: 1.2, ease: "elastic.out(1, 0.5)" })
        // “Page Not Found”文本：从下方缓入，与数字部分略有重叠
        .from(errorText.value, { y: 50, opacity: 0, duration: 1 }, "-=0.6")

    // 可选：给整个容器添加一个持续变化的背景动画
    gsap.to(".error-container", {
        background: "linear-gradient(135deg, #243B55, #141E30)",
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    })
})
</script>

<style scoped>
.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #141E30, #243B55);
    color: #fff;
    overflow: hidden;
    font-family: 'Anton', sans-serif;
}

.error-number {
    font-size: 10rem;
    font-weight: bold;
    margin: 0;
    line-height: 1;
}

.error-action {
    font-size: 2rem;
    letter-spacing: 0.1em;
}
</style>
