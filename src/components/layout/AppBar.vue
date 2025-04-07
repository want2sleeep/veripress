<script setup>
import useUserStore from '@/stores/user.js'

const userStore = useUserStore()
const menu = ref(false)

const logout = async () => {
    const res = await userStore.logout()
    if (res.success) {
        window.location.reload()
    }
}
</script>

<template>
    <div class="ml-8">
        Veripress
    </div>
    <v-spacer/>
    <div class="mr-8">
        <template v-if="userStore.isLogin">
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
            >
                <template v-slot:activator="{ props }">
                    <v-card
                        class="d-flex align-center pa-2"
                        variant="tonal"
                        flat
                    >
                        <div class="mr-2">
                            {{ userStore.user.name }}
                        </div>
                        <v-avatar
                            v-bind="props"
                            image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        />
                    </v-card>
                </template>
                <v-card>
                    <v-card-text>
                        <div class="mx-auto text-center">
                            <v-avatar image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"/>
                            <p class="text-h6 mt-1">
                                {{ userStore.user.name }}
                            </p>
                            <p class="text-caption mt-1">
                                {{ userStore.user.email }}
                            </p>
                            <v-divider class="my-2"></v-divider>
                            <RouterLink style="color: black" to="/history">
                                <v-btn
                                    variant="text"
                                    text="个人中心"
                                />
                            </RouterLink>
                            <v-divider class="my-2"></v-divider>
                            <v-btn
                                variant="text"
                                text="用户设置"
                            />
                            <v-divider class="my-2"></v-divider>
                            <v-btn
                                variant="text"
                                text="退出登录"
                                @click="logout"
                            />
                        </div>
                    </v-card-text>
                </v-card>
            </v-menu>
        </template>
        <RouterLink v-else to="/login">
            <v-btn
                class="mr-8"
                color="primary"
                variant="elevated"
                text="登录"
            />
        </RouterLink>
    </div>
</template>

<style scoped>

</style>
