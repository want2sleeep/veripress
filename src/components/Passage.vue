<template>
    <v-sheet
        rounded="xl"
        color="blue-darken-2"
        style="margin: 30px 0px 40px 90px; padding: 40px"
    >
        <v-col>
            <div
                class="text-h2 font-weight-bold text-yellow-lighten-3"
                style="margin-bottom: 30px"
            >
                {{ PassageData.title }}
            </div>
            <v-card
                class="mx-auto text-blue-darken-2"
                color="yellow-lighten-4"
                elevation="1"
            >
                <v-card-actions>
                    <v-list-item class="w-100">
                        <template v-slot:prepend>
                            <v-avatar
                                color="grey-darken-3"
                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-avatar>
                        </template>

                        <v-list-item-title>{{
                            PassageData.authorName
                        }}</v-list-item-title>

                        <v-list-item-subtitle>{{
                            PassageData.authorId
                        }}</v-list-item-subtitle>
                    </v-list-item>
                </v-card-actions>
            </v-card>
            <v-card v-for="i in content" :key="i.order" elevation="0">
                <v-card-text
                    v-if="i.type === 0"
                    class="text-yellow-lighten-4 bg-blue-darken-2 text-h6"
                >
                    {{ i.value }}
                </v-card-text>
                <img :src="i.value" v-if="i.type === 1" max-width="300" />
            </v-card>
        </v-col>
    </v-sheet>
</template>
<script setup>
const PassageData = {
    title: "测试文章哈哈哈",
    content: [
        {
            type: 0,
            value: "这是第一段的纯文本内容",
            order: 0,
        },
        {
            type: 1,
            value: "https://fuchuang-images.oss-cn-beijing.aliyuncs.com/fuchuang/user-avatars/64f301fd-3fe9-457e-aea7-ae465e1307a2.png",
            order: 2,
        },
        {
            type: 0,
            value: "第二段的纯文本内容",
            order: 1,
        },
        {
            type: 1,
            value: "/src/assets/1.jpg",
            order: 3,
        },
        {
            type: 0,
            value: "第三段的纯文本内容",
            order: 4,
        },
        {
            type: 1,
            value: "/src/assets/1.jpg",

            order: 5,
        },
        {
            type: 0,
            value: "第四段的纯文本内容",
            order: 6,
        },
        {
            type: 1,
            value: "/src/assets/1.jpg",

            order: 7,
        },
        {
            type: 0,
            value: "第五段的纯文本内容",
            order: 8,
        },
        {
            type: 1,
            value: "/src/assets/1.jpg",

            order: 9,
        },
    ],
    partition: 1,
    partionName: "军事",
    authorName: "ABC",
    authorId: "123",
    like: 12,
    collect: 100,
    comment: 134,
    status: 0,
};
let content = PassageData.content;
</script>
