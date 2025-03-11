<script setup>
import {ref, reactive} from 'vue'
import useUserStore from '@/stores/user.js'

const text = ref('')
const img = ref('')
let items

const copy = (event) => {
    items = event.clipboardData.items
    console.log(items)

    for (const item of items) {
        if (item.type.startsWith('image')) {
            // const blob = item.getAsFile()
            // const reader = new FileReader()
            //
            // reader.onload = () => {
            //     img.value = reader.result
            // }
            //
            // reader.readAsDataURL(blob)

            const blob = item.getAsFile()
            if (blob) {
                const url = URL.createObjectURL(blob)
                img.value = url
            }
        }
    }
}

const userData = reactive({
    username: '',
    password: '',
})
const userStore = useUserStore()
const onLogin = async () => {
    await userStore.login(userData)
    userData.username = ''
    userData.password = ''
}
const onLogout = () => {
    userStore.logout()
}
</script>

<template>
    <v-textarea
        v-model="text"
        label="Label"
        @paste="copy"
    />

    {{ items }}

    <v-img :src="img" v-if="img"/>

    <div v-if="userStore.token">
        {{ userStore.username }}
        <br />
        <v-btn @click="onLogout">Logout</v-btn>
    </div>
    <div v-else>
        <v-text-field v-model="userData.username" label="Username" />
        <v-text-field v-model="userData.password" label="Password" type="password" />
        <v-btn @click="onLogin">Login</v-btn>
    </div>
    <v-btn @click="testmock">test mock</v-btn>
</template>

<route lang="yaml">
meta:
layout: "TestLayout"
</route>

<style scoped>

</style>
