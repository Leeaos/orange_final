<template>
    <div class="mine-fanss">
        <div class="fans-title">
            <router-link class="fans-title-back" to="/mine">返回</router-link>
            <span class="fans-title-tit">我的粉丝</span>
        </div>
        <app-scroll class="fans-scroll">
            <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
             <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
            <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
            <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
            <li>
                <img src="/img/upload.png" alt="">
                <div>
                    <p class="fans-name">xxx</p>
                    <p class="fans-autograph">xxxx</p>
                </div>
                <span>关注</span>
            </li>
        </app-scroll>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mine-fanss{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        background: white;
        z-index:100;
        .fans-title{
            height: .533333rem;
            text-align: center;
            .fans-title-back{
                position: absolute;
                left: .533333rem;
                font-size:.453333rem;
            }
            .fans-title-tit{
                font-size:.453333rem;
                
            }
        }
        .fans-scroll{
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
