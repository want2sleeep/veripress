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
                                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-blue-darken-3 font-weight-bold"
                            >
                                authorName
                            </v-list-item-title>
                        </v-list-item>
                    </v-card-actions>

                    <div style="margin-left: 80px" width="100%">
                        <div width="100%" class="d-flex text-blue-darken-3">
                            <div>这是一条评论</div>
                            <v-spacer></v-spacer>
                        </div>

                        <v-expand-transition>
                            <div v-show="showMore">
                                <v-divider></v-divider>
                                <v-card-text>
                                    <div
                                        v-for="(reply, index) in visibleReplies"
                                        :key="index"
                                        class="mb-2 text-darken-3"
                                    >
                                        <v-list-item class="w-100">
                                            <template v-slot:prepend>
                                                <v-avatar
                                                    size="25"
                                                    color="grey-darken-3"
                                                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                ></v-avatar>
                                            </template>
                                            <v-list-item-title class="text-h7">
                                                {{ reply.author }}
                                            </v-list-item-title>
                                        </v-list-item>
                                        <div style="margin-left: 60px">
                                            {{ reply.content }}
                                        </div>
                                    </div>
                                </v-card-text>
                            </div>
                        </v-expand-transition>

                        <v-card-actions>
                            <v-text class="text-blue tex-h7"
                                ><strong>展开</strong></v-text
                            >

                            <v-spacer></v-spacer>

                            <v-btn
                                :icon="
                                    showMore
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                "
                                color="blue"
                                @click="toggleReplies"
                            ></v-btn>
                        </v-card-actions>
                    </div>
                </div>
            </v-card>
            <v-card
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
                                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-blue-darken-3 font-weight-bold"
                            >
                                authorName
                            </v-list-item-title>
                        </v-list-item>
                    </v-card-actions>

                    <div style="margin-left: 80px" width="100%">
                        <div width="100%" class="d-flex text-blue-darken-3">
                            <div>这是一条评论</div>
                            <v-spacer></v-spacer>
                        </div>

                        <v-expand-transition>
                            <div v-show="showMore">
                                <v-divider></v-divider>
                                <v-card-text>
                                    <div
                                        v-for="(reply, index) in visibleReplies"
                                        :key="index"
                                        class="mb-2 text-darken-3"
                                    >
                                        <v-list-item class="w-100">
                                            <template v-slot:prepend>
                                                <v-avatar
                                                    size="25"
                                                    color="grey-darken-3"
                                                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                ></v-avatar>
                                            </template>
                                            <v-list-item-title class="text-h7">
                                                {{ reply.author }}
                                            </v-list-item-title>
                                        </v-list-item>
                                        <div style="margin-left: 60px">
                                            {{ reply.content }}
                                        </div>
                                    </div>
                                </v-card-text>
                            </div>
                        </v-expand-transition>

                        <v-card-actions>
                            <v-text class="text-blue tex-h7"
                                ><strong>展开</strong></v-text
                            >

                            <v-spacer></v-spacer>

                            <v-btn
                                :icon="
                                    showMore
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                "
                                color="blue"
                                @click="toggleReplies"
                            ></v-btn>
                        </v-card-actions>
                    </div>
                </div>
            </v-card>
            <v-card
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
                                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-avatar>
                            </template>
                            <v-list-item-title
                                class="text-blue-darken-3 font-weight-bold"
                            >
                                authorName
                            </v-list-item-title>
                        </v-list-item>
                    </v-card-actions>

                    <div style="margin-left: 80px" width="100%">
                        <div width="100%" class="d-flex text-blue-darken-3">
                            <div>这是一条评论</div>
                            <v-spacer></v-spacer>
                        </div>

                        <v-expand-transition>
                            <div v-show="showMore">
                                <v-divider></v-divider>
                                <v-card-text>
                                    <div
                                        v-for="(reply, index) in visibleReplies"
                                        :key="index"
                                        class="mb-2 text-darken-3"
                                    >
                                        <v-list-item class="w-100">
                                            <template v-slot:prepend>
                                                <v-avatar
                                                    size="25"
                                                    color="grey-darken-3"
                                                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                ></v-avatar>
                                            </template>
                                            <v-list-item-title class="text-h7">
                                                {{ reply.author }}
                                            </v-list-item-title>
                                        </v-list-item>
                                        <div style="margin-left: 60px">
                                            {{ reply.content }}
                                        </div>
                                    </div>
                                </v-card-text>
                            </div>
                        </v-expand-transition>

                        <v-card-actions>
                            <v-text class="text-blue tex-h7"
                                ><strong>展开</strong></v-text
                            >

                            <v-spacer></v-spacer>

                            <v-btn
                                :icon="
                                    showMore
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                "
                                color="blue"
                                @click="toggleReplies"
                            ></v-btn>
                        </v-card-actions>
                    </div>
                </div>
            </v-card>
        </v-sheet>
    </v-row>
</template>

<script>
import { ref, computed } from "vue";

export default {
    setup() {
        const replies = ref([
            { author: "User1", content: "This is the first reply." },
            { author: "User2", content: "This is the second reply." },
            { author: "User3", content: "This is the third reply." },
            { author: "User4", content: "This is the fourth reply." },
            { author: "User5", content: "This is the fifth reply." },
            { author: "User6", content: "This is the sixth reply." },
            { author: "User7", content: "This is the seventh reply." },
            { author: "User8", content: "This is the eighth reply." },
            { author: "User9", content: "This is the ninth reply." },
            { author: "User10", content: "This is the tenth reply." },
        ]);

        const visibleCount = ref(1);
        const showMore = ref(false);

        const visibleReplies = computed(() => {
            return showMore.value ? replies.value : replies.value.slice(0, 1);
        });

        const toggleReplies = () => {
            showMore.value = !showMore.value;
        };

        return {
            replies,
            visibleCount,
            showMore,
            visibleReplies,
            toggleReplies,
        };
    },
};
</script>
