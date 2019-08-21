export default {
    path: '/home',
    component: () => import('../pages/home/home/Home'),

    children: [{
            path: 'handaccount',
            component: () => import('../pages/home/handaccount/HandAccount'),
            children: [{
                    path: 'market',
                    component: () => import('../pages/home/handaccount/children/HandMarket')
                },
                {
                    path: 'people',
                    component: () => import('../pages/home/handaccount/children/HandPeople')
                },

            ]
        },


        {
            path: 'wallpaper',
            component: () => import('../pages/home/wallpaper/WallPaper'),
            children: [{
                    path: 'market',
                    component: () => import('../pages/home/wallpaper/children/PaperMarket')
                },
                {
                    path: 'people',
                    component: () => import('../pages/home/wallpaper/children/PaperPeople')
                },

            ]
        },

        
        {
            path: 'search',
            component: () => import('../pages/home/search/Search')
        },
    ],

    path: '/home',
    redirect: '/home/handaccount'
}