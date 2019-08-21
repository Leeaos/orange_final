<template>
    <div class="mine-mine">
            <!-- 设置小齿轮 -->
            <router-link class="iconfont setter" to="/mine/setting">&#xe623;</router-link>
            <!-- 头像 -->
            <router-link class="portrait" to="/mine/releasehand">
                <img src="/img/upload.png" alt="" class="portrait">
            </router-link>
            <div class="backgroud-data">
                <!-- 昵称 -->
                <p class="mine-name">123</p>
                <!-- 签名 -->
                <p class="mine-autograph">1234</p>
                <div class="mine-details">
                    <router-link class="mine-follow" to="/mine/fans">
                        <p>关注</p>
                        <p>21</p>
                    </router-link>
                    <router-link class="mine-fans" to="/mine/follow">
                        <p>粉丝</p>
                        <p>3123</p>
                    </router-link>
                    <router-link class="mine-love" to="/mine/releasehand">
                        <p>喜欢</p>
                        <p>241</p>
                    </router-link>
                </div>
            </div>
            <div class="mine-main">
                <router-link class="Release-hand" v-for="item in mainData" :key="item.id" :to="item.path">
                    <img :src="item.img" alt="">
                    <i>1</i>
                    <span>{{item.data}}</span>
                </router-link>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mainData:[
                {id:1,data:'我发布的手账',path:'/mine/releasehand',img:'/img/upload.png'},
                {id:2,data:'我发布的壁纸',path:'/mine/releasewallpaper',img:'/img/upload.png'},
                {id:3,data:'我收藏的手账',path:'/mine/collectionhand',img:'/img/upload.png'},
                {id:4,data:'我收藏的壁纸',path:'/mine/collectionwallpaper',img:'/img/upload.png'}
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
    .mine-mine{
        height: 10000px;
        .setter{
            position: absolute;
            right: .506667rem;
            top: .28rem
        }
        .portrait{
            position: fixed;
                margin:auto;
                left: 0;
                right: 0;
                top: 0;
                width: 1.533333rem;
                height: 1.533333rem;
                border-radius: 100%;
                background: white;
        }
        .backgroud-data{
            background-image: url('/img/backgroud.png');
            width: 9.466667rem;
            height: 4.186667rem;
            background-size: 100% 100%;
            margin: .413333rem auto 0;
            .mine-name{
                padding-top: 1.613333rem;
                text-align: center;
                font-size:.4rem;
            }
            .mine-autograph{
                margin-top: .2rem;
                font-size:.293333rem;
                text-align: center;
                opacity:0.5;
            }
            .mine-details{
                display: flex;
                margin-top: .293333rem;
                width: 4rem;
                margin: .293333rem auto;
                a{
                    flex: 1;
                    margin:0 .24rem;
                    p{
                        text-align: center;
                    }
                }
            }
        }
        .mine-main{
            display: flex;
            flex-wrap:wrap;
            padding: .386667rem .266667rem;
            a{
                 width: 50%;
                 height: 4.666667rem;
                 border:white solid 0 .266667rem .24rem ;
                 box-sizing: border-box;
                 position: relative;
                 margin-bottom: .266667rem;
                 display: block;
                 i{
                    display: block;
                    width:4.533333rem;
                    height:4.666667rem;
                    background:rgba(32,32,32,1);
                    opacity:0.7;
                    border-radius:8px;
                    position: absolute;
                    left: 0;
                    top: 0;
                 }
                 img{
                     position: absolute;
                     width:4.533333rem;
                    height:4.666667rem;
                     z-index: 1;
                 }
                 span{
                    font-size:.4rem;
                    font-weight:bold;
                    color: white;
                    position: absolute;
                    z-index: 5;
                    width: 100%;
                    text-align: center;
                    line-height: 4.666667rem;
                 }
            }
        }

    }
</style>
