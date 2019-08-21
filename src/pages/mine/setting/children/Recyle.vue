<template>
    <div id="recyle" class="page subpage">
        <header class="top">
                <h3>
                    <span class="top-back" @click="goback">返回</span>
                    回收站
                </h3>
        </header>
        <div class="rub">
            <img src="/img/mine-img/rub.png" alt="">
        </div>
        <p class="des">
            删除的素材可以在回收站保留30天之后将永久删除哦
        </p>
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
#recyle{
    .des{
        width: 6.466667rem;
        height: 1.333333rem;
        font-size: .4rem;
        text-align: center;
        margin: .666667rem auto;
    }
    .rub{
        img{
            width: 2.4rem;
            height:2.946667rem;
            display: block;
            margin: 0 auto;
            margin-top: 4rem
           
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
        background: #fafafa;
        
    }
}
</style>
