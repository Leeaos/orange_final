<template>
    <div class="mine">
        
    <app-scroll class="mine-scroll">
        <mine/>
    </app-scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import Mine from './childeren/mine'
export default {
components:{
      Mine
    }
}
</script>

<style lang="scss" scoped>
    .mine-scroll{
      position: absolute;
      top: 0;
      bottom: 1.306667rem;
      left: 0;
      width: 100%;
    }
</style>
