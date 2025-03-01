<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <v-container
        fluid
        class="fill-height"
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                sm="8"
                md="6"
                lg="4"
            >
                <v-card
                    class="elevation-12 rounded-lg"
                >
                    <v-card-title
                        class="text-center pt-8 pb-4"
                    >
                        <h1 class="text-h4">账号注册</h1>
                    </v-card-title>

                    <v-card-text>
                        <v-form ref="registerForm">
                            <v-text-field
                                label="邮箱"
                                prepend-inner-icon="mdi-email"
                                variant="outlined"
                                required
                            ></v-text-field>

                            <v-row>
                                <v-col cols="7">
                                    <v-text-field
                                        label="验证码"
                                        prepend-inner-icon="mdi-numeric"
                                        variant="outlined"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="5">
                                    <v-btn
                                        block
                                        color="primary"
                                        height="56"
                                    >
                                        {{ '获取验证码' }}
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <v-text-field
                                label="密码"
                                prepend-inner-icon="mdi-lock"
                                variant="outlined"
                                required
                            ></v-text-field>

                            <v-text-field
                                label="确认密码"
                                prepend-inner-icon="mdi-lock-check"
                                variant="outlined"
                                required
                            ></v-text-field>

                            <v-btn
                                block
                                color="primary"
                                size="large"
                                type="submit"
                                class="mt-4"
                            >
                                注册
                            </v-btn>
                        </v-form>
                    </v-card-text>

                    <v-card-actions class="justify-center">
                        已有账号？
                        <RouterLink style="text-decoration: none" to="/login">
                            <v-btn variant="text" color="primary">立即登录</v-btn>
                        </RouterLink>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!--    <v-container fluid class="fill-height bg-grey-lighten-3">-->
    <!--        <v-row align="center" justify="center">-->
    <!--            <v-col cols="12" sm="8" md="6" lg="4">-->
    <!--                <v-card class="elevation-12 rounded-lg">-->
    <!--                    &lt;!&ndash; 卡片标题 &ndash;&gt;-->
    <!--                    <v-card-title class="text-center pt-8 pb-4">-->
    <!--                        <h1 class="text-h4">账号注册</h1>-->
    <!--                    </v-card-title>-->

    <!--                    &lt;!&ndash; 注册表单 &ndash;&gt;-->
    <!--                    <v-card-text>-->
    <!--                        <v-form ref="registerForm">-->
    <!--                            &lt;!&ndash; 邮箱输入框 &ndash;&gt;-->
    <!--                            <v-text-field-->

    <!--                                label="邮箱"-->
    <!--                                prepend-inner-icon="mdi-email" variant="outlined" required-->
    <!--                            ></v-text-field>-->

    <!--                            &lt;!&ndash; 验证码 &ndash;&gt;-->
    <!--                            <v-row>-->
    <!--                                <v-col cols="7">-->
    <!--                                    <v-text-field-->
    <!--                                        label="验证码"-->
    <!--                                        prepend-inner-icon="mdi-numeric" variant="outlined" required-->
    <!--                                    ></v-text-field>-->
    <!--                                </v-col>-->
    <!--                                <v-col cols="5">-->
    <!--                                    <v-btn block color="primary"-->
    <!--                                           height="56"-->

    <!--                                    >-->
    <!--                                        {{ '获取验证码' }}-->
    <!--                                    </v-btn>-->
    <!--                                </v-col>-->
    <!--                            </v-row>-->

    <!--                            &lt;!&ndash; 密码输入框 &ndash;&gt;-->
    <!--                            <v-text-field-->
    <!--                                label="密码"-->
    <!--                                prepend-inner-icon="mdi-lock"-->
    <!--                                variant="outlined"-->
    <!--                                required-->
    <!--                            ></v-text-field>-->

    <!--                            &lt;!&ndash; 确认密码 &ndash;&gt;-->
    <!--                            <v-text-field-->
    <!--                                label="确认密码"-->
    <!--                                prepend-inner-icon="mdi-lock-check"-->
    <!--                                variant="outlined"-->
    <!--                                required-->
    <!--                            ></v-text-field>-->

    <!--                            &lt;!&ndash; 注册按钮 &ndash;&gt;-->
    <!--                            <v-btn block color="primary" size="large" type="submit" class="mt-4">-->
    <!--                                注册-->
    <!--                            </v-btn>-->
    <!--                        </v-form>-->
    <!--                    </v-card-text>-->

    <!--                    &lt;!&ndash; 其他操作链接 &ndash;&gt;-->
    <!--                    <v-card-actions class="justify-center pb-6">-->
    <!--                        <v-btn variant="text" color="primary" :to="{ name: 'login' }">-->
    <!--                            已有账号？立即登录-->
    <!--                        </v-btn>-->
    <!--                    </v-card-actions>-->
    <!--                </v-card>-->
    <!--            </v-col>-->
    <!--        </v-row>-->

    <!--        &lt;!&ndash; 提示消息 &ndash;&gt;-->
    <!--        &lt;!&ndash;        <v-snackbar v-model="snackbar.show" :color="snackbar.color">&ndash;&gt;-->
    <!--        &lt;!&ndash;            {{ snackbar.text }}&ndash;&gt;-->
    <!--        &lt;!&ndash;        </v-snackbar>&ndash;&gt;-->
    <!--    </v-container>-->

</template>


<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>
<script setup lang="ts">
</script>
