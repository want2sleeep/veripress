
import service from "@/utils/request";
import { defineStore } from "pinia";


/* 获取热点新闻 */
export const useHotNewsStore =defineStore('hotnews',{
    state:()=>({
        hotNewsList:[]
    }),
    actions:{
        async fetchHotNews(){
            try{
                const response = await service.get("/passage-service/v1/first-passage-info",  {userId:4});
                   // 打印完整的返回数据
                console.log("🔥 后端返回的数据:", response);
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
        const response = await service.get(`/api/passage-service/v1/detail/${passageId}`);
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
        const response = await service.post("/api/passage-service/v1/doLike",{
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
