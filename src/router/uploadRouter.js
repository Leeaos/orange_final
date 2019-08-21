export default   {
    path: "/discover",
    component: () => import('../pages/add/Discover'),
    children: [
        {
          path: "hand",
          component: () => import('../pages/add/hand'),
        },
        {
          path: "wallpaper",
          component: () => import('../pages/add/wallpaper'),
        },
      ]
}