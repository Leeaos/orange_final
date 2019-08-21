<template>
    <div>
        <div class="page" id="setting">
            <header class="top">
                <h3>
                    <span class="top-back" @click="goback">返回</span>
                    设置
                </h3>
            </header>
            <template v-for="item in setlist">
                <router-link class="setlist" :key="item.id" :to="item.path">
                    <li :class="['list','iconfont',item.icon] ">
                        {{item.title}}
                        <i class="iconfont iconyoujiantou mark"></i>
                    </li>
                </router-link>
            </template>
            <li class="share iconfont iconfenxiang" @click="showPopup">
                把桔子分享给朋友
                <i class="iconfont iconyoujiantou mark"></i>
            </li>
            <van-popup
                v-model="show"
                round
                position="bottom"
                :style="{ height: '20%' }" class="sharelist">
                <template v-for="item in sharelist">
                    <router-link :key="item.id" to="" >
                             <li class="item">
                                <p :class="['iconfont',item.icon]"></p>
                                <p>{{item.title}}</p>
                            </li>   
                    </router-link>
                </template>
                <div class="cancel" @click="cancleAction">
                    取消分享
                </div>
           </van-popup>  
            <div class="outlogin" @click="outloginACtion">
                <p>退出登录</p>
            </div>
            <van-popup v-model="isout"
                round
                position="bottom"
                :style="{ height: '20%' }" class="outloginlist">
                <li class="outitem">确定要退出登录吗？</li>
                <li class="outitem">确定</li>
                <li class="outitem">取消</li>
            </van-popup> 
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { Popup } from 'vant';
import { Button } from 'vant';
export default {
    components:{
        [Popup.name]:Popup,
        [Button.name]:Button
    },
    data(){
        return{
            setlist:[
                {id:1,title:"账号管理",path:'/mine/setting/accont',icon:'iconwode'},
                {id:2,title:"素材管理",path:'/mine/setting/material',icon:'iconRectangleCopy'},
                {id:3,title:"回收站",path:'/mine/setting/recycle',icon:'iconhuishouzhan'},
                // {id:4,title:"把桔子分享给朋友",path:'/mine/setting/share',icon:'iconfenxiang'},
            ],
            sharelist:[
                {id:1,title:"朋友圈",icon:'iconmoment'},
                {id:2,title:"微信",icon:'iconweixin'},
                {id:3,title:"QQ",icon:'iconqq'},
                {id:4,title:"微博",icon:'iconweibo'},
            ],

            show: false,
            isout:false
        }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        showPopup() {
        this.show = true;
        },
        cancleAction(){
        this.show=false;
        },
        outloginACtion(){
        this.isout=true;
        }
    },
}
</script>

<style lang='scss' scoped>
    #setting{
        .outloginlist{
            .outitem{
                width: 100%;
                padding: .266667rem 0;
                height: .666667rem;
                text-align: center;
                font-size: .426667rem;
                border-top: 1px solid #ccc;
                
            }
        }
        .sharelist{
            .cancel{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1.066667rem;
                border-top: 1px solid #ccc;
                line-height: 1.066667rem;
                text-align: center;
                font-size: .346667rem;
            }
            width: 100%;
            display: flex;
            justify-content: space-around;
            .item{
                p:nth-of-type(1){
                    font-size: .666667rem;
                }
                p:nth-of-type(2){
                    font-size: .346667rem;
                }
                margin-top: .533333rem;
                width: 1.333333rem;
                height: 1.333333rem;
                text-align: center;
            }
        }
         .share{
             .mark{
                 float: right;
             }
                height:1.333333rem;
                margin-top: .8rem;
                line-height:1.333333rem;
                font-size:.533333rem;
                padding: 0 .4rem;

            }
         .outlogin{
                width:4.533333rem;
                height: 1.2rem;
                background: #F88810;
                font-size:.426667rem;
                text-align: center;
                line-height:  1.2rem;
                color: #fafafa;
                margin: 1.333333rem auto;
                border-radius: .106667rem
            }
        .setlist{
            .list{
                .mark{
                    float: right;
                }
                height:1.333333rem;
                margin-top: .8rem;
                line-height:1.333333rem;
                font-size:.533333rem;
                padding: 0 .4rem;

            }
           
        }
        .top{
            h3{
                .top-back{
                    float: left;
                }
                line-height: 1.173333rem;
                text-align: center;
                font-size: .426667rem;
                padding: 0 .24rem
                
            }
        height:1.173333rem;
        background: #fafafa
        }
    }
</style>

