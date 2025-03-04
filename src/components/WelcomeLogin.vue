<script setup>

</script>

<template>
    <v-card class="px-2 pt-2 pb-1">
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
            <h1 class="mt-1">欢迎登录</h1>
        </v-card-title>

        <v-card-text>
            <v-text-field
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
                    color="primary"
                    rounded="pill"
                    append-icon="mdi-arrow-right"
                    text="下一步"
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
