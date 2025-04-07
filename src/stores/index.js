// Utilities
import { createPinia } from 'pinia'
import { useUserStore } from './user'

const pinia = createPinia()

// 在每个 Store 初始化时都会调用这个插件
pinia.use( async ({ store }) => {
    if (store.$id === 'user') {
        const userStore = useUserStore()
        if (userStore.isLogin) {
            await userStore.getSelfInfo()
        }
    }
})

export default pinia
