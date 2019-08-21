<template>
    <div id="accont" class="page subpage">
        <header class="top">
                <h3>
                    <span class="top-back" @click="goback">返回</span>
                    账号管理
                </h3>
        </header>
        <h2>当前账号</h2>
        <li class="lists">
            <div class="lists-left">
                <span class="iconfont iconweixin"></span>
                <span>
                     微信账号
                </span>
            </div>
            <div class="lists-right">
                <span>解绑</span>
            </div>
        </li>
        <h2>账号绑定</h2>
        <li class="lists">
            <div class="lists-left">
                <span class="iconfont iconqq"></span>
                <span>
                        QQ账号
                </span>
            </div>
            <div class="lists-right">
                <span>绑定</span>
            </div>
        </li>
        <li class="lists">
            <div class="lists-left">
                <span class="iconfont iconweibo"></span>
                <span>
                        微博账号
                </span>
            </div>
            <div class="lists-right">
                <span>绑定</span>
            </div>
        </li>
        <li class="lists">
            <div class="lists-left">
                <span class="iconfont iconshouji"></span>
                <span>
                        手机账号
                </span>
            </div>
            <div class="lists-right">
                <span>绑定</span>
            </div>
        </li>
    </div>
</template>

<script>

export default {
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },

}
</script>

<style lang='scss' scoped>
#accont{
    h2{
        height:1.333333rem;
        line-height: 1.333333rem;
        padding:0 .266667rem;
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
        background: #fafafa;
        
    }
    .lists{
        .lists-left{
            .weixin{
                font-size: .666667rem
            }
            margin-left: .266667rem
        }
        .lists-right{
            span{
                margin-right: .8rem;
                background: #999;
                border-radius: .08rem;
                padding: 0 .4rem;
                background: #FD9C38;
                color: #fff
               
            }
            
        }
            height:1.333333rem;
            line-height:1.333333rem;
            font-size:.533333rem;
            display: flex;
            justify-content: space-between;
            background: #eeeeee;
            margin-top: .533333rem;

    }
    
}
</style>
