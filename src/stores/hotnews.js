import axios from "axios";
import { defineStore } from "pinia";


export const useHotNewsStore =defineStore('hotnews',{
    state:()=>({
        hotNewsList:[]
    }),
    actions:{
        async fetchHotNews(){
            try{
                const response= await axios.get('/api/passage-service/v1/first-passage-info')
                   // 打印完整的返回数据
    console.log("🔥 后端返回的数据:", response);
                if(response.data.success){
                    this.hotNewsList=response.data.data
                }else{
                    console.error('获取数据失败',response.data.message)
                }
            }catch(error){
                console.error('请求出错',error)
            }
        }
    }
})
