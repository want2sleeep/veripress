<script setup>
const methods = [
    {
        id: "password",
        text: "密码",
        icon: "mdi-lock-outline",
    },
    {
        id: "code",
        text: "验证码",
        icon: "mdi-email-fast-outline",
    },
];
const emit = defineEmits(["navigate", "select"]);
const method = ref(null);

const handleSubmit = () => {
    if (!method.value) return;
    emit("select", method.value);
    emit(
        "navigate",
        method.value.id === "password" ? "Password" : "VerifyCode"
    );
};
</script>

<template>
    <v-card flat style="padding: 20px">
        <v-card-title>
            <div
                class="d-flex justify-space-between align-center"
                style="height: 60px"
            >
                <div class="d-flex">
                    <v-icon
                        icon="mdi-account-multiple-outline"
                        size="x-large"
                    />
                    <div
                        class="text-h4 font-weight-bold"
                        style="margin-left: 15px"
                    >
                        选择登录方式
                    </div>
                </div>
                <v-btn
                    flat
                    class="text-blue"
                    icon="mdi-arrow-left"
                    density="comfortable"
                    size="small"
                    @click="emit('navigate', 'Email')"
                >
                </v-btn>
            </div>
        </v-card-title>

        <v-list
            class="mx-4 px-2 pt-2 pb-0"
            rounded="xl"
            style="margin-top: 10px"
        >
            <v-list-item
                class="mb-2"
                v-for="item in methods"
                :key="item.id"
                :value="item.id"
                rounded="pill"
                color="primary"
                @click="method = item"
            >
                <template v-slot:prepend>
                    <v-icon :icon="item.icon" />
                </template>

                <v-list-item-title v-text="item.text" />

                <template v-slot:append="{ isSelected }">
                    <v-spacer></v-spacer>
                    <v-icon
                        v-if="isSelected"
                        class="text-blue"
                        icon="mdi-checkbox-marked"
                    />
                    <v-icon
                        v-else
                        class="opacity-30"
                        icon="mdi-checkbox-blank-outline"
                    />
                </template>
            </v-list-item>
        </v-list>

        <v-card-actions class="pr-4">
            <v-spacer />
            <v-btn
                variant="text"
                rounded="pill"
                color="yellow-lighten-2"
                width="100px"
                class="text-h6 font-weight-bold"
                append-icon="mdi-arrow-right"
                :disabled="!method"
                @click="handleSubmit"
            >
                下一步
                <v-tooltip v-if="!method" activator="parent" location="top">
                    请先选择登录方式
                </v-tooltip>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
::v-deep .v-list {
    background-color: #f5f5f5 !important;
}
</style>
