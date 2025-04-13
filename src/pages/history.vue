<script setup>
import { ref, onMounted } from "vue";
import { useDate } from "vuetify";
import service from "@/utils/request.js";
import Header from "@/data/tableHeader.js";

const adapter = useDate();
const search = ref("");

const pagination = ref({
    current: 1,
    size: 10,
    total: 0,
});

const DEFAULT_RECORD = {
    title: "",
    author: "",
    genre: "",
    year: adapter.getYear(adapter.date()),
    pages: 1,
};

const articles = ref([]);
const record = ref({ ...DEFAULT_RECORD });
const dialog = ref(false);
const isEditing = ref(false);

const headers = Header;

const add = () => {
    isEditing.value = false;
    record.value = { ...DEFAULT_RECORD };
    dialog.value = true;
};

const edit = (id) => {
    isEditing.value = true;
    const found = articles.value.find((book) => book.id === id);
    if (found) {
        record.value = { ...found };
        dialog.value = true;
    }
};

const remove = (id) => {
    articles.value = articles.value.filter((book) => book.id !== id);
};

const save = () => {
    if (isEditing.value) {
        const index = articles.value.findIndex(
            (book) => book.id === record.value.id
        );
        if (index !== -1) {
            articles.value[index] = { ...record.value };
        }
    } else {
        record.value.id = articles.value.length + 1;
        articles.value.push({ ...record.value });
    }
    dialog.value = false;
};

const loading = ref(false); // 加载状态
const getTableData = async () => {
    loading.value = true;
    dialog.value = false;
    record.value = { ...DEFAULT_RECORD };
    try {
        const list = await service.get(
            "/passage-service/v1/fake_check_records",
            {
                params: {
                    current: pagination.value.current,
                    size: pagination.value.size,
                },
                headers: {
                    userId: 1,
                },
            }
        );
        articles.value = list.data.data.records;
        pagination.value.total = list.data.data.total;
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
    pagination.value.current = 1; // 重置为第一页
    getTableData();
};

watch(pagination, () => {
    getTableData();
});
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
                        ></v-btn>
                    </template>
                </v-data-table>
            </v-card-item>

            <v-dialog v-model="dialog" max-width="500">
                <v-card
                    :subtitle="`${
                        isEditing ? 'Update' : 'Create'
                    } your favorite book`"
                    :title="`${isEditing ? 'Edit' : 'Add'} a Book`"
                >
                    <template v-slot:text>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="record.title"
                                    label="Title"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="record.author"
                                    label="Author"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-select
                                    v-model="record.genre"
                                    :items="[
                                        'Fiction',
                                        'Dystopian',
                                        'Non-Fiction',
                                        'Sci-Fi',
                                    ]"
                                    label="Genre"
                                ></v-select>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-number-input
                                    v-model="record.year"
                                    :max="adapter.getYear(adapter.date())"
                                    :min="1"
                                    label="Year"
                                ></v-number-input>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-number-input
                                    v-model="record.pages"
                                    :min="1"
                                    label="Pages"
                                ></v-number-input>
                            </v-col>
                        </v-row>
                    </template>

                    <v-divider></v-divider>

                    <v-card-actions class="bg-surface-light">
                        <v-btn
                            text="Cancel"
                            variant="plain"
                            @click="dialog = false"
                        ></v-btn>

                        <v-spacer></v-spacer>

                        <v-btn text="Save" @click="save"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </v-container>
</template>

<style scoped></style>

<route lang="yaml">
meta:
    layout: system
</route>
