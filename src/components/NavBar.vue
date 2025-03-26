<script setup>
import { ref } from "vue";
const logined = ref(false);

const login = () => {
    logined.value = true;
};
</script>

<template>
    <v-app-bar
        style="
            background: linear-gradient(to left, #1565c0, #308ae3fb, #42a5f5);
        "
    >
        <RouterLink to="/">
            <v-btn class="ml-2" color="yellow-lighten-3"> back to index </v-btn>
        </RouterLink>

        <v-spacer />

        <v-tabs class="text-yellow-lighten-3">
            <v-tab
                text="首页"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>

            <v-tab
                text="热点"
                style="font-size: 20px; font-weight: 600"
                to="/hotshow"
            ></v-tab>

            <v-tab
                text="国际"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
            <v-tab
                text="国内"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
            <v-tab
                text="社会"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
            <v-tab
                text="经济"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
            <v-tab
                text="文娱"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
            <v-tab
                text="科技"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
            <v-tab
                text="法治"
                style="font-size: 20px; font-weight: 600"
            ></v-tab>
        </v-tabs>
        <v-spacer />

        <v-btn
            class="mr-5"
            variant="flat"
            @click="login"
            v-if="!logined"
            style="background: linear-gradient(to right, #ffee58, #fff59d)"
        >
            登录
        </v-btn>
        <span class="mr-4" v-if="logined">
            <span class="mr-2"> John Doe </span>
            <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
            </v-avatar>
        </span>
    </v-app-bar>
</template>
