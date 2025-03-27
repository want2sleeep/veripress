<template>
    <v-sheet class="d-flex align-center flex-column" color="transparent">
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
                >
                </v-btn>

                <span
                    class="text-yellow-lighten-2 text-h6"
                    style="margin-top: 5px"
                    >99%</span
                >

                <v-expand-transition>
                    <v-card
                        v-if="show"
                        rounded="xl"
                        color="yellow-lighten-2"
                        class="pa-4 mt-2"
                        style="
                            width: 10%;
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
        <v-sheet class="d-flex align-center flex-column" color="transparent"
            ><v-btn
                value="favorites"
                icon="mdi-heart"
                size="50"
                variant="elevated"
                color="blue-lighten-2"
                class="text-yellow-lighten-2"
            ></v-btn>
            <span class="text-blue-darken-2">99+</span></v-sheet
        >

        <v-sheet class="d-flex align-center flex-column" color="transparent"
            ><v-btn
                icon="mdi-star"
                value="collection"
                size="50"
                variant="elevated"
                color="blue-lighten-2"
                class="text-yellow-lighten-2"
            ></v-btn>
            <span class="text-blue-darken-2">99+</span></v-sheet
        >
        <v-sheet class="d-flex align-center flex-column" color="transparent"
            ><v-btn
                value="comments"
                icon="mdi-comment"
                size="50"
                variant="elevated"
                color="blue-lighten-2"
                class="text-yellow-lighten-2"
            ></v-btn>
            <span class="text-blue-darken-2">99+</span>
        </v-sheet>
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
