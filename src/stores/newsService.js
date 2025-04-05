import service from "@/utils/request";
import { defineStore } from "pinia";
/* 获取新闻分区 */

export const getPartitions=async()=>{
    try{
        const response =await service.get("/passage-service/v1/partition-list",{
            headers:{
                userId:4,
            }
        })
        if(response.data.success){
            return response.data.data

        }else{
            console.log("获取分区失败：")
        }
    }catch(error){
        console.error("请求分区出错",error)
        return []
    }
}


/* 获取分区详情 */
export const getPartitionNews=async(partitionId)=>{
    try{
        const response =await service.get(`/passage-service/v1/partition/${partitionId}/passages`,{
            headers:{
                userId:4
            }
        })
        if(response.data.success){
            return response.data
        }else{
            console.log("获取分区页面失败")
        }

    }catch(error){
        console.log("请求分区页面出错",error)
    }
}




/* 获取热点新闻 */
export const useHotNewsStore =defineStore('hotnews',{
    state:()=>({
        hotNewsList:[]
    }),
    actions:{
        async fetchHotNews(){
            try{
                const response = await service.get("/passage-service/v1/first-passage-info",  {
                    headers:{
                        userId:4
                    }
                });

                //console.log("🔥 后端返回的数据:", response);
                if(response.data.success){
                    this.hotNewsList=response.data.data
                }else{
                    console.error('获取新闻第一级数据失败',response.data.message)
                }
            }catch(error){
                console.error('请求出错',error)
            }
        }
    }
})

/* 获取新闻详情 */
export const fetchNewsById = async (passageId) => {
    try {
        const response = await service.get(`/passage-service/v1/detail/${passageId}`,{
            headers:{
                userId:4
            }
        });
        return response.data;
    } catch (error) {
        console.error("获取文章详情失败:", error);
        return null;
    }
};

/* 点赞文章
* @param {string} passageId - 文章 ID
 * @param {string} authorId - 作者 ID
 * @param {number} type - 点赞类型 (0 取消点赞, 1 点赞)
 * @returns {Promise<boolean>} 成功返回 true，失败返回 false
*/
export const likeArticle =async(passageId,authorId,type)=>{
    try{
        const response = await service.post("/passage-service/v1/doLike",{
            passageId,
            authorId,
            type
        })
        if(response.data.success){
            return true
        }else{
            console.log("点赞失败：",response.data.message)
            return false
        }
    }catch(error){
        console.error("点赞请求出错：",error)
        return false
    }
}


/* 获取文章评论 */
export const fetchComments =async(passageId,parentId,pageToken,pageSize)=>{
    try{
        const {data} =await service.post("/passage-service/v1/detail/comment",{

                passageId,parentId,pageToken,pageSize

        })
        if(data.success){
            return data.data
        }
        console.warn("获取评论失败：",data.message)
    }catch(error){
       console.log("获取评论请求出错",error)
       return null
    }
}

