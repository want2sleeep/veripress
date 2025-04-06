<template>
    <v-card
        class="mx-auto"
        rounded="xl"
        color="yellow-lighten-2"
        style="padding: 5px"
    >
        <v-card class="py-0" color="transparent" elevation="0">
            <v-card-text class="text-blue text-h6 font-weight-bold"
                >文章虚假率
            </v-card-text>
            <div class="text-center">
                <v-progress-circular
                    :model-value="value"
                    :rotate="360"
                    :size="120"
                    :width="15"
                    color="blue"
                    class="text-h5 font-weight-bold"
                >
                    <template v-slot:default> {{ value }} % </template>
                </v-progress-circular>
            </div>
        </v-card>
    </v-card>
</template>

<script setup>
import { fetchFackRate } from "@/stores/newsService";
import { onBeforeUnmount, onMounted, ref } from "vue";
import service from "@/utils/request.js";
const props = defineProps({
    passageId: String,
});

const value = ref(0);
const fackDetail = ref({});

let interval = -1;

const b = async () => {
    const res = await service.get("/passage-service/v1/fake_reason/1", {
        header: {
            userId: 4,
        },
    });
    console.log(res.data.data);
    return res;
};

onMounted(async () => {
    console.log("bbbbbbbbbbbbbbb");
    await b();
    console.log("cccccccccccccccccccc");
    if (props.passageId) {
        fackDetail.value = await fetchFackRate(props.passageId);
        //console.log(fackDetail.value);
    }
    interval = setInterval(() => {
        if (value.value === fackDetail.value.data.fakeRate) {
            clearInterval(interval);
        }
        value.value += 1;
    }, 1);
});
onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>
