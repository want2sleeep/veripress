<script setup>
import { ref, onMounted } from "vue";
import Header from "@/data/tableHeader.js";
import Article from "@/api/article.js";

const pagination = ref({
    current: 1,
    size: 10,
    total: 0,
});
const articles = ref([]);
const headers = Header;
const search = ref("");
const loading = ref(false);

const remove = (id) => {
    articles.value = articles.value.filter((book) => book.id !== id);
};

const getTableData = async () => {
    loading.value = true;
    try {
        const { data } = await Article.getUserArticles({
            current: pagination.value.current,
            size: pagination.value.size,
        });
        articles.value = data.data.records;
        pagination.value.total = data.data.total;
    } catch (error) {
        console.error("数据获取失败", error);
    } finally {
        loading.value = false;
    }
};

const handlePageChange = (newPage) => {
    pagination.value.current = newPage;
    getTableData();
};

const handleItemsPerPageChange = (newSize) => {
    pagination.value.size = newSize;
    pagination.value.current = 1;
    getTableData();
};

onMounted(() => {
    getTableData();
});
</script>

<template>
    <v-container class="pa-2" style="margin-top: 40px">
        <v-card
            class="bg-yellow-lighten-4"
            style="padding: 20px"
            rounded="xl"
            flat
        >
            <v-card-item>
                <v-data-table
                    class="bg-yellow-lighten-4 text-blue-darken-3"
                    :headers="headers"
                    :items="articles"
                    :items-per-page="pagination.size"
                    :page.sync="pagination.current"
                    :loading="loading"
                    :server-items-length="pagination.total"
                    @update:page="handlePageChange"
                    @update:items-per-page="handleItemsPerPageChange"
                    :search="search"
                    hover
                >
                    <template v-slot:top>
                        <v-toolbar flat style="background-color: transparent">
                            <v-toolbar-title>
                                <v-icon
                                    color="medium-emphasis"
                                    icon="mdi-book-multiple"
                                    size="x-small"
                                    class="text-h4"
                                    start
                                />
                                检测记录
                            </v-toolbar-title>

                            <RouterLink to="/upload" class="text-blue">
                                <v-btn
                                    class="me-2 text-h6 text-blue font-weight-bold"
                                    prepend-icon="mdi-plus"
                                    rounded="lg"
                                    text="上传文章"
                                    border
                                />
                            </RouterLink>
                        </v-toolbar>

                        <v-text-field
                            v-model="search"
                            label="搜索文章"
                            prepend-inner-icon="mdi-magnify"
                            variant="outlined"
                            hide-details
                            single-line
                        ></v-text-field>
                    </template>

                    <template v-slot:item.title="{ value }">
                        <v-chip
                            :text="value"
                            border="thin opacity-25"
                            prepend-icon="mdi-book"
                            class="text-h7 font-weight-bold"
                            label
                        >
                            <template v-slot:prepend>
                                <v-icon color="medium-emphasis"></v-icon>
                            </template>
                        </v-chip>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <div class="d-flex ga-2 justify-end">
                            <RouterLink
                                :to="`/newsShow?passageId=${item.passageId}`"
                                class="text-black"
                            >
                                <v-btn color="primary" size="small" rounded>
                                    查看
                                </v-btn>
                            </RouterLink>

                            <v-btn
                                color="primary"
                                size="small"
                                :to="`/detail/${item.passageId}`"
                                :disabled="item.status !== 1"
                                rounded
                            >
                                详情
                            </v-btn>

                            <v-btn
                                color="primary"
                                size="small"
                                @click="remove(item.passageId)"
                                rounded
                            >
                                删除
                            </v-btn>
                        </div>
                    </template>

                    <template v-slot:no-data>
                        <v-btn
                            prepend-icon=" mdi-backup-restore"
                            rounded="lg"
                            text="Reset data"
                            variant="text"
                            border
                            @click="getTableData"
                        />
                    </template>
                </v-data-table>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<style scoped></style>

<route lang="yaml">
meta:
    layout: system
</route>
