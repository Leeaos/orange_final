<template>
  <div>
        <div id="hand-account">

          <header class="hand-account-header border-bottom">
              <router-link class="title" to="/home/handaccount/market">手账集市</router-link>
              <router-link class="title" to="/home/handaccount/people">手账达人</router-link>
          </header>
           
          <app-scroll class="hand-paper-content">
            <div class="hand-list">
              <ul class=" item left-item">
                    <li class="bar  left-bar"
                    v-for="item in 10" :key="item">
                    <!-- <img class="bar  left-bar" :src="item.imgUrl" alt=""/> -->
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
import {mapState} from 'vuex'
export default {
    components:{

    },
 computed:{
        ...mapState({
            handAccountListData:state=>state.home.handAccountListData
        })
    },
    methods:{
        //请求首页的初始化数据
        getHomeInitialData(){
            //列表
            this.$store.dispatch('home/requestHandAccountListData')
        }
    },
    created(){
        this.getHomeInitialData();
    }
};
</script>

<style lang="scss" scoped>
#hand-account {
  width:100%;
  position: absolute;
  top: 1.173333rem;
  bottom: 0;

.hand-paper-content{
    width: 100%;
    position: absolute;
    bottom: 1.173333rem;
    top: 1.173333rem;
  }
  .hand-account-header {
    height: 1.173333rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    .title {
      line-height: 1.173333rem;
      font-size: .426667rem;
      &.router-link-active {
        color: #F88718;
        font-size: .373333rem;
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

