<template>
    <div class="tab-bar">
        <template v-for="item in tabData">
            <router-link class="tab-item" :key="item.id" :to="item.path">
                <img :src="item.url" alt="">
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabData:[
                {id:1,url:'/img/home.png',path:'/home'},
                {id:2,url:'/img/upload.png',path:'/discover'},
                {id:3,url:'/img/my.png',path:'/mine'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab-bar{
        position: absolute;
        left: 0;
        bottom: 0;
        background: #f4f4f4;
        width: 100%;
        display: flex;
        .tab-item{
            height: 1.306667rem;
            flex: 1;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .tab-item:nth-of-type(1){
            img{
                width: .733333rem;
                height:.746667rem;
            }
        }
        .tab-item:nth-of-type(2){
            img{
                position: fixed;
                margin:auto;
                left: 0;
                right: 0;
                bottom: 0;
                width: 1.386667rem;
                height: 1.613333rem;
            }
        }
        .tab-item:nth-of-type(3){
            img{
                width: .626667rem;
                height: .746667rem;
            }
        }
        
    }
</style>
