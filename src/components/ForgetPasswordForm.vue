<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
    <v-container
        fluid
        class="fill-height"
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                sm="8"
                md="6"
                lg="4"
            >
                <v-card
                    class="elevation-12 rounded-lg"
                >
                    <v-card-title
                        class="text-center pt-8 pb-4"
                    >
                        <h1 class="text-h4">修改密码</h1>
                    </v-card-title>

                    <v-card-text>
                        <v-form ref="registerForm">
                            <v-text-field
                                label="邮箱"
                                prepend-inner-icon="mdi-email"
                                variant="outlined"
                                required
                            />

                            <v-row>
                                <v-col cols="7">
                                    <v-text-field
                                        label="验证码"
                                        prepend-inner-icon="mdi-numeric"
                                        variant="outlined"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="5">
                                    <v-btn
                                        block
                                        color="primary"
                                        height="56"
                                    >
                                        {{ '获取验证码' }}
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <v-text-field
                                label="密码"
                                prepend-inner-icon="mdi-lock"
                                variant="outlined"
                                required
                            ></v-text-field>

                            <v-text-field
                                label="确认密码"
                                prepend-inner-icon="mdi-lock-check"
                                variant="outlined"
                                required
                            ></v-text-field>

                            <Router-link
                                class="text-decoration-none"
                                to="login"
                            >
                                <v-btn
                                    block
                                    color="primary"
                                    size="large"
                                    type="submit"
                                    class="mt-4"
                                >
                                    确认修改
                                </v-btn>
                            </Router-link>
                        </v-form>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!--                    &lt;!&ndash; 卡片标题 &ndash;&gt;-->
    <!--                    <v-card-title class="text-center pt-8 pb-4">-->
    <!--                        <h1 class="text-h4">重置密码</h1>-->
    <!--                    </v-card-title>-->

    <!--                    &lt;!&ndash; 重置密码表单 &ndash;&gt;-->
    <!--                    <v-card-text>-->
    <!--&lt;!&ndash;                        <v-stepper v-model="currentStep" class="bg-transparent">&ndash;&gt;-->
    <!--&lt;!&ndash;                            &lt;!&ndash; 步骤提示 &ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;                            <v-stepper-header>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <v-stepper-item value="1">验证邮箱</v-stepper-item>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <v-divider></v-divider>&ndash;&gt;-->
    <!--&lt;!&ndash;                                <v-stepper-item value="2">重置密码</v-stepper-item>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </v-stepper-header>&ndash;&gt;-->

    <!--&lt;!&ndash;                            <v-stepper-window>&ndash;&gt;-->
    <!--&lt;!&ndash;                                &lt;!&ndash; 步骤1：验证邮箱 &ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;                                <v-stepper-window-item value="1">&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <v-form ref="emailForm" v-model="emailValid" @submit.prevent="verifyEmail">&ndash;&gt;-->
    <!--&lt;!&ndash;                                        <v-text-field v-model="formData.email" :rules="emailRules" label="邮箱"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            prepend-inner-icon="mdi-email" variant="outlined" required></v-text-field>&ndash;&gt;-->

    <!--&lt;!&ndash;                                        <v-row>&ndash;&gt;-->
    <!--&lt;!&ndash;                                            <v-col cols="7">&ndash;&gt;-->
    <!--&lt;!&ndash;                                                <v-text-field v-model="formData.verificationCode" :rules="codeRules"&ndash;&gt;-->
    <!--&lt;!&ndash;                                                    label="验证码" prepend-inner-icon="mdi-numeric" variant="outlined"&ndash;&gt;-->
    <!--&lt;!&ndash;                                                    required></v-text-field>&ndash;&gt;-->
    <!--&lt;!&ndash;                                            </v-col>&ndash;&gt;-->
    <!--&lt;!&ndash;                                            <v-col cols="5">&ndash;&gt;-->
    <!--&lt;!&ndash;                                                <v-btn block color="primary" :disabled="!isEmailValid || countdown > 0"&ndash;&gt;-->
    <!--&lt;!&ndash;                                                    height="56" @click="sendVerificationCode">&ndash;&gt;-->
    <!--&lt;!&ndash;                                                    {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}&ndash;&gt;-->
    <!--&lt;!&ndash;                                                </v-btn>&ndash;&gt;-->
    <!--&lt;!&ndash;                                            </v-col>&ndash;&gt;-->
    <!--&lt;!&ndash;                                        </v-row>&ndash;&gt;-->

    <!--&lt;!&ndash;                                        <v-btn block color="primary" size="large" type="submit" :loading="loading"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            class="mt-4">&ndash;&gt;-->
    <!--&lt;!&ndash;                                            下一步&ndash;&gt;-->
    <!--&lt;!&ndash;                                        </v-btn>&ndash;&gt;-->
    <!--&lt;!&ndash;                                    </v-form>&ndash;&gt;-->
    <!--&lt;!&ndash;                                </v-stepper-window-item>&ndash;&gt;-->

    <!--&lt;!&ndash;                                &lt;!&ndash; 步骤2：重置密码 &ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;                                <v-stepper-window-item value="2">&ndash;&gt;-->
    <!--&lt;!&ndash;                                    <v-form ref="passwordForm" v-model="passwordValid" @submit.prevent="resetPassword">&ndash;&gt;-->
    <!--&lt;!&ndash;                                        <v-text-field v-model="formData.newPassword" :rules="passwordRules" label="新密码"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            prepend-inner-icon="mdi-lock" :type="showPassword ? 'text' : 'password'"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            @click:append-inner="showPassword = !showPassword" variant="outlined"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            required></v-text-field>&ndash;&gt;-->

    <!--&lt;!&ndash;                                        <v-text-field v-model="formData.confirmPassword" :rules="confirmPasswordRules"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            label="确认新密码" prepend-inner-icon="mdi-lock-check"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            :type="showConfirmPassword ? 'text' : 'password'"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            @click:append-inner="showConfirmPassword = !showConfirmPassword"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            variant="outlined" required></v-text-field>&ndash;&gt;-->

    <!--&lt;!&ndash;                                        <v-btn block color="primary" size="large" type="submit" :loading="loading"&ndash;&gt;-->
    <!--&lt;!&ndash;                                            class="mt-4">&ndash;&gt;-->
    <!--&lt;!&ndash;                                            重置密码&ndash;&gt;-->
    <!--&lt;!&ndash;                                        </v-btn>&ndash;&gt;-->
    <!--&lt;!&ndash;                                    </v-form>&ndash;&gt;-->
    <!--&lt;!&ndash;                                </v-stepper-window-item>&ndash;&gt;-->
    <!--&lt;!&ndash;                            </v-stepper-window>&ndash;&gt;-->
    <!--&lt;!&ndash;                        </v-stepper>&ndash;&gt;-->
    <!--                    </v-card-text>-->

    <!--                    &lt;!&ndash; 其他操作链接 &ndash;&gt;-->
    <!--                    <v-card-actions class="justify-center pb-6">-->
    <!--                        <v-btn variant="text" color="primary" :to="{ name: 'login' }">-->
    <!--                            返回登录-->
    <!--                        </v-btn>-->
    <!--                    </v-card-actions>-->
    <!--                </v-card>-->
    <!--            </v-col>-->
    <!--        </v-row>-->

    <!--        &lt;!&ndash; 提示消息 &ndash;&gt;-->
    <!--&lt;!&ndash;        <v-snackbar v-model="snackbar.show" :color="snackbar.color">&ndash;&gt;-->
    <!--&lt;!&ndash;            {{ snackbar.text }}&ndash;&gt;-->
    <!--&lt;!&ndash;        </v-snackbar>&ndash;&gt;-->
    <!--    </v-container>-->

</template>

<!--<script setup>-->
<!--import { ref, computed } from 'vue'-->
<!--import { useRouter } from 'vue-router'-->

<!--const router = useRouter()-->
<!--const emailForm = ref(null)-->
<!--const passwordForm = ref(null)-->
<!--const emailValid = ref(false)-->
<!--const passwordValid = ref(false)-->
<!--const loading = ref(false)-->
<!--const countdown = ref(0)-->
<!--const currentStep = ref('1')-->
<!--const showPassword = ref(false)-->
<!--const showConfirmPassword = ref(false)-->

<!--const formData = ref({-->
<!--    email: '',-->
<!--    verificationCode: '',-->
<!--    newPassword: '',-->
<!--    confirmPassword: ''-->
<!--})-->

<!--// 验证规则-->
<!--const emailRules = [-->
<!--    v => !!v || '请输入邮箱',-->
<!--    v => /.+@.+\..+/.test(v) || '请输入有效的邮箱地址'-->
<!--]-->

<!--const passwordRules = [-->
<!--    v => !!v || '请输入密码',-->
<!--    v => v.length >= 6 || '密码长度至少为6位',-->
<!--    v => /\d/.test(v) && /[a-zA-Z]/.test(v) || '密码必须包含数字和字母'-->
<!--]-->

<!--const confirmPasswordRules = [-->
<!--    v => !!v || '请确认密码',-->
<!--    v => v === formData.value.newPassword || '两次输入的密码不一致'-->
<!--]-->

<!--const codeRules = [-->
<!--    v => !!v || '请输入验证码',-->
<!--    v => v.length === 6 || '验证码长度应为6位'-->
<!--]-->

<!--// 提示消息-->
<!--const snackbar = ref({-->
<!--    show: false,-->
<!--    text: '',-->
<!--    color: 'success'-->
<!--})-->

<!--const isEmailValid = computed(() => {-->
<!--    return emailRules.every(rule => {-->
<!--        const result = rule(formData.value.email)-->
<!--        return result === true-->
<!--    })-->
<!--})-->

<!--// 发送验证码-->
<!--const sendVerificationCode = async () => {-->
<!--    try {-->
<!--        // TODO: 调用发送验证码API-->
<!--        countdown.value = 60-->
<!--        const timer = setInterval(() => {-->
<!--            countdown.value&#45;&#45;-->
<!--            if (countdown.value <= 0) {-->
<!--                clearInterval(timer)-->
<!--            }-->
<!--        }, 1000)-->

<!--        showMessage('验证码已发送到您的邮箱', 'success')-->
<!--    } catch (error) {-->
<!--        showMessage('验证码发送失败，请重试', 'error')-->
<!--    }-->
<!--}-->

<!--// 验证邮箱-->
<!--const verifyEmail = async () => {-->
<!--    if (!emailForm.value.validate()) return-->

<!--    loading.value = true-->
<!--    try {-->
<!--        // TODO: 调用验证邮箱API-->
<!--        await new Promise(resolve => setTimeout(resolve, 1000))-->
<!--        currentStep.value = '2'-->
<!--    } catch (error) {-->
<!--        showMessage('验证失败，请重试', 'error')-->
<!--    } finally {-->
<!--        loading.value = false-->
<!--    }-->
<!--}-->

<!--// 重置密码-->
<!--const resetPassword = async () => {-->
<!--    if (!passwordForm.value.validate()) return-->

<!--    loading.value = true-->
<!--    try {-->
<!--        // TODO: 调用重置密码API-->
<!--        await new Promise(resolve => setTimeout(resolve, 1000))-->
<!--        showMessage('密码重置成功', 'success')-->
<!--        setTimeout(() => {-->
<!--            router.push({ name: 'login' })-->
<!--        }, 1500)-->
<!--    } catch (error) {-->
<!--        showMessage('密码重置失败，请重试', 'error')-->
<!--    } finally {-->
<!--        loading.value = false-->
<!--    }-->
<!--}-->

<!--// 显示提示消息-->
<!--const showMessage = (text, color = 'success') => {-->
<!--    snackbar.value = {-->
<!--        show: true,-->
<!--        text,-->
<!--        color-->
<!--    }-->
<!--}-->
<!--</script>-->

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>
