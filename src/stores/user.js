import {defineStore} from 'pinia'
import {reactive, computed} from 'vue'
import User from '@/api/user.js'

export const useUserStore = defineStore('user', () => {
    // state
    const user = reactive({
        id: '',
        name: '',
        email: '',
        image: '',
        signature: '',
        token: localStorage.getItem('token') || '',
    })

    // getter
    const isLogin = computed(() => !!user.token)

    // actions
    const login = async (req) => {
        const res = await User.onLogin(req)
        const {accessToken} = res.data.data

        user.token = accessToken
        localStorage.setItem('token', accessToken)

        await getSelfInfo()
        return res.data
    }
    const logout = async function () {
        const res = await User.onLogout()
        localStorage.removeItem('token')
        Object.assign(user, {
            id: '',
            name: '',
            email: '',
            image: '',
            signature: '',
            token: '',
        })
        return res.data
    }
    const sendCode = () => {
        return 'sendCode'
    }
    const getSelfInfo = async () => {
        const res = await User.onGetSelfInfo()
        const {userId, username, email, image, signature} = res.data.data

        Object.assign(user, {
            id: userId,
            name: username,
            email: email,
            image: image,
            signature: signature,
        })

        return res.data
    }
    const getInfo = async (id) => {
        const res = await User.onGetInfo(id)
        const {image, signature} = res.data.data

        user.image = image
        user.signature = signature

        return res.data.data
    }

    return {
        user,
        isLogin,
        login,
        logout,
        getInfo,
        getSelfInfo,
    }
})

export default useUserStore
