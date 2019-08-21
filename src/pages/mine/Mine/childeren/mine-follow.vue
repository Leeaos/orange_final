<template>
    <div class="mine-follow">
        <div class="follow-title">
            <router-link class="follow-title-back" to="/mine">返回</router-link>
            <span class="follow-title-tit">我的关注</span>
        </div>
        <app-scroll class="follow-scroll">
            <li>
                <img src="/img/home.png" alt="">
                <div>
                    <p class="follow-name">xxx</p>
                    <p class="follow-autograph">xxxx</p>
                </div>
                <span>已关注</span>
            </li>
        </app-scroll>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mine-follow{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        background: white;
        z-index:100;
        .follow-title{
            height: .533333rem;
            text-align: center;
            .follow-title-back{
                position: absolute;
                left: .533333rem;
                font-size:.453333rem;
            }
            .follow-title-tit{
                font-size:.453333rem;
                
            }
        }
        .follow-scroll{
            position: absolute;
            top: .666667rem;
            left: 0;
            width: 100%;
            bottom: 0;
            padding: 0 .4rem;
            li{
                height: 1.733333rem;
                display: flex;
                img{
                    height: 1.333333rem;
                    width: 1.333333rem
                }
                span{
                    width: 1.066667rem;
                    height: .533333rem;
                    background: #FD9C38;
                    display: block;
                    margin: auto 0;
                    text-align: center;
                    line-height: .533333rem;
                    border-radius: 10%;
                }
                div{
                    width: 7.066667rem;
                    padding: .266667rem;
                    box-sizing: border-box;
                }
            }
        }
        
    }
</style>
