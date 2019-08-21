export default {
    path: '/mine',
    component: ()=>import('../pages/mine/Mine/index'),
    children: [
        //搜索
        {
            path: 'fans',
            component: ()=>import('../pages/mine/Mine/childeren/mine-fans.vue')
        },
        {
            path: 'follow',
            component: ()=>import('../pages/mine/Mine/childeren/mine-follow.vue')
        },
        {
            path: 'releasehand',
            component: ()=>import('../pages/mine/Mine/childeren/mine-release-hand.vue')
        },
        {
            path: 'releasewallpaper',
            component: ()=>import('../pages/mine/Mine/childeren/mine-release-wallpaper.vue')
        },
        {
            path: 'collectionhand',
            component: ()=>import('../pages/mine/Mine/childeren/mine-collection-hand.vue')
        },
        {
            path: 'collectionwallpaper',
            component: ()=>import('../pages/mine/Mine/childeren/mine-collection-wallpaper.vue')
        },
        {
            path:'setting',
            component:()=>import('../pages/mine/setting/Setting'),
            children:[
                {
                    path:'accont',
                    component:()=>import('../pages/mine/setting/children/Accont')
                },
                {
                    path:'material',
                    component:()=>import('../pages/mine/setting/children/Material')
                },
                {
                    path:'recycle',
                    component:()=>import('../pages/mine/setting/children/Recyle')
                },
                {
                    path:'share',
                    component:()=>import('../pages/mine/setting/children/Share')
                }
            ]
        },
            
        
    ]
}