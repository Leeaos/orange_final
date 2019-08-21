export default   {
    path: "/discover",
    component: () => import('../pages/upload/Discover'),
    children: [
        {
          path: "hand",
          component: () => import('../pages/upload/hand'),
        },
        {
          path: "wallpaper",
          component: () => import('../pages/upload/wallpaper'),
        },
      ]
}