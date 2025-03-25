<template>
    <div class="container">
        <div class="page2">
            <div class="strip strip-right">
                <h1>
                    VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span
                        >VERIPRESS</span
                    >
                </h1>
            </div>
            <div class="strip strip-left">
                <h1>
                    VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span
                        >VERIPRESS</span
                    >
                </h1>
                >
            </div>
            <div class="strip strip-right">
                <h1>
                    VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span
                        >VERIPRESS</span
                    >
                </h1>
            </div>
            <div class="strip strip-left">
                <h1>
                    VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span
                        >VERIPRESS</span
                    >
                </h1>
            </div>
            <div class="strip strip-right">
                <h1>
                    VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span>VERIPRESS</span>VERIPRESS<span
                        >VERIPRESS</span
                    >
                </h1>
            </div>
        </div>
    </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted } from "vue";

// 注册插件
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    nextTick(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page2",

                start: "0% 90%",
                end: "180% 90%",
                scrub: true,
            },
        });

        tl.to(
            ".strip-left",
            {
                marginLeft: "0%",
            },
            "a"
        ).to(
            ".strip-right",
            {
                marginLeft: "-100%",
            },
            "a"
        );
    });
});
</script>
<style>
/* 导入字体 */
/* @font-face {
    font-family: ;
    src: url();
} */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 100%;
    min-height: 80vh;
    /*  overflow: hidden; */
}
[class^="page"] {
    width: 100%;
    height: 80vh;
}
.strip {
    width: 300%;
    transition: all cubic-bezier(0.19, 1, 0.22, 1);
}
.page2 h1 {
    color: #1976d2;
    /* font-family: ; */
    font-size: 4rem;
    line-height: 6rem;
    pointer-events: none;
}
h1 span {
    color: transparent;
    -webkit-text-stroke: 1px #fff176;
}
.strip:nth-child(2n) {
    margin-left: -100%;
}
</style>
