<script setup>

</script>

<template>
    <v-card
        flat
        class="px-2 pt-2 pb-1"
    >
        <v-card-title class="mb-2">
            <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                    <v-icon size="large" icon="mdi-resistor"/>
                </div>
                <v-btn
                    variant="flat"
                    size="small"
                    flat
                    icon="mdi-close"
                />
            </div>
            <div class="text-h4 mt-1">注册账户</div>
        </v-card-title>

        <v-card-text>
            <v-text-field
                variant="underlined"
                model-value="sdddada"
                label="邮箱"
            />
            <v-text-field
                variant="underlined"
                label="密码"
            />
            <v-text-field
                variant="underlined"
                label="确认密码"
            />
            <v-text-field
                variant="underlined"
                label="验证码"
            >
                <template v-slot:append>
                    <v-btn
                        text="获取验证码"
                        block
                    />
                </template>
            </v-text-field>
            <v-btn
                variant="outlined"
                size="default"
                color="primary"
                text="立即注册"
                block
            />
        </v-card-text>
    </v-card>
</template>

<style scoped>

</style>
