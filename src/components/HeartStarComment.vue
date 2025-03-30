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
<script setup>
import { ref } from "vue";
import { likeArticle } from "@/stores/newsService";
import Passage from "./Passage.vue";

const props = defineProps({
    passageId: String,
    authorId: String,
});

const isLiked = false;

/* 处理点赞 */
const handleLike = async () => {
    if (!props.passageId || !props.authorId) {
        console.error("passageId 或 authorId 为空，无法点赞");
        return;
    }
    const newType = isLiked.value ? 0 : 1; // 切换点赞状态
    const success = await likeArticle(props.passageId, props.authorId, newType);

    if (success) {
        isLiked.value = !isLiked.value; // 成功后更新 UI
    }
};
</script>
