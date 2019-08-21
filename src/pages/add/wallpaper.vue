<template>
    <div id="wallpaper">
      <router-view></router-view>
        <div class="wallpaper-heade">
            <p class="wallpaper-title">相机胶卷</p>
            <router-link  class="goback" to="/discover">返回  </router-link>
            <router-link  class="goback11" to="/discover">取消  </router-link>
        </div> 


      <app-scroll class="wallpaper-scroll">
        <div class="wallpaper-list">
                <li class="wallpaper-item" v-for="item in 50" :key="item">
                 {{item}}                   
            </li>
        </div>
        </app-scroll>  


        <div class="wallpaper-foote">            
            <router-link  class="goback12" to="">预览  </router-link>
            <router-link  class="goback13" to="">完成  </router-link>
        </div>


    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wallpaper {

  background: #fff;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.wallpaper-heade {
  left: 0px;
  width: 100%;
  height: 1.2rem;
  background-color: #fbd874;
  text-align: center;
  position: absolute;
  position: fixed;
}
.wallpaper-scroll {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1.2rem;
}
.wallpaper-title {
  left: 3.5rem;
  line-height: 1.2rem;
  width: 2.453333rem;
  height: 0.32rem;
  color: rgba(16, 16, 16, 1);
  font-size: 17px;
  text-align: center;
  font-family: PingFangSC-regular;
  position: relative;
}
.goback {
  left: -4.133333rem;
  top: 0.1rem;
  position: relative;
}
.goback11{
  left: 4.133333rem;
  top: 0.1rem;
  position: relative;
}
.wallpaper-item {
  margin-left: 0.26667rem;
  margin-top: 0.3rem;
  width: 2.14rem;
  height: 3rem;
  border-radius: 8px;
  background: lightblue;
  display: inline-block;

}
.wallpaper-foote{
  bottom: 0px;
  width: 100%;
  height: 1.2rem;
  background-color: #fbd874;
  text-align: center;
  position: absolute;
  position: fixed;
}
.goback12 {
  left: -3.5133333rem;
  top: 0.3rem;
  position: relative;
}
.goback13{
  left: 3.533333rem;
  top: 0.3rem;
  position: relative;
  border:1px solid #ccc;
  background: #ccc;
  padding: .066667rem  .066667rem;
}
</style>
