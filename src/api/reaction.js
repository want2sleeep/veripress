import service from '@/utils/request.js'

const Reaction = {
    likeArticle: async function (req) {
        try {
            return await service.post('/passage-service/v1/doLike', req)
        } catch (error) {
            console.error('点赞文章失败', error)
        }
    },

    collectArticle: async function (req) {
        try {
            return await service.post('/passage-service/v1/doCollect', req)
        } catch (error) {
            console.error('收藏文章失败', error)
        }
    },

    getArticleComment: async function (id) {
        try {
            return await service.post('/passage-service/v1/detail/comment', {
                body: {
                    passageId: id,
                }
            })
        } catch (error) {
            console.error('获取文章评论失败', error)
        }
    },

    createArticleComment: async function (req) {
        try {
            return await service.post('/passage-service/v1/doComment', req)
        } catch (error) {
            console.error('评论文章失败', error)
        }
    },
}

export default Reaction
