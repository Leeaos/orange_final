<template>
    <div id="Material" class="page subpage">
        <header class="top">
                <h3>
                    <span class="top-back" @click="goback">返回</span>
                    素材管理
                    <span class="top-right">删除</span>
                </h3>
        </header>
        <div class="title">
            <p class="title-left">手账素材</p>
            <p class="title-right">壁纸素材</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isbold:false
        }
    },
      methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang='scss' scoped>
#Material{
    .title{

        height: 1.333333rem;
        line-height: 1.333333rem;
        font-size: .426667rem;
        padding: 0 .4rem;
        display: flex;
        justify-content: space-between;
    }
        .top{
            h3{
                .top-right{
                    float: right;
                }
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
