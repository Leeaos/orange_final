const express = require('express');
const {mock} = require('mockjs');
const server = express();




//加载资源
server.get('/',(req,res)=>{
    res.sendFile(__dirname+"/www/index.html")
})

/***********************************手账*********************************************** */
// 手账集市头部分类的数据
server.get('/api/home/handaccount/category', (req, res)=>{
    let data = mock({
        status: 0,
        message: 'ok',      
        'data|12':[
                {
                   'id|+1':0,
                    'title|+1':0
                }          
            ],
        
    })
    res.json(data);
});

// 手账集市商品列表分类的数据
//第一页
server.get('/api/home/handaccount/category/item/1', (req, res)=>{
    let data = mock({
        status: 0,
        message: 'ok',      
        'data|12':[
                {
                   'id|+1':0,
                   'name':'爱你瞬间',
                   'price':'5.00'  ,
                   imgUrl:'@image(256x336,@color)',                
                }          
            ],
        
    })
    res.json(data);
});



server.listen(9000, (error)=>{
    if(error){
        console.log('服务器启动失败');
    }else{
        console.log('服务器启动成功');
    }
})