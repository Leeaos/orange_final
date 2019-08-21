<template>

   <div>
        <div  id="home">
            <header class="home-header border-bottom">
                <router-link class="title search" to='/home/search'>搜索</router-link >
                <router-link class="title hand"  to='/home/handaccount'>手账</router-link >
                <router-link class="title paper" to='/home/wallpaper'>壁纸</router-link >
            </header>     

        </div>

        <!-- <transition enter-active-class="slideInRight" leave-active-class="slideOutRight"> -->
            <router-view></router-view>
        <!-- </transition> -->
   </div>

</template>

<script>


import {mapState} from 'vuex'
export default {
    components:{

    },
    // computed:{
    //     ...mapState({
    //         homeListData:state=>state.home.homeListData
    //     })
    // },
    // methods:{
    //     //请求首页的初始化数据
    //     getHomeInitialData(){
    //         //列表
    //         this.$store.dispatch('home/requestHomeListData')
    //     }
    // },
    // created(){
    //     this.getHomeInitialData();
    // }
}
</script>

<style lang="scss" scoped>
#home{
    .home-header{  
        height: 1.173333rem;
        background: #fff;
        text-align: center;
        .title{
            display:inline-block;
            font-size:.453333rem;
            line-height: 1.173333rem;
            &.search{
                position: absolute;
                left: .24rem;
                font-size: .346667rem;
            }
            &.hand{
                padding-right: 1.333333rem;
            }
            &.router-link-active{
                color:#000;
                font-size: .48rem;
                font-weight: bold;
            }
        }
    }
}
</style>
