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
            return await service.get(`/api/passage-service/v1/partition/${id}/passages`)
        } catch (error) {
            console.error('获取分区失败', error)
        }
    },
}

export default Article
