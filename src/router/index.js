/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import {createRouter, createWebHistory} from 'vue-router/auto'
import {setupLayouts} from 'virtual:generated-layouts'
import {routes} from 'vue-router/auto-routes'
import NotFound from '../pages/http/NotFound.vue'
import {useUserStore} from '@/stores/user.js'
import publicPages from '@/router/publicPages.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        ...setupLayouts(routes),
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const authRequired = !publicPages.includes(to.name)
    console.log('导航到 →', to.name, '----------', to.path)

    if (authRequired && !userStore.isLogin) {  // 未登录用户访问需要登录的页面
        next({path: '/login'})
    }
    if (!authRequired && userStore.isLogin) {  // 已登录用户访问登录/注册页，跳首页
        return next({path: '/dashboard'})
    }
    next()
})


// router.beforeEach(async (to, from, next) => {
//     const store = useUserStore()

// 1. 如果有 token 但还没取到用户详情，先拉一次
// if (store.user.token && !store.user.id) {
//     try {
//         await store.getInfo()
//     } catch {
//         await store.logout()
//         return next({ name: 'login' })
//     }
// }

// 2. 鉴权拦截
//     const publicPages = ['login', 'signup']
//     const authRequired = !publicPages.includes(to.name)
//     if (authRequired && !store.isLogin) {
//         return next({ name: 'login' })
//     }
//
//     // 3. 已登录用户访问登录/注册页，跳首页
//     if (publicPages.includes(to.name) && store.isLogin) {
//         return next({ name: 'home' })
//     }
//
//     // 4. 其它情况放行
//     next()
// })

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.log('Reloading page to fix dynamic import error')
            localStorage.setItem('vuetify:dynamic-reload', 'true')
            location.assign(to.fullPath)
        } else {
            console.error('Dynamic import error, reloading page did not fix it', err)
        }
    } else {
        console.error(err)
    }
})

router.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
