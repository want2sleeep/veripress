<script setup>
import {reactive, ref} from 'vue'
import useUserStore from '@/stores/user.js'

const otp = ref('')
const user = reactive({
    username: '',
    password: '',
    email: '',
})
const userStore = useUserStore()
const onLogin = async () => {
    await userStore.login(user)
    user.username = ''
    user.password = ''
}
const onLogout = () => {
    userStore.logout()
}
const chooseWay1 = ref(false)
const chooseWay2 = ref(false)
const setChooseWay1 = () => {
    chooseWay1.value = true
}
const setChooseWay2 = () => {
    chooseWay2.value = true
}
const email = ref('')
const rules = {
    min: v => {
        return v.length >= 3 || 'Min 3 chars'
    },
}
const items = [
    {
        text: '密码',
        icon: 'mdi-lock-outline',
    },
    {
        text: '验证码',
        icon: 'mdi-email-fast-outline',
    },
]
</script>

<template>
    <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
            <v-card
                v-if="chooseWay1 === false && chooseWay2 === false"
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
                        v-model="email"
                        :rules="[rules.min]"
                        variant="underlined"
                        label="邮箱"
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
                            @click="setChooseWay1"
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

            <v-card
                v-if="chooseWay1 === true && chooseWay2 === false"
                flat
                class="px-2 pt-2 pb-1"
            >
                <v-card-title>
                    <div class="d-flex justify-space-between">
                        <v-icon
                            icon="mdi-cookie"
                            size="large"
                        />
                        <v-btn
                            flat
                            icon="mdi-arrow-left"
                            size="small"
                            @click="setChooseWay"
                        >
                        </v-btn>
                    </div>

                    <div class="text-h4">
                        选择登录方式
                    </div>
                </v-card-title>

                <v-list
                    class="mx-4 px-2 pt-2 pb-0"
                    rounded="lg"
                    color="pink"
                >
                    <v-list-item
                        class="mb-2"
                        v-for="(item, index) in items"
                        :key="index"
                        :value="item"
                        rounded="pill"
                        color="primary"
                    >
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"/>
                        </template>

                        <template v-slot:append="{ isSelected }">
                            <small class="mb-4 text-high-emphasis opacity-60">{{ item.action }}</small>
                            <v-spacer></v-spacer>
                            <v-icon
                                v-if="isSelected"
                                color="primary"
                                icon="mdi-checkbox-marked"
                            />
                            <v-icon
                                v-else
                                class="opacity-30"
                                icon="mdi-checkbox-blank-outline"
                            />
                        </template>

                        <v-list-item-title v-text="item.text"/>

                    </v-list-item>
                </v-list>
                <v-card-actions class="pr-4">
                    <v-spacer/>
                        <v-btn
                            variant="text"
                            rounded="pill"
                            color="primary"
                            width="100px"
                            append-icon="mdi-arrow-right"
                            @click="setChooseWay2"
                            text="下一步"
                        />
                </v-card-actions>
            </v-card>

            <v-card
                flat
                v-if="chooseWay1 && chooseWay2"
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
                            @click="setChooseWay"
                        >
                        </v-btn>
                    </div>
                    <div class="text-h4">
                        验证你的账户
                    </div>
                </v-card-title>

                <v-card-subtitle class="text-wrap">
                    我们已经向 {{ email }} 发送了一个验证码，请检查你的邮箱并粘贴下面的验证码。
                </v-card-subtitle>

                <v-card-text>
                    <v-otp-input
                        v-model="otp"
                        variant="solo"
                    />
                </v-card-text>
                <v-card-actions class="d-flex align-content-center">
                    <v-spacer/>
                    没有收到验证码？
                    <RouterLink to="/">
                        <v-btn
                            variant="text"
                            class="font-weight-bold"
                            color="black"
                            text="重新发送"
                            @click.prevent="otp = ''"
                        />
                    </RouterLink>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
::v-deep .v-list {
    background-color: #F5F5F5 !important;
}
</style>
