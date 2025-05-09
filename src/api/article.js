import service from '@/utils/request.js'

const Article = {
    getUserArticles: async function (payload) {
        try {
            return await service.get('/passage-service/v1/fake_check_records', {
                params: payload
            })
        } catch (error) {
            console.error('获取用户文章失败', error)
        }
    },

    getPartitions: async function () {
        try {
            return await service.get('/passage-service/v1/partition-list')
        } catch (error) {
            console.error('获取分区失败', error)
        }
    },

    getPartitionsArticles: async function (id) {
        try {
            return await service.get(`/passage-service/v1/partition/${id}/passages`)
        } catch (error) {
            console.error('获取分区失败', error)
        }
    },

    getHotArticles: async function () {
        try {
            return await service.get('/passage-service/v1/first-passage-info')
        } catch (error) {
            console.error('获取热点文章失败', error)
        }
    },

    getArticle: async function (id) {
        try {
            return await service.get(`/passage-service/v1/detail/${id}`)
        } catch (error) {
            console.error('获取文章详情失败', error)
        }
    },

    createArticle: async function (req) {
        try {
            return await service.post('/passage-service/v1/upload', req)
        } catch (error) {
            console.error('创建文章失败', error)
        }
    },

    uploadImageViaURL: async function (url) {
        try {
            return await service.post('/passage-service/v1/image/url', {url: url})
        } catch (error) {
            console.error('上传图片失败', error)
        }
    },

    uploadImageViaFile: async function (file) {
        try {
            return await service.post('/passage-service/v1/image', file, {
                headers: {
                    'accept': 'application/json',
                },
            })
        } catch (e) {
            console.error('上传图片失败', e)
        }
    },

    getTaskInfo: async function (taskKey) {
        try {
            return await service.get('/passage-service/v1/task-info', {
                params: {
                    taskKey: taskKey,
                }
            })
        } catch (error) {
            console.error('获取任务信息失败', error)
        }
    },

    getArticleFakeRate: async function (id) {
        try {
            return await service.get(`/passage-service/v1/fake_reason/${id}`)
        } catch (error) {
            console.error('获取文章虚假率失败', error)
        }
    },
}

export default Article
