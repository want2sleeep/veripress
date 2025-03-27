<script setup>
import {reactive} from 'vue'
import {RouterLink} from 'vue-router'
import useUserStore from '@/stores/user.js'

const userStore = useUserStore()
const user = reactive({
    email: '',
    password: '',
    verificationCode: '',
})
const getCode = async () => {
    const request = {
        type: 2,
        email: user.email,
    }
    console.log(request)
    await userStore.sendCode(request)
}


const info = ref({})
const getInfo = async () => {
    info.value = (await userStore.getInfo()).data
}
</script>

<template>
    <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
            <v-card
                flat
                class="px-2 pt-2 pb-1"
            >
                <v-card-title>
                    <div class="d-flex justify-space-between">
                        <div class="d-flex align-center">
                            <v-icon size="large" icon="mdi-import"/>
                        </div>
                        <v-btn
                            variant="flat"
                            size="small"
                            flat
                            icon="mdi-close"
                        />
                    </div>
                    <div class="text-h4 mt-1">欢迎登录</div>
                </v-card-title>

                <v-card-text>
                    <v-text-field
                        v-model="user.email"
                        variant="underlined"
                        model-value="sdddada"
                        label="邮箱"
                    />
                    <v-text-field
                        variant="underlined"
                        label="密码"
                    />
                    <v-text-field
                        v-model="user.verificationCode"
                        variant="underlined"
                        label="验证码"
                    />
                    <v-btn
                        text="获取验证码"
                        block
                        @click="getCode"
                    />
                    <div class="mb-1 d-flex justify-space-between">
                        <v-btn
                            variant="text"
                            text="忘记密码"
                        />
                        <v-btn
                            variant="text"
                            size="default"
                            color="primary"
                            rounded="pill"
                            append-icon="mdi-arrow-right"
                            text="下一步"
                            @click="getInfo"
                        />
                        {{info}}
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

        </v-col>
    </v-row>
</template>

<style scoped>
</style>
