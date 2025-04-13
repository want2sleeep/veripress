<script setup>
import useUserStore from "@/stores/user.js";
import Home from "@/pages/home.vue";
import useTabStore from "@/stores/tab.js";

defineProps({
    system: Boolean,
});

const userStore = useUserStore();
const menu = ref(false);
const tabStore = useTabStore();

const logout = async () => {
    const res = await userStore.logout();
    if (res.success) {
        window.location.reload();
    }
};
</script>

<template>
    <RouterLink
        to="/"
        class="d-flex align-center text-white"
        style="text-decoration: none"
    >
        <div class="ml-8 font-weight-bold text-h6">
            Veripress 慧析新闻虚假检测平台
        </div>
    </RouterLink>

    <v-spacer />

    <v-tabs
        class="text-yellow-lighten-3"
        v-if="system"
        v-model="tabStore.tab.activeTab"
    >
        <v-tab
            style="font-size: 20px; font-weight: 600"
            v-for="(item, index) in tabStore.tab.tabList"
            :key="index"
            :text="item.text"
            :value="item.text"
            :to="(item.value > 0 ? '/partition/' : '/') + item.path"
        />
    </v-tabs>

    <v-spacer />

    <div class="mr-8">
        <template v-if="userStore.isLogin">
            <v-menu v-model="menu" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <v-card
                        class="d-flex align-center pa-2"
                        variant="tonal"
                        flat
                    >
                        <div class="mr-2 text-white font-text6">
                            {{ userStore.user.name }}
                        </div>
                        <v-avatar
                            v-bind="props"
                            :image="userStore.user.image"
                        />
                    </v-card>
                </template>
                <v-card class="bg-yellow-lighten-3" rounded="xl">
                    <v-card-text>
                        <div class="mx-auto text-center text-blue-darken-3">
                            <v-avatar :image="userStore.user.image" />
                            <p class="text-h6 mt-1">
                                {{ userStore.user.name }}
                            </p>
                            <p class="text-caption mt-1">
                                {{ userStore.user.email }}
                            </p>
                            <v-divider class="my-2"></v-divider>
                            <RouterLink style="color: black" to="/user">
                                <v-btn
                                    variant="text"
                                    class="text-blue-darken-3"
                                    text="个人中心"
                                />
                            </RouterLink>
                            <v-divider class="my-2"></v-divider>
                            <v-btn
                                variant="text"
                                text="退出登录"
                                class="text-blue text-h6"
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

<style scoped></style>
