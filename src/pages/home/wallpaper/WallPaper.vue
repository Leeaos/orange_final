<template>
   <div>
        <div id="wall-paper">

            <div class="wall-account-header border-bottom">
                <router-link class="title" to="/home/wallpaper/market">壁纸集市</router-link>
                <router-link class="title" to="/home/wallpaper/people">壁纸达人</router-link>
            </div>

            <app-scroll class="wall-paper-content">
              <div class="hand-list">
                <ul class=" item left-item">
                      <li class="bar  left-bar"
                      v-for="item in 10" :key="item">
                      {{item}}
                  </li>
                </ul>

                  <ul class="item right-item">
                      <li class="bar right-bar"
                      v-for="item in 10" :key="item">
                      {{item}}
                      </li>
                  </ul>
              </div>
          </app-scroll> 
        </div>

        <router-view></router-view>

   </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
#wall-paper {
  .wall-paper-content{
    width: 100%;
    position: absolute;
    bottom: 1.173333rem;
    top: 2.346667rem;
  }
  .wall-account-header {
    height: 1.173333rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    .title {
      line-height: 1.173333rem;
      font-size: 0.426667rem;
      &.router-link-active {
        color: #f88718;
        font-size: 0.373333rem;
        font-weight: bold;
      }
    }
  }
  .hand-list{
        width: 100%;
        display: flex;
        .item{
            flex:1;
            .bar{
                border-radius:.133333rem;
            }
            .left-bar{
                margin: .266667rem .133333rem 0 .266667rem;
            }
            .right-bar{
                margin: .266667rem .266667rem 0 .133333rem ;
            }

            .left-bar:nth-of-type(odd),.right-bar:nth-of-type(even){
                height: 4.773333rem;
                background: lightskyblue;
            }
            .left-bar:nth-of-type(even),.right-bar:nth-of-type(odd){
                height: 7.173333rem;
                background: pink;
            }
        }
    }
}
</style>





