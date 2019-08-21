
<template>
<!-- 发布的壁纸 -->
    <div class="mine-release-hand">
        <div class="release-hand-title">
            <router-link class="release-hand-title-back" to="/mine">返回</router-link>
            <span class="release-hand-title-tit">我发布的壁纸</span>
        </div>
        <app-scroll class="release-hand-scroll">
            
        </app-scroll>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mine-release-hand{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        background: white;
        z-index:100;
        .release-hand-title{
            height: .533333rem;
            text-align: center;
            .release-hand-title-back{
                position: absolute;
                left: .533333rem;
                font-size:.453333rem;
            }
            .release-hand-title-tit{
                font-size:.453333rem;
                
            }
        }
        .release-hand-scroll{
            position: absolute;
            top: .666667rem;
            left: 0;
            width: 100%;
            bottom: 0;
            padding: 0 .4rem;
            
        }
        
    }
</style>
