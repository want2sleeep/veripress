<template>
    <v-sheet
        v-if="detail"
        class="d-flex align-center flex-column"
        color="transparent"
    >
        <v-sheet class="d-flex align-center flex-column" color="transparent"
            ><v-btn
                value="favorites"
                icon="mdi-heart"
                size="50"
                variant="elevated"
                :color="isLiked ? 'blue-lighten-1' : 'blue-lighten-2'"
                class="text-yellow-lighten-2"
                @click="handleLike"
            ></v-btn>
            <span class="text-blue-darken-2">{{
                detail.likes || 0
            }}</span></v-sheet
        >

        <v-sheet class="d-flex align-center flex-column" color="transparent"
            ><v-btn
                icon="mdi-star"
                value="collection"
                size="50"
                variant="elevated"
                :color="isCollect ? 'blue-lighten-1' : 'blue-lighten-2'"
                class="text-yellow-lighten-2"
                @click="handleCollect"
            ></v-btn>
            <span class="text-blue-darken-2">{{
                detail.collection || 0
            }}</span></v-sheet
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
            <span class="text-blue-darken-2">{{
                detail.commentCounts || 0
            }}</span>
        </v-sheet>
    </v-sheet>
</template>
<script setup>
import { defineProps } from "vue";
import { collectArticle, likeArticle } from "@/stores/newsService";
import { ref } from "vue";
let detail = ref({});
let isLiked = ref(false);
let likeDetail = ref({});
let isCollect = ref(false);
let collectDetail = ref({});

const props = defineProps({
    newsDetail: Object,
});
watch(
    () => props.newsDetail,
    (newValue) => {
        if (newValue?.data) {
            detail.value = newValue.data;
            let storageKeyLikes = `liked-${detail.value.passageId}`;
            let storageKeyCollection = `collected-${detail.value.passageId}`;

            // 读取 localStorage，确保是 true/false
            let storedValueLikes = localStorage.getItem(storageKeyLikes);
            let storedValueCollection =
                localStorage.getItem(storageKeyCollection);
            isLiked.value = storedValueLikes
                ? JSON.parse(storedValueLikes)
                : false;
            isCollect.value = storedValueCollection
                ? JSON.parse(storedValueCollection)
                : false;
        }
    },
    {
        immediate: true,
    }
);

/* 处理点赞 */
const handleLike = async () => {
    if (!detail.value.passageId || !detail.value.authorId) {
        console.error("passageId 或 authorId 为空，无法点赞");
        return;
    }
    let newTypeLikes = isLiked.value ? 0 : 1; // 切换点赞状态
    likeDetail.value = await likeArticle(
        detail.value.passageId,
        detail.value.authorId,
        newTypeLikes
    );
    //console.log(likeDetail.value);
    isLiked.value = !isLiked.value;
    if (!likeDetail.value) {
        alert("您已点赞过该文章");
    } else {
        detail.value.likes += isLiked.value ? 1 : -1;
        if (detail.value.likes < 0) detail.value.likes = 0;
    }
};

/* 处理收藏 */
const handleCollect = async () => {
    if (!detail.value.passageId || !detail.value.authorId) {
        console.error("passageId 或 authorId 为空，无法收藏");
        return;
    }
    let newTypeCollection = isCollect.value ? 0 : 1;
    collectDetail.value = await collectArticle(
        detail.value.passageId,
        detail.value.authorId,
        newTypeCollection
    );
    isCollect.value = !isCollect.value;
    if (!collectDetail.value) {
        alert("您已收藏过该文章");
    } else {
        detail.value.collection += isCollect.value ? 1 : -1;
        if (detail.value.collection < 0) detail.value.collection = 0;
    }
};
</script>
