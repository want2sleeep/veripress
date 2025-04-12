import {defineStore} from 'pinia'
import Partition from '@/data/partition.js'

export const useTabStore = defineStore('tab', () => {
    // state
    const tab = reactive({
        tabList: Partition,
        activeTab: '',
    })

    return {
        tab
    }
})

export default useTabStore
