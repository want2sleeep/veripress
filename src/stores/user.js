import {defineStore} from 'pinia'
import service from '@/utils/request.js'

const useUserStore = defineStore('user', {
    state: () => ({
        email: '',
        username: '',
        password: '',
        token: '',
    }),

    getters: {
        hello: (state) => 'Hello!' + state.username,
    },

    actions: {
        async login(userData) {
            try {
                console.log('Attempting to log in with:', userData)
                const result = await service.post('/api/user/login', userData)
                console.log('Login response:', result.data)
                const {data, code} = result.data
                if (code === 0 && data) {
                    this.username = data.username
                    this.token = data.token
                    console.log('Login successful, setting username and token:', this.username, this.token)
                } else {
                    console.error('Invalid response data:', result.data)
                }
            } catch (error) {
                console.error('Login failed:', error)
            }
        },

        async getInfo() {
            const result = await service.get('/user-service/v1/user', {params: {userId: 1}})
            return result
        },

        async sendCode(data) {
            const result = await service.post('/user-service/v1/send-verify-code', data)
            const {code} = result.data
            if (code === '200') {
                console.log('验证码发送成功')
            }
        },
        logout() {
            this.token = ''
            this.username = ''
        },

        async signup(userData) {
            try {
                console.log('Attempting to sign up with:', userData)
                const result = await service.post('/api/user/signup', userData)
                console.log('Signup response:', result.data)
                const {data, code} = result.data
                if (code === 0 && data) {
                    this.username = data.username
                    this.token = data.token
                    console.log('Signup successful, setting username and token:', this.username, this.token)
                } else {
                    console.error('Invalid response data:', result.data)
                }
            } catch (error) {
                console.error('Signup failed:', error)
            }
        },

    },
})

export default useUserStore
