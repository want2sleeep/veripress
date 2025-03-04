<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <v-container class="text-center">
        <v-row justify="center">
            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/login">
                    <v-btn rounded="xs" size="x-large" block>login</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/signup">
                    <v-btn rounded="xs" size="x-large" block>signup</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/forgetPassword">
                    <v-btn rounded="xs" size="x-large" block
                        >forget-password</v-btn
                    >
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/test">
                    <v-btn rounded="xs" size="x-large" block>test</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/forgetPassword">
                    <v-btn rounded="xs" size="x-large" block>forget-password</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/forgetPassword">
                    <v-btn rounded="xs" size="x-large" block>forget-password</v-btn>
                </RouterLink>
            </v-col>

            <v-col cols="12" md="4" sm="6">
                <RouterLink style="text-decoration: none" to="/home">
                    <v-btn rounded="xs" size="x-large" block>home</v-btn>
                </RouterLink>
            </v-col>
        </v-row>
    </v-container>
</template>
