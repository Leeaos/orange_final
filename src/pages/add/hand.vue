<template>
    <div class="hand-list">
        <router-view></router-view>
        <div class="heade">
            <p class="heade-title">手账</p>
            <router-link  class="goback" to="/discover">返回  </router-link>
        </div>


        <app-scroll class="hand-scroll">
        <div class="heade-list">
                <li class="heade-img" v-for="item in 50" :key="item">
                  <span class="heade-item" > {{item}}</span> 
                  <span class="heade-list-title">4646</span>
                   
            </li>
        </div>
        </app-scroll>          
             

    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hand-list {
  overflow: hidden;
  background: #fff;
  height: 100%;
  z-index: 10；;
}
.hand-scroll {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1.2rem;
}

.heade {
  left: 0px;
  width: 100%;
  height: 1.2rem;
  background-color: #fbd874;
  text-align: center;
  position: absolute;
  position: fixed;
}
.heade-title {

  left: 4.5rem;
  line-height: 1.2rem;
  width: 1.453333rem;
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
.heade-list {
  height: 100%;
}
.heade-img {
  display: inline-block;
}

.heade-item {
  margin-left: 0.26667rem;
  margin-top: 0.3rem;
  width: 3rem;
  height: 4rem;
  border-radius: 8px;
  background: lightblue;
  display: block;
}
.heade-list-title {
  margin-left: 0.26667rem;
  margin-top: .1rem;
  width: 3rem;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  display: block;
}
</style>
