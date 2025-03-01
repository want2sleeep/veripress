<template>
    <v-container fluid class="fill-height bg-grey-lighten-3">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12 rounded-lg">
                    <!-- 卡片标题 -->
                    <v-card-title class="text-center pt-8 pb-4">
                        <h1 class="text-h4">欢迎登录</h1>
                    </v-card-title>

                    <!-- 登录表单 -->
                    <v-card-text>
                        <v-tabs v-model="activeTab" grow>
                            <v-tab value="password">密码登录</v-tab>
                            <v-tab value="code">验证码登录</v-tab>
                        </v-tabs>

                        <v-form ref="loginForm" v-model="valid" @submit.prevent="handleLogin" class="mt-4">
                            <!-- 邮箱输入框 -->
                            <v-text-field v-model="formData.email" :rules="emailRules" label="邮箱"
                                          prepend-inner-icon="mdi-email" variant="outlined" required
                            />

                            <!-- 密码登录表单 -->
                            <div v-if="activeTab === 'password'">
                                <v-text-field v-model="formData.password" :rules="passwordRules" label="密码"
                                              prepend-inner-icon="mdi-lock" :type="showPassword ? 'text' : 'password'"
                                              variant="outlined"
                                              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                              @click:append-inner="showPassword = !showPassword" required
                                />
                            </div>

                            <!-- 验证码登录表单 -->
                            <div v-if="activeTab === 'code'">
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field v-model="formData.verificationCode" :rules="codeRules"
                                                      label="验证码"
                                                      prepend-inner-icon="mdi-numeric" variant="outlined" required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-btn block color="primary" :disabled="!isEmailValid || countdown > 0"
                                               height="56" @click="sendVerificationCode"
                                        >
                                            {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>

                            <!-- 登录按钮 -->
                            <RouterLink to="/loginVeri">
                                <v-btn block color="primary" size="large" type="submit" :loading="loading" class="mt-2">
                                    登录
                                </v-btn>
                            </RouterLink>
                        </v-form>
                    </v-card-text>

                    <!-- 其他操作链接 -->
                    <v-card-actions class="justify-center pb-6">
                        <RouterLink style="text-decoration: none" to="/signup">
                            <v-btn variant="text" color="primary">注册账号</v-btn>
                        </RouterLink>
                        <router-link to="forgetPassword">
                            <v-btn variant="text" color="primary">忘记密码？</v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- 提示消息 -->
        <v-snackbar v-model="snackbar.show" :color="snackbar.color">
            {{ snackbar.text }}
        </v-snackbar>
    </v-container>
</template>

<script setup>
import {ref, computed} from 'vue'
import {RouterLink} from "vue-router";

// 表单数据
const loginForm = ref(null)
const valid = ref(false)
const activeTab = ref('password')
const showPassword = ref(false)
const loading = ref(false)
const countdown = ref(0)

const formData = ref({
    email: '',
    password: '',
    verificationCode: ''
})

// 表单验证规则
const emailRules = [
    v => !!v || '请输入邮箱',
    v => /.+@.+\..+/.test(v) || '请输入有效的邮箱地址'
]

const passwordRules = [
    v => !!v || '请输入密码',
    v => v.length >= 6 || '密码长度至少为6位'
]

const codeRules = [
    v => !!v || '请输入验证码',
    v => v.length === 6 || '验证码长度应为6位'
]

// 计算属性
const isEmailValid = computed(() => {
    return emailRules.every(rule => {
        const result = rule(formData.value.email)
        return result === true
    })
})

// 提示消息
const snackbar = ref({
    show: false,
    text: '',
    color: 'success'
})

// 发送验证码
const sendVerificationCode = async () => {
    try {
        // TODO: 调用发送验证码API
        countdown.value = 60
        const timer = setInterval(() => {
            countdown.value--
            if (countdown.value <= 0) {
                clearInterval(timer)
            }
        }, 1000)

        showMessage('验证码已发送到您的邮箱', 'success')
    } catch (error) {
        showMessage('验证码发送失败，请重试', 'error')
        console.error('发送验证码失败:', error)
    }
}

// 登录处理
const handleLogin = async () => {
    if (!loginForm.value.validate()) return

    loading.value = true
    try {
        // TODO: 调用登录API
        const loginType = activeTab.value
        const loginData = {
            email: formData.value.email,
            ...(loginType === 'password'
                    ? {password: formData.value.password}
                    : {code: formData.value.verificationCode}
            )
        }

        console.log('登录数据:', loginData)
        // 模拟登录延迟
        await new Promise(resolve => setTimeout(resolve, 1000))

        showMessage('登录成功', 'success')
        // TODO: 处理登录成功后的跳转
    } catch (error) {
        showMessage('登录失败，请重试', 'error')
        console.error(error)
    } finally {
        loading.value = false
    }
}

// 显示提示消息
const showMessage = (text, color = 'success') => {
    snackbar.value = {
        show: true,
        text,
        color
    }
}
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>
