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
// import {useUserStore} from '../stores/user.js'

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

// router.beforeEach((to, from, next) => {
//     const store = useUserStore()
//     let isAuthenticated = store.isAuthenticated
//     if (to.name !== "login" && to.name !== "signup" && !isAuthenticated) {
//         next({name: 'login'})
//     }
//     else if (to.name === "login" && isAuthenticated) {
//         next({name: 'home'})
//     }
//     else {
//         next()
//     }
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
