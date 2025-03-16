<script setup>
import {ref} from 'vue'

const text = ref({})
const img = ref('')
let items

const copy = (event) => {
    items = event.clipboardData.items
    console.log(items)

    for (const item of items) {
        if (item.type.startsWith('image')) {
            // const blob = item.getAsFile()
            // const reader = new FileReader()
            //
            // reader.onload = () => {
            //     img.value = reader.result
            // }
            //
            // reader.readAsDataURL(blob)

            const blob = item.getAsFile()
            if (blob) {
                const url = URL.createObjectURL(blob)
                img.value = url
            }
        }
    }
}

import ChooseWay from '@/components/login/ChooseWay.vue'
import VerifyCode from '@/components/login/VerifyCode.vue'
import Email from '@/components/login/Email.vue'
import Password from '@/components/login/Password.vue'
import Signup from '@/components/login/Signup.vue'

const CARD_CONFIG = {
    Email: {component: Email, targets: ['ChooseWay', 'Signup']},
    ChooseWay: {component: ChooseWay, targets: ['Password', 'VerifyCode']},
    Password: {component: Password, targets: []},
    VerifyCode: {component: VerifyCode, targets: []},
    Signup: {component: Signup, targets: ['Email']},
}
const currentCard = ref('Email') // 初始卡片
const history = ref([])
const email = ref('')
provide('email', email)

// 计算属性
const currentComponent = computed(() =>
    CARD_CONFIG[currentCard.value].component,
)

const currentTargets = computed(() =>
    CARD_CONFIG[currentCard.value].targets,
)

const hasHistory = computed(() =>
    history.value.length > 0,
)

// 导航方法
const handleNavigation = (target) => {
    history.value.push(currentCard.value)
    currentCard.value = target
}
</script>

<template>
    <!--    <v-textarea-->
    <!--        v-model="text"-->
    <!--        label="Label"-->
    <!--        @paste="copy"-->
    <!--    />-->

    <!--    {{ items }}-->

    <!--    <v-img width="40" :src="img" v-if="img"/>-->

    <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="6" md="4">
                <component
                    :is="currentComponent"
                    :key="currentCard"
                    :targets="currentTargets"
                    :can-go-back="hasHistory"
                    @navigate="handleNavigation"
                />
            </v-col>
        </v-row>
    </v-container>

</template>

<route lang="yaml">
meta:
layout: "TestLayout"
</route>

<style scoped>

</style>
