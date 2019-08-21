<template>
<div class="page" id="discover">
    <router-view></router-view>
     
    <router-link class="hand" to="/discover/hand">

    </router-link>
    <router-link  class="wallpaper" to="/discover/wallpaper">

    </router-link>
    <router-link  class="goback" to="/Home">返回  </router-link>
</div>
</template>

<script>
export default {};
</script>

<style  scoped >
#discover {
  background: #fff;
  z-index: 10;
  bottom: 0;
  position: absolute;
}
.hand {
  left: 0.293333rem;
  top: 10rem;
  width: 3.333333rem;
  height: 3.333333rem;
  line-height: 20px;
  background-color: #fbd874;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  border-radius: 50%;
  position: relative;
  display: block;
}
.wallpaper {
  left: 6.066667rem;
  top: 6.733333rem;
  width: 3.333333rem;
  height: 3.333333rem;
  line-height: 20px;
  background-color: #fbd874;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
  position: relative;
  display: block;
}
.goback {
  left: 4.473333rem;
  top: 8.333333rem;
  width: 1.333333rem;
  height: 1.333333rem;
  background-color: #fff;
  position: relative;
  display: block;
}
</style>

