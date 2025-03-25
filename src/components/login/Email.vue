<script setup>
import {ref, defineEmits, inject} from 'vue'

const email = inject('email')
const rules = {
    email: [
        v => /.+@.+\..+/.test(v) || '请输入有效的邮箱地址',
    ],
}
const emit = defineEmits(['navigate', 'submit'])

const handleSubmit = () => {
    if (!email.value) return
    emit('submit', { email: email.value })
    emit('navigate', 'ChooseWay')
}

</script>

<template>
    <v-card
        flat
        class="px-2 pt-2 pb-1"
    >
        <v-card-title>
            <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                    <v-icon
                        size="large"
                        icon="mdi-login"
                    />
                </div>
                <RouterLink to="/">
                    <v-btn
                        variant="flat"
                        size="small"
                        flat
                        density="comfortable"
                        icon="mdi-close"
                    />
                </RouterLink>
            </div>
            <div class="text-h4 mt-1">欢迎登录</div>
        </v-card-title>

        <v-card-text>
            <v-text-field
                v-model="email"
                :rules="rules.email"
                variant="underlined"
                label="邮箱"
                type="email"
                clearable
            />
            <div class="mb-1 d-flex justify-space-between">
                <v-btn
                    variant="text"
                    text="立即注册"
                    density="comfortable"
                    @click="$emit('navigate', 'Signup')"
                />
                <v-btn
                    variant="text"
                    size="default"
                    color="primary"
                    rounded="pill"
                    append-icon="mdi-arrow-right"
                    text="下一步"
                    @click="handleSubmit"
                />
            </div>
            <p class="text-right ">
                点击“下一步”，即表示您已阅读并同意我们的各项条款，包括
            </p>
            <p class="text-right">
                其之后的更新。
            </p>
            <div class="d-flex justify-end">
                <RouterLink to="/">
                    <v-btn
                        variant="text"
                        class="font-weight-bold"
                        color="black"
                        append-icon="mdi-arrow-top-right"
                        text="浏览条款"
                    />
                </RouterLink>
            </div>

        </v-card-text>

    </v-card>
</template>

<style scoped>

</style>
