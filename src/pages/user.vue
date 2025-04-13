<script setup>
import useUserStore from "@/stores/user.js";

const userStore = useUserStore();
</script>

<template>
    <v-container
        class="pa-2"
        style="margin: auto; margin-top: 40px"
        max-width="60vw"
    >
        <v-card rounded="xl" flat>
            <v-img
                class="text-white"
                height="500px"
                src="https://images.pexels.com/photos/31356866/pexels-photo-31356866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cover
            >
                <div class="d-flex flex-column h-100">
                    <v-spacer></v-spacer>

                    <div class="d-flex justify-center">
                        <v-avatar size="100" :image="userStore.user.image" />
                    </div>

                    <v-card-title class="pb-6 text-center">
                        <div class="text-h4">个人中心</div>
                    </v-card-title>
                </div>
            </v-img>

            <v-list
                lines="two"
                class="bg-yellow-lighten-4 text-blue-darken-4 text-h6"
            >
                <v-list-item>
                    <template v-slot:prepend>
                        <v-avatar>
                            <v-icon color="indigo" icon="mdi-account"></v-icon>
                        </v-avatar>
                    </template>

                    <v-list-item-title>{{
                        userStore.user.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle>用户名</v-list-item-subtitle>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <template v-slot:prepend>
                        <v-avatar>
                            <v-icon color="indigo" icon="mdi-email"></v-icon>
                        </v-avatar>
                    </template>

                    <v-list-item-title>{{
                        userStore.user.email
                    }}</v-list-item-title>
                    <v-list-item-subtitle>邮箱</v-list-item-subtitle>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <template v-slot:prepend>
                        <v-avatar>
                            <v-icon color="indigo" icon="mdi-key"></v-icon>
                        </v-avatar>
                    </template>

                    <v-list-item-title>********</v-list-item-title>
                    <v-list-item-subtitle>密码</v-list-item-subtitle>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <template v-slot:prepend>
                        <v-avatar>
                            <v-icon
                                color="indigo"
                                icon="mdi-information"
                            ></v-icon>
                        </v-avatar>
                    </template>

                    <v-list-item-title>{{
                        userStore.user.signature
                    }}</v-list-item-title>
                    <v-list-item-subtitle>个性签名</v-list-item-subtitle>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-btn
                        class="text-h7 text-blue-darken-4"
                        color="blue-lighten-4"
                        block
                        text="修改个人信息"
                        rounded
                    />
                </v-list-item>
                <v-list-item>
                    <v-btn color="blue" rounded block text="退出登录" />
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>
<style scoped></style>

<route lang="yaml">
meta:
    layout: system
</route>
