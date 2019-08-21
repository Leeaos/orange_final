<template>
    <div id="search"  class="page subpage">
        <header class="inp">
            <div class="w-head">
                <button class="w-but"  @click="BotAction">搜</button>
                <i>|</i>
                <input type="text" v-model="value" placeholder="搜索素材或用户">
            </div>
            <div class="w-back" @click="WbackAction">取消</div>
        </header>


        <div class="fodder">
            <div class="Muser">
                    <div class="material"  v-for="(item,index) in matterData" :class="{'active':i==index}"  
                            :key="item.id"  @click="materialAction(index)">
                        {{item.name}}
                    </div>
                   <div v-show="isShow" class="hotbot" >
                        <p>橘子热搜</p>
                        <app-scroll class="Hot">
                           
                            <div class="HOT">
                            <li v-for="(it,ind) in newval" :key="ind">
                            {{it}}
                             </li>
                            </div>
                        </app-scroll>
                    </div>


                    <div v-show="!isShow" class="interest">
                            <p>可能感兴趣的人</p>
                            <app-scroll class="interests">      
                                    <h1 v-for="item in 100" :key="item">test</h1>
                                    
                            </app-scroll>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            matterData:[
                {id:1,name:'素材'},
                {id:2,name:'用户'}
            ],
            i:"",
            isShow:true,
            value:'',
            newval:[] 
        }
    },
    methods:{
        BotAction(){
            //获得输入款内容
            this.newval.push(this.value);
            this.value='';
            console.log(this.newval)
        },
        WbackAction(){
            this.$router.go(-1);
        },
        materialAction(index){
            console.log(index)
            this.i=index;
            this.isShow=!this.isShow;
        }
    }
}
</script>


<style scoped lang="scss">
#search{
    background: #d85858;
    .inp{
        background: #fafafa;
        width:100%;
        height:1.157895rem;
        display: flex;
        line-height: 1.157895rem;
        justify-content: space-around;
        // position: absolute;
        top:0;
        left:0;
        position: fixed;
        z-index: 10;
        .w-head{
            display: inline-block;
            width:5.263158rem;
            height:.657895rem;
            border-radius: .105263rem;
            border:.026316rem solid #999;
            background: #E4E4E4;            
            display: flex;
            margin-top:.263158rem;
            
            i{
                line-height:.557895rem;
                margin-right:.131579rem;
            }
            .w-but{
                border:none;
                height:.657895rem;
                background: #E4E4E4;                
            }
            input{
            height:.657895rem;
            width:4.363158rem;
            border: none;
            background: #E4E4E4;
            font-size:.368421rem;
        }
        }
       
    }
    .fodder{
        width:100%;
        position: absolute;
        top:1.157895rem;
        height:100%;
        bottom:0;
        left:0;
        background:#fafafa;
       
        .Muser{
                margin:1.052632rem 0 0 .710526rem;
                background:#fafafa;
            
                // height:100%;
                // line-height: 1.236842rem;
                font-size:.421053rem;
                color:#101010;
                margin-left:.263158rem;
                .material{
                    display: inline-block;
                    margin-left:.263158rem;
                }
                .active{
                    font-size:.578947rem;
                    font-weight: 600;
                }
                .hotbot{
                    width: 100%;
                    background: #fafafa;
                    height:100%;
                    color:#666363;
                    position: absolute;
                    left:0;
                    top:1.842105rem;
                    bottom:0;
                    
                    // margin-left:.263158rem;
                    margin-top:.526316rem;
                    p{
                        margin-left:.263158rem;
                    }
                    .Hot{
                        width: 100%;
                        height:100%;
                        .HOT{
                            display: flex;
                            flex-wrap: wrap;
                        }
                        li{
                            padding:.052632rem .263158rem;
                            font-size:.368421rem;
                            border: .026316rem solid #BBBBBB;
                            border-radius: .263158rem;
                            margin-left:.526316rem;
                            margin-top:.394737rem;
                        }
                    }
                }
                .interest{
                    background: #ccc;
                    height:100%;
                    color:#666363;  
                    position: absolute;
                    left:0;
                    top:1.842105rem;
                    width:100%;
                    // margin-left:.263158rem;
                    margin-top:.526316rem;
                    p{
                        margin-left:.263158rem;
                    }
                    .interests{
                        height:100%;

                    }
                }
            }
        }
    }




</style>