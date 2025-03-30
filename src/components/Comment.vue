<template>
    <v-row
        height="90"
        rounded="xl"
        style="margin: 60px 0px 40px 90px; padding: 0px"
    >
        <v-sheet
            style="padding: 40px"
            width="100%"
            rounded="xl"
            color="blue-darken-2"
        >
            <div
                class="text-yellow-lighten-3 text-h4 font-weight-bold"
                style="margin-bottom: 20px"
            >
                评论
            </div>

            <v-card
                v-for="(comment, index) in comments"
                :key="index"
                elevation="0"
                rounded="xl"
                style="padding: 10px; margin-top: 15px"
                color="yellow-lighten-4"
            >
                <div class="d-flex flex-column flex-no-wrap">
                    <v-card-actions>
                        <v-list-item class="w-100">
                            <template v-slot:prepend>
                                <v-avatar
                                    color="grey-darken-3"
                                    :image="comment.avatar"
                                ></v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-blue-darken-3 font-weight-bold"
                            >
                                {{ comment.username }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-card-actions>

                    <div style="margin-left: 80px" width="100%">
                        <div
                            width="100%"
                            class="d-flex flex-column text-blue-darken-3"
                        >
                            <div>{{ comment.content }}</div>
                            <div
                                style="
                                    font-size: 12px;
                                    margin-top: 10px;
                                    color: rgba(0, 0, 0, 0.4);
                                "
                            >
                                {{ comment.createTime }}
                            </div>
                            <v-spacer></v-spacer>
                        </div>

                        <v-expand-transition>
                            <div v-show="showMoreMap[comment.id]">
                                <v-divider></v-divider>
                                <v-card-text>
                                    <div
                                        v-for="reply in repliesMap[comment.id]"
                                        :key="reply.id"
                                        class="mb-2 text-darken-3"
                                    >
                                        <v-list-item class="w-100">
                                            <template v-slot:prepend>
                                                <v-avatar
                                                    size="25"
                                                    color="grey-darken-3"
                                                    :image="reply.avatar"
                                                ></v-avatar>
                                            </template>
                                            <v-list-item-title class="text-h7">
                                                {{ reply.username }}
                                            </v-list-item-title>
                                        </v-list-item>
                                        <div class="d-flex flex-column">
                                            <div style="margin-left: 60px">
                                                {{ reply.content }}
                                            </div>
                                            <div
                                                style="
                                                    font-size: 12px;
                                                    margin-left: 60px;
                                                    color: rgba(0, 0, 0, 0.4);
                                                "
                                            >
                                                {{ reply.createTime }}
                                            </div>
                                        </div>
                                    </div>
                                </v-card-text>
                            </div>
                        </v-expand-transition>

                        <v-card-actions v-if="comment.replyCount > 0">
                            <v-btn
                                @click="toggleReplies(comment)"
                                v-if="comment.replyCount > 0"
                                class="text-blue-lighten-2"
                                style="font-size: 14px; font-weight: 400"
                                ><strong
                                    >展开剩下{{
                                        comment.replyCount
                                    }}条评论</strong
                                ></v-btn
                            >

                            <v-spacer></v-spacer>

                            <v-btn
                                @click="clearSubComment(comment)"
                                v-if="showMoreMap[comment.id]"
                                icon="
                                   mdi-chevron-up
                                "
                                color="blue"
                            ></v-btn>
                        </v-card-actions>
                    </div>
                </div>
            </v-card>
        </v-sheet>
    </v-row>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchComments } from "@/stores/newsService";
import { defineProps } from "vue";

const props = defineProps({
    passageId: String,
});
const comments = ref([]);
const showMoreMap = ref({}); //控制评论展开状态
const repliesMap = ref({}); //子评论

//获取父评论
const loadComments = async () => {
    const response = await fetchComments(props.passageId, "", "", "");
    //console.log(response);

    comments.value = response.records.map((comment) => ({
        ...comment,
        replies: [],
    }));
    //console.log(comments.value);
};

//切换展开状态并加载子评论
const toggleReplies = async (comment) => {
    if (!showMoreMap.value[comment.id]) {
        showMoreMap.value[comment.id] = true;
        const response = await fetchComments(
            props.passageId,
            comment.id,
            "",
            ""
        );
        repliesMap.value[comment.id] = response.records || [];
    }
};
const clearSubComment = (comment) => {
    showMoreMap.value[comment.id] = false;
    repliesMap.value[comment.id] = [];
};

onMounted(loadComments);
</script>
