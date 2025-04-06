<script setup>
import { ref, defineEmits, inject } from "vue";

const email = inject("email");
const rules = {
    email: [(v) => /.+@.+\..+/.test(v) || "请输入有效的邮箱地址"],
};
const emit = defineEmits(["navigate", "submit"]);

const handleSubmit = () => {
    if (!email.value) return;
    emit("submit", { email: email.value });
    emit("navigate", "ChooseWay");
};
</script>

<template>
    <v-card flat style="padding: 20px">
        <v-card-title>
            <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                    <v-icon size="large" icon="mdi-login" />
                    <div
                        class="text-h4 mt-1 font-weight-bold"
                        style="margin: 0 10px"
                    >
                        欢迎登录
                    </div>
                </div>
                <RouterLink to="/">
                    <v-btn
                        variant="flat"
                        size="small"
                        flat
                        density="comfortable"
                        icon="mdi-close"
                        class="text-blue-darken-2"
                    />
                </RouterLink>
            </div>
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
                    rounded="xl"
                    height="40"
                    variant="flat"
                    color="yellow-lighten-2"
                    density="comfortable"
                    class="text-blue text-h6 font-weight-bold"
                    @click="$emit('navigate', 'Signup')"
                    >立即注册</v-btn
                >
                <v-btn
                    variant="text"
                    size="default"
                    color="yellow-lighten-2"
                    class="font-weight-bold text-h6"
                    rounded="pill"
                    append-icon="mdi-arrow-right"
                    text="下一步"
                    @click="handleSubmit"
                />
            </div>
            <div class="text-blue-lighten-4" style="margin: 20px 0 0 0">
                点击“下一步”，即表示您已阅读并同意我们的各项条款，包括其之后的更新。
            </div>

            <div class="d-flex justify-end">
                <RouterLink to="/">
                    <v-btn
                        variant="text"
                        class="font-weight-bold"
                        color="yellow-lighten-4"
                        append-icon="mdi-arrow-top-right"
                        text="浏览条款"
                    />
                </RouterLink>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
