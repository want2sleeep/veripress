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
        const {userId, username, accessToken} = res.data.data

        user.email = req.email
        user.id = userId
        user.name = username
        user.token = accessToken

        localStorage.setItem('token', accessToken)

        await getInfo(userId)
        return res.data
    }
    const logout = async function () {
        const res = await User.onLogout()
        return res.data
    }
    const sendCode = () => {
        return 'sendCode'
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
    }
})

export default useUserStore
