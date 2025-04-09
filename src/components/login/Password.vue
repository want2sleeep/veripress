<script setup>
import { ref, defineEmits, inject } from "vue";
import useUserStore from '@/stores/user.js'
import {useRouter} from 'vue-router'

const email = inject("email");
const password = ref("");
const visible = ref(false);
const loading = ref(false);
const emit = defineEmits(["navigate"]);
const rules = {
    email: [
        (v) => !!v || "邮箱不能为空",
        (v) => /.+@.+\..+/.test(v) || "请输入有效的邮箱地址",
    ],
    password: [
        (v) => !!v || "密码不能为空",
        (v) => v.length >= 6 || "密码至少6位",
    ],
}
const userStore = useUserStore()
const router = useRouter()

const login = async () => {
    loading.value = true
    const {success} = await userStore.login({
        email: email.value,
        password: password.value,
        loginType: 0,
    })
    if (success) {
        await router.push('/dashboard')
    }
    loading.value = false
}

</script>

<template>
    <v-card flat style="padding: 20px">
        <v-card-title class="mb-2">
            <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    <v-icon size="x-large" icon="mdi-lock-outline" />
                    <div
                        class="text-h4 mt-1 font-weight-bold"
                        style="margin-left: 10px"
                    >
                        请输入密码
                    </div>
                </div>
                <v-btn
                    class="text-blue"
                    variant="flat"
                    size="x-small"
                    flat
                    icon="mdi-arrow-left"
                    @click="emit('navigate', 'ChooseWay')"
                />
            </div>
        </v-card-title>

        <v-card-text>
            <v-text-field
                variant="underlined"
                v-model="email"
                clearable
                label="邮箱"
            />
            <v-text-field
                variant="underlined"
                v-model="password"
                :type="visible ? 'text' : 'password'"
                :rules="rules.password"
                clearable
                label="密码"
                :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="visible = !visible"
            />
            <div class="mb-1 d-flex justify-space-between">
                <v-btn
                    rounded="xl"
                    height="40"
                    variant="text"
                    color="yellow-lighten-2"
                    density="comfortable"
                    class="text-h6 font-weight-bold"
                    text="忘记密码"
                    @click="emit('navigate', 'ForgetPassword')"
                />
                <v-btn
                    rounded="xl"
                    height="40"
                    variant="flat"
                    color="yellow-lighten-2"
                    density="comfortable"
                    class="text-blue text-h6 font-weight-bold"
                    :loading="loading"
                    text="立即登录"
                    @click="login"
                />
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
