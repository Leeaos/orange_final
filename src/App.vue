<template>
  <div id="app">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    <TabBar></TabBar>
  
  </div>
</template>
<script>
import TabBar from './components/tab-bar/tab-bar'
import Mine from './pages/mine/Mine/index'
export default {
    components:{
      TabBar,
      Mine,
    }
}
</script>

<style lang="scss" scoped>
</style>
