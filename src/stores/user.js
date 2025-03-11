import axios from 'axios'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
    state: () => ({
        email: '',
        username: '',
        token: '',
    }),

    getters: {
        hello: (state) => 'Hello!' + state.username,
    },

    actions: {
        async login(userData) {
            try {
                console.log('Attempting to log in with:', userData)
                const result = await axios.post('/api/user/login', userData)
                console.log('Login response:', result.data)
                const { data, code } = result.data
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
        logout() {
            this.token = ''
            this.username = ''
        },
    },
})

export default useUserStore
