<template>
    <v-card class="mx-auto" rounded="xl" color="blue">
        <v-card-text class="text-blue-darken-4 text-h6 font-weight-bold"
            >FackRate
        </v-card-text>

        <v-card-text class="py-0">
            <v-row align="center" no-gutters
                ><FackRateCircle></FackRateCircle>
                <!--   <v-col class="text-h3 text-yellow-lighten-2" cols="6">

                </v-col>

                <v-col class="text-right" cols="6">
                    <v-icon
                        color="yellow-lighten-3"
                        icon="mdi-alert-circle"
                        size="60"
                    ></v-icon>
                </v-col> -->
            </v-row>
        </v-card-text>

        <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-image-off" c>
                <v-list-item-subtitle>23%</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-text-box-remove">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
        </div>

        <v-expand-transition>
            <div v-if="expand">
                <div class="py-2">
                    <v-slider
                        v-model="time"
                        :max="6"
                        :step="1"
                        :ticks="labels"
                        class="mx-4"
                        color="primary"
                        density="compact"
                        show-ticks="always"
                        thumb-size="10"
                        hide-details
                    ></v-slider>
                </div>

                <!-- <v-list class="bg-transparent">
                    <v-list-item
                        v-for="item in forecast"
                        :key="item.day"
                        :append-icon="item.icon"
                        :subtitle="item.temp"
                        :title="item.day"
                    >
                    </v-list-item>
                </v-list> -->
            </div>
        </v-expand-transition>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
            <v-btn
                class="text-blue-darken-4"
                :icon="!expand ? 'mdi-menu-down' : 'mdi-menu-up'"
                @click="expand = !expand"
            ></v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { ref } from "vue";
import FackRateCircle from "./FackRateCircle.vue";

const labels = {
    0: "SU",
    1: "MO",
    2: "TU",
    3: "WED",
    4: "TH",
    5: "FR",
    6: "SA",
};
const forecast = [
    {
        day: "Tuesday",
        icon: "mdi-white-balance-sunny",
        temp: "24\u00B0/12\u00B0",
    },
    {
        day: "Wednesday",
        icon: "mdi-white-balance-sunny",
        temp: "22\u00B0/14\u00B0",
    },
    { day: "Thursday", icon: "mdi-cloud", temp: "25\u00B0/15\u00B0" },
];

const expand = ref(false);
const time = ref(0);
</script>

<!-- <template>
    <v-sheet class="d-flex align-center flex-column" color="transparent">
        <div
            class="d-flex flex-column align-center"
            @mouseenter="show = true"
            @mouseleave="show = false"
        >
            <v-btn
                value="rate"
                icon="mdi-alert"
                size="60"
                variant="elevated"
                color="yellow-lighten-2"
                class="text-blue-darken-1 text-h5"
                ><v-icon></v-icon>
            </v-btn>

            <span class="text-yellow-lighten-2 text-h6" style="margin-top: 5px"
                >99%</span
            >

            <v-expand-transition>
                <v-card
                    v-if="show"
                    rounded="xl"
                    color="yellow-lighten-2"
                    class="pa-4 mt-2"
                    style="
                        width: 100%;
                        position: absolute;
                        z-index: 10;
                        top: 100px;
                    "
                >
                    <v-card-title>虚假率</v-card-title>
                    <v-card-text>关于虚假率的详细信息</v-card-text>
                </v-card>
            </v-expand-transition>
        </div>
    </v-sheet>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        const show = ref(false);
        return { show };
    },
};
</script>
 -->
