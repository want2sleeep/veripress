import service from '@/utils/request.js'

const Article = {
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
            return await service.get('/passage-service/v1/detail', {
                params: {
                    passageId: id,
                },
            })
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

    getArticleFakeRate: async function (id) {
        try {
            return await service.get('/passage-service/v1/fakeRate', {
                params: {
                    passageId: id,
                },
            })
        } catch (error) {
            console.error('获取文章虚假率失败', error)
        }
    },
}

export default Article
