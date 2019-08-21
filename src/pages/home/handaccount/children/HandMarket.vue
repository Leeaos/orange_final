<template>
    <div id="hand-market" class="page subpage">
        <header class="hand-market-header border-bottom">
            <span class="title goback" @click="goBack">返回</span >
            <span class="title hand"  >手账集市</span >
        </header>      

        <nav class="market-nav-wrap">
           <ul  class="lists border-bottom">
              <li  v-for="item in handMarketNavData" :key="item.id" class="list-item">
                {{item.title}}
              </li>
           </ul>
        </nav>

        <app-scroll :scrollX='scrollX' class="content">        
           <ul class="hand-market-list">
              <li class="market-item"  v-for="(item) in handMarketGoodsListData" :key="item.id">
                <img 
                :src="item.imgUrl" alt=""
                @click="coverShow(item.imgUrl)"/>
                <p>{{item.name}}</p>
                <p>￥{{item.price}}</p>
              </li>
           </ul>
        </app-scroll>

       <keep-alive>
        <div class="cover-wrap page subpage" v-if="show">
          <div class="cover-content content">
            <div class="box">
              <span class="close"
                @click="coverShow"
              >X</span>
              <img :src="coverImgUrl" alt=""/>
            </div>           
          </div>
        </div>
       </keep-alive>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      scrollX: true,
      show: false,
      coverImgUrl:''
    };
  },
  computed: {
    ...mapState({
      handMarketNavData: state => state.home.handMarketNavData,
      handMarketGoodsListData: state => state.home.handMarketGoodsListData
    })
  },
  methods: {
    getInitialData() {
      this.$store.dispatch("home/requestHandMarketNavData");
      this.$store.dispatch("home/requestHandMarketGoodsListData");
    },
    goBack() {
      this.$router.go(-1);
    },
    coverShow(url){
      this.show = !this.show;
      this.coverImgUrl = url;
    }
  },
  created() {
    this.getInitialData();
  }
};
</script>

<style lang="scss" scoped>
#hand-market {
  background: #fafafa;
  .content {
    top: 2.346667rem;
  }
  .market-nav-wrap {
    width: 100%;
    overflow: hidden;
  }
  .hand-market-header {
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
  .lists {
    display: flex;
    width: 200%;
    text-align: center;
    padding: 0.26666rem;
    .list-item {
      width: 2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border: 0.026667rem solid lightcoral;
      border-radius: 0.293333rem;
    }
  }
  .hand-market-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .market-item {
      width: 3.2rem;
      // height: 4.48rem;
      margin: 0.053333rem 0;
      img {
        width: 3.2rem;
      }
    }
  }

  .cover-wrap {
    background: rgba($color: #000000, $alpha: 0.6);
    .cover-content {
      width: 100%;
      .box {
        background: #fff;
        width: 6rem;
        height: 7.866667rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img{
        width: 6rem;
        }
      }
      .close {
        display: inline-block;
        text-align: center;
        position: absolute;
        right: .066667rem;
        top:.066667rem;
        width: 0.533333rem;
        height: 0.533333rem;
        line-height: 0.533333rem;
        font-size: .266667rem;
        border-radius: 50%;
        border: .053333rem solid #999;
      }
    }
  }
}
</style>
