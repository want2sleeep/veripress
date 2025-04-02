import { defineStore } from 'pinia'

export const useAStore = defineStore('a', () => {
    // state
    const user = {
        id: '',
        name: '',
        image: '',
        signature: '',
    }

    // actions
    const hello = () => {
        console.log('Hello!', user.name)
    }

    return {
        user,
        hello,
    }
})
