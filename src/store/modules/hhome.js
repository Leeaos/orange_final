import {get} from '../../request/index'
import api from '../../request/api'

export default {
    namespaced: true,

    state:{
         //首页初始化的数据
         handAccountListData:[],
         handMarketNavData:[],
         handMarketGoodsListData:[]
    },

    mutations:{
        setHandAccountListData(state, val){
            state.handAccountListData = val;
            console.log(this.state)
        },
        sethandMarketNavData(state, val){
            state.handMarketNavData = val;
        },
        sethandMarketGoodsListData(state, val){
            state.handMarketGoodsListData= val;
        },
    },

    actions:{

        /************************************手账*********************************** */

         // 请求手账页列表数据
         async requestHandAccountListData(context){
            let data = await get(api.HOME_HANDACCOUNT_LIST_API);  
            let newData = data.data.map(({id, smlImgUrl,bigImgUrl})=>({id, smlImgUrl,bigImgUrl}));
            // let leftData = [];
            // let rightData = [];
            // console.log(newData)
            // newData.filter((item,index)=>{
                
            //     if(index%2){
            //         console.log(item)
            //         rightData.push(item)
            //     }else{
            //         leftData.push(item)
            //     }
            // })
            // console.log(leftData)
            // console.log(rightData)
            context.commit('setHandAccountListData',newData)
        },

        // 请求手账集市页导航栏数据
        async requestHandMarketNavData(context){
            let data = await get(api.HOME_HANDACCOUNT_NAV_API);  
            // console.log(data)
            let newData = data.data.map(({id, title})=>({id, title}));
            context.commit('sethandMarketNavData', newData);
        },

         // 请求手账集市页商品分类列表数据
         async requestHandMarketGoodsListData(context){
            let data = await get(api.HOME_HANDACCOUNT_CONTNET_LIST_API);  
            console.log(data)
            let newData = data.data.map(({id, name,price,imgUrl})=>({id, name,price,imgUrl}));
            context.commit('sethandMarketGoodsListData', newData);
        },
    }
}