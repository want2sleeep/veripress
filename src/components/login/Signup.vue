<script setup></script>

<template>
    <v-card flat style="padding: 20px">
        <v-card-title class="mb-2">
            <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    <v-icon size="x-large" icon="mdi-resistor" />
                    <div
                        class="text-h4 mt-1 font-weight-bold"
                        style="margin-left: 10px"
                    >
                        注册账户
                    </div>
                </div>
                <v-btn
                    variant="flat"
                    size="x-small"
                    class="text-blue"
                    flat
                    icon="mdi-close"
                />
            </div>
        </v-card-title>

        <v-card-text>
            <v-text-field
                variant="underlined"
                model-value="sdddada"
                label="邮箱"
            />
            <v-text-field variant="underlined" label="密码" />
            <v-text-field variant="underlined" label="确认密码" />
            <v-text-field variant="underlined" label="验证码">
                <template v-slot:append>
                    <v-btn
                        rounded="xl"
                        height="40"
                        variant="text"
                        color="yellow-lighten-2"
                        density="comfortable"
                        class="text-h6 font-weight-bold"
                        text="获取验证码"
                        block
                    />
                </template>
            </v-text-field>
            <v-btn
                rounded="xl"
                height="40"
                variant="flat"
                color="yellow-lighten-2"
                density="comfortable"
                class="text-h6 font-weight-bold text-blue"
                text="立即注册"
                block
            />
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
