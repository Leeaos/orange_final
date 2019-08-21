<template>
    <div id="hand-people" class="page">
        <header class="hand-people-header">
            <span class="title goback" @click='goBack'>返回</span >
            <span class="title hand"  >手账达人</span >
        </header>   
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
#hand-people{
    background: skyblue;
    .hand-people-header {
    height: 1.173333rem;
    background: #fff;
    text-align: center;
    .title {
      display: inline-block;
      font-size: 0.453333rem;
      line-height: 1.173333rem;
      &.goback {
        position: absolute;
        left: 0.24rem;
        font-size: 0.346667rem;
      }
    }
  }
}
</style>
