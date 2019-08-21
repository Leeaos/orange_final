<template>
    <div id="share" class="page subpage">
        <h1>
            分享
        </h1>
        <van-button type="primary" @click="showPopup">
            展示弹出层
        </van-button>
        <!-- <van-popup v-model="show">内容</van-popup> -->
           <van-popup
                v-model="show"
                round
                position="bottom"
                :style="{ height: '20%' }">
                <li>微信</li>
                <li>微信</li>
                <li>微信</li>
           </van-popup>      
    </div>
</template>

<script>
import { Popup } from 'vant';
import { Button } from 'vant';
export default {
    components:{
        [Popup.name]:Popup,
        [Button.name]:Button
    },
    data() {
        return {
            show: false
        }
    },

     methods: {
    showPopup() {
        this.show = true;
        }
    }

}
</script>

<style>

</style>
