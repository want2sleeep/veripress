<script setup>
import TitleAnimation from "./TitleAnimation.vue";
</script>
<template>
    <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        height="750"
        max-width="90vw"
        width="100%"
        rounded="xl"
        color="transparent"
    >
        <div>
            <TitleAnimation />
            <div class="text-h4 font-weight-medium mb-2 text-blue">
                AI赋能，慧眼识真，打造值得信赖的新闻鉴别平台
            </div>

            <p class="text-h6 mb-4 text-blue">
                在信息爆炸时代，慧析新闻通过智能技术赋能，帮助用户快速识别虚假新闻，构建清朗的网络空间，提升全民媒介素养，让真相触手可及。
            </p>
        </div>
    </v-sheet>
</template>
<style scoped>
.v-sheet {
    margin-top: 40px;
}
</style>
