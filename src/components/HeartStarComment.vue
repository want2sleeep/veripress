<template>
    <v-sheet class="d-flex align-center flex-column" color="transparent">
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
