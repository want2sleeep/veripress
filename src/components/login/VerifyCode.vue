<script setup>
import {ref, defineEmits, inject} from 'vue'

const otp = ref('')
const email = inject('email')
const resendCooldown = ref(0)
const loading = ref(false)
const emit = defineEmits(['navigate'])

const countdown = () => {
    resendCooldown.value = 60
    const timer = setInterval(() => {
        resendCooldown.value -= 1
        if (resendCooldown.value <= 0) clearInterval(timer)
    }, 1000)
}

const handleComplete = async (code) => {
    if (loading.value) return
    loading.value = true
    try {
        // await emit('submit', { code, email: props.email })
    } finally {
        loading.value = false
    }
}

const handleResend = () => {
    if (resendCooldown.value > 0) return
    countdown()
}

onMounted(countdown)
</script>

<template>
    <v-card
        flat
        class="px-2 pt-2 pb-1"
    >
        <v-card-title>
            <div class="d-flex justify-space-between">
                <v-icon
                    icon="mdi-security"
                    size="large"
                />
                <v-btn
                    flat
                    icon="mdi-arrow-left"
                    size="small"
                    @click="emit('navigate', 'ChooseWay')"
                >
                </v-btn>
            </div>
            <div class="text-h4">
                验证你的账户
            </div>
        </v-card-title>

        <v-card-subtitle class="text-wrap">
            我们已经向 {{ email }} 发送了6位验证码，请查收邮件并输入验证码。
        </v-card-subtitle>

        <v-card-text>
            <v-otp-input
                variant="solo"
                v-model="otp"
                length="6"
                type="number"
                :loading="loading"
                @finish="handleComplete"
            />
        </v-card-text>
        <v-card-actions class="d-flex align-content-center">
            <v-spacer/>
            <span class="text-caption text-medium-emphasis mr-2">
                {{ resendCooldown > 0 ? `${resendCooldown}秒后` : '未收到验证码？' }}
            </span>
            <v-btn
                variant="text"
                class="font-weight-bold"
                color="black"
                density="comfortable"
                :disabled="resendCooldown > 0"
                text="重新获取"
            />
        </v-card-actions>
    </v-card>
</template>

<style scoped>

</style>
