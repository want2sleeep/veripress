// Utilities
import { createPinia } from 'pinia'
import { useUserStore } from './user'
import {useRouter} from 'vue-router'

const pinia = createPinia()

// 在每个 Store 初始化时都会调用这个插件
pinia.use( async ({ store }) => {
    if (store.$id === 'user') {
        const userStore = useUserStore()
        if (userStore.isLogin) {
            const success = await userStore.getSelfInfo()
            if (!success) {
                const router = useRouter()
                router.push('/login')
            }
        }
    }
})

export default pinia
