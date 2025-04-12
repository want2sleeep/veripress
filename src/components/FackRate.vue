<script setup>
import {fetchFackRate} from '@/stores/newsService'
import {onBeforeUnmount, onMounted, ref} from 'vue'

const props = defineProps({
    fakeRate: String,
    passageId: String,
})

const value = ref(0)
const fackDetail = ref({})

let interval = -1


onMounted(async () => {
    if (props.passageId) {
        fackDetail.value = await fetchFackRate(props.passageId)
    }
    interval = setInterval(() => {
        if (value.value === fackDetail.value.data.fakeRate) {
            clearInterval(interval)
        }
        value.value += 1
    }, 1)
})
onBeforeUnmount(() => {
    clearInterval(interval)
})
</script>

<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>

<template>
    <v-card
        class="mx-auto"
        color="transparent"
        elevation="0"
        style="padding: 5px"
    >
        <v-card class="py-0" color="transparent" elevation="0">
            <v-card-text class="text-blue text-h6 font-weight-bold">
                文章虚假率
            </v-card-text>
            <div class="text-center">
                <v-progress-circular
                    :model-value="fakeRate"
                    :rotate="360"
                    :size="120"
                    :width="15"
                    color="blue"
                    class="text-h5 font-weight-bold"
                >
                    <template v-slot:default>
                        {{ fakeRate ? fakeRate + '%' : '检测失败' }}
                    </template>
                </v-progress-circular>
            </div>
        </v-card>
    </v-card>
</template>
